import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const maxDuration = 60; // 60 seconds

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
      let imageBuffer: ArrayBuffer;
      let mimeType = "image/jpeg";
      try {
        const imageRes = await fetch(imageUrl);
        if (!imageRes.ok) throw new Error("Failed to fetch image");
        imageBuffer = await imageRes.arrayBuffer();
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

      // Convert ArrayBuffer to Base64 in Edge environment
      const base64String = Buffer.from(imageBuffer).toString('base64');
      const imagePart = {
        inlineData: {
          data: base64String,
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

    // Step 2: Generate the image natively via REST API (Nano Banana / Gemini 3.1 Flash Image)
    console.log("Generating image with Nano Banana...");
    
    try {
      const imageGenRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  { text: conceptData.imagePrompt }
                ]
              }
            ],
            generationConfig: {
              responseModalities: ["IMAGE"],
              imageConfig: {
                imageSize: "1K"
              }
            }
          }),
        }
      );

      if (!imageGenRes.ok) {
        const errText = await imageGenRes.text();
        console.error("Image API error:", errText);
        throw new Error(`API returned ${imageGenRes.status}: ${errText}`);
      }

      const imgData = await imageGenRes.json();
      
      let base64Image = null;
      if (
        imgData.candidates && 
        imgData.candidates.length > 0 && 
        imgData.candidates[0].content && 
        imgData.candidates[0].content.parts
      ) {
        const parts = imgData.candidates[0].content.parts;
        for (const part of parts) {
          if (part.inlineData && part.inlineData.data) {
            base64Image = part.inlineData.data;
            break;
          }
        }
      }

      if (!base64Image) {
        throw new Error("No image data returned from Gemini 3.1 Flash Image API.");
      }

      return new Response(JSON.stringify({
        ...conceptData,
        image: `data:image/png;base64,${base64Image}`
      }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Image generation failed:", err);
      return new Response(JSON.stringify({ error: "Failed to generate image" }), {
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
