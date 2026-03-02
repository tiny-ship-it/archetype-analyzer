import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { brand, context, archetype } = await req.json();

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
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const contextSection = context
      ? `\nAdditional context about this brand: ${context}\n`
      : "";

    const prompt = `You are a world-class brand strategist. Transform the brand "${brand}" into a "${archetype}" archetype brand.${contextSection}

Imagine this brand has fully committed to the ${archetype} archetype. Be specific, creative, and concrete. Reference actual brand details where relevant. Avoid generic statements.

Output EXACTLY this structure with these markdown headers:

## Brand Voice
List exactly 3 core adjectives on the first line (comma-separated). Then write exactly 2 sentences describing the brand's voice and tone in this archetype.

## Tagline
Write one powerful new tagline this brand would use as a ${archetype} brand. Just the tagline — no explanation.

## Core Message
Write one paragraph (3-4 sentences) of what this brand now stands for in the ${archetype} archetype. What does it believe? What does it promise?

## Visual Personality
Describe the color mood, aesthetic direction, and key visual cues this brand would adopt. Be specific about colors, textures, imagery, and overall visual feeling. 3-4 sentences.

## Campaign Shift
Write 2-3 sentences on how their current marketing and advertising approach would fundamentally change if they adopted the ${archetype} archetype.

## Example Campaign Concept
Describe one concrete, specific campaign idea this brand would run as a ${archetype} brand. Give it a name, describe the execution, and explain the emotional impact. 3-4 sentences.`;

    const result = await model.generateContentStream(prompt);

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    console.error("Analyze API error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
