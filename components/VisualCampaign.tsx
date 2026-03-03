"use client";

import { useState } from "react";
import Image from "next/image";

interface VisualCampaignProps {
  brand: string;
  archetypeId: string;
  archetypeName: string | null;
}

export function VisualCampaign({ brand, archetypeId, archetypeName }: VisualCampaignProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [data, setData] = useState<{
    originalCampaign: string;
    reimaginedConcept: string;
    imagePrompt: string;
    image: string;
    originalImageUrl?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/visualize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          brand, 
          archetype: archetypeName || archetypeId,
          imageUrl: imageUrlInput.trim() || undefined
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(err.error || "Generation failed");
      }

      const json = await response.json();
      setData({ ...json, originalImageUrl: imageUrlInput.trim() || undefined });
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mt-8">
      {!data && !isLoading && (
        <div className="w-full p-6 border-2 border-dashed border-stone-200 rounded-2xl flex flex-col items-center justify-center text-center bg-white">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-stone-900 mb-2">Generate Visual Campaign</h3>
          <p className="text-stone-500 text-sm mb-4">Provide an existing campaign image URL to remix it, or leave blank to research a recent campaign automatically.</p>
          
          <input
            type="url"
            placeholder="Reference Image URL (optional)"
            value={imageUrlInput}
            onChange={(e) => setImageUrlInput(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-stone-300 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          
          <button
            onClick={handleGenerate}
            className="px-6 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
          >
            {imageUrlInput ? "Deconstruct & Remix" : "Research & Generate"}
          </button>
        </div>
      )}

      {isLoading && (
        <div className="w-full p-12 border-2 border-stone-100 rounded-2xl bg-white flex flex-col items-center justify-center text-center space-y-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-t-2 border-stone-800 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-t-2 border-amber-500 animate-spin" style={{ animationDelay: '150ms' }}></div>
          </div>
          <div>
            <p className="font-medium text-stone-900">
              {imageUrlInput ? "Deconstructing Image & Generating..." : "Researching & Generating..."}
            </p>
            <p className="text-sm text-stone-500 mt-1">Spinning up Nano Banana (Gemini 2.5 Flash)</p>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm mt-4">
          <p className="font-semibold">Failed to generate visual campaign</p>
          <p className="opacity-80 mt-1">{error}</p>
          <button onClick={handleGenerate} className="mt-3 text-xs font-medium bg-red-100 px-3 py-1.5 rounded-lg hover:bg-red-200">
            Try Again
          </button>
        </div>
      )}

      {data && !isLoading && (
        <div className="w-full rounded-2xl border-2 border-stone-200 bg-white overflow-hidden shadow-sm mt-4">
          <div className="p-1 bg-stone-900 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-300">Generated Campaign Visual</span>
          </div>
          
          <div className={`grid ${data.originalImageUrl ? 'grid-cols-2' : 'grid-cols-1'} gap-px bg-stone-200`}>
            {data.originalImageUrl && (
              <div className="bg-white flex flex-col">
                <div className="p-2 bg-stone-50 border-b border-stone-100 text-center">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Original Reference</span>
                </div>
                <div className="relative w-full aspect-square bg-stone-100">
                  <Image 
                    src={data.originalImageUrl} 
                    alt="Original Reference" 
                    fill
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>
              </div>
            )}
            
            <div className="bg-white flex flex-col">
              <div className="p-2 bg-stone-50 border-b border-stone-100 text-center">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Remixed: {archetypeName}</span>
              </div>
              <div className="relative w-full aspect-square bg-stone-100">
                <Image 
                  src={data.image} 
                  alt="Generated campaign visual" 
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
          
          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Original Context</h3>
              <p className="text-stone-700 text-sm leading-relaxed">{data.originalCampaign}</p>
            </div>
            
            <div className="w-full h-px bg-stone-100"></div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Reimagined Concept</h3>
              <p className="text-stone-700 text-sm leading-relaxed">{data.reimaginedConcept}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
