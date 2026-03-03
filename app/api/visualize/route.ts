import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";
import os from "os";

export const runtime = "nodejs";
export const maxDuration = 60; // 60 seconds

const execAsync = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const { brand, archetype, imageUrl } = await req.json();

    if (!brand || !archetype) {
      return new Response(JSON.stringify({ error: "brand and archetype are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash"
    });

    let result;

    if (imageUrl) {
      console.log("Fetching reference image...", imageUrl);
      let imageBuffer: Buffer;
      let mimeType = "image/jpeg";
      try {
        const imageRes = await fetch(imageUrl);
        if (!imageRes.ok) throw new Error("Failed to fetch image");
        imageBuffer = Buffer.from(await imageRes.arrayBuffer());
        mimeType = imageRes.headers.get("content-type") || "image/jpeg";
      } catch (err) {
        console.error("Image fetch error:", err);
        return new Response(JSON.stringify({ error: "Could not load the provided image URL." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const prompt = `Deconstruct this advertising campaign image. Identify its hook, subject, and composition in 2-3 sentences.
Then, reimagine this specific campaign if the brand fully adopted the "${archetype}" archetype. 
Finally, provide a single, highly descriptive prompt for an AI image generator to create a key visual for this reimagined campaign. Make sure the prompt is safe, does not violate any content policies, and focuses on aesthetic, mood, and visual elements rather than specific real people.

Format your response exactly as valid JSON with these keys:
{
  "originalCampaign": "Deconstruction of the original image...",
  "reimaginedConcept": "How it changes under the new archetype...",
  "imagePrompt": "A highly detailed visual description for the image generator..."
}`;

      const imagePart = {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType
        }
      };

      console.log("Analyzing image and generating campaign concepts...");
      result = await model.generateContent([prompt, imagePart]);
    } else {
      const prompt = `Research a notable recent advertising campaign by the brand "${brand}". Describe its core concept and visual style in 2-3 sentences.
Then, reimagine this specific campaign if the brand fully adopted the "${archetype}" archetype. 
Finally, provide a single, highly descriptive prompt for an AI image generator to create a key visual for this reimagined campaign. Make sure the prompt is safe, does not violate any content policies, and focuses on aesthetic, mood, and visual elements rather than specific real people.

Format your response exactly as valid JSON with these keys:
{
  "originalCampaign": "Name and brief description of the original campaign...",
  "reimaginedConcept": "How it changes under the new archetype...",
  "imagePrompt": "A highly detailed visual description for the image generator..."
}`;

      console.log("Generating campaign concepts...");
      result = await model.generateContent(prompt);
    }

    let text = result.response.text();
    console.log("Gemini response text:", text);
    
    // Clean markdown code blocks if present
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    let conceptData;
    try {
      conceptData = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON:", text);
      return new Response(JSON.stringify({ error: "Failed to parse campaign concept" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Step 2: Generate the image using Nano Banana script
    const tmpDir = os.tmpdir();
    const filename = `campaign_${Date.now()}_${Math.random().toString(36).substring(7)}.png`;
    const imagePath = path.join(tmpDir, filename);
    const scriptPath = "/usr/lib/node_modules/openclaw/skills/nano-banana-pro/scripts/generate_image.py";
    
    // Safely escape the prompt for bash
    const safePrompt = conceptData.imagePrompt.replace(/"/g, '\\"').replace(/\$/g, '\\$').replace(/`/g, '\\`');
    
    const command = `uv run ${scriptPath} --prompt "${safePrompt}" --filename "${imagePath}" --resolution 1K`;
    
    console.log("Running image generation command...");
    try {
      await execAsync(command, { cwd: tmpDir, timeout: 45000, env: process.env });
      console.log("Image generation complete.");
    } catch (err) {
      console.error("Image generation failed:", err);
      return new Response(JSON.stringify({ error: "Failed to generate image" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Step 3: Read image and return as base64
    try {
      const imageBuffer = await fs.readFile(imagePath);
      const base64Image = imageBuffer.toString("base64");
      
      // Cleanup
      await fs.unlink(imagePath).catch(console.error);

      return new Response(JSON.stringify({
        ...conceptData,
        image: `data:image/png;base64,${base64Image}`
      }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Failed to read generated image:", err);
      return new Response(JSON.stringify({ error: "Failed to load generated image" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    console.error("Visualize API error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
