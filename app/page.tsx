"use client";

import { useState, useRef, useCallback } from "react";
import { BrandInput } from "@/components/BrandInput";
import { ArchetypeGrid } from "@/components/ArchetypeGrid";
import { ResultCard } from "@/components/ResultCard";
import { LoadingState } from "@/components/LoadingState";
import { getArchetypeById } from "@/lib/archetypes";

export default function Home() {
  const [brand, setBrand] = useState("");
  const [context, setContext] = useState("");
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const canAnalyze = brand.trim().length > 0 && selectedArchetype !== null && !isLoading;

  const handleAnalyze = useCallback(async () => {
    if (!canAnalyze) return;

    // Cancel any in-flight request
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    setResult("");
    setError(null);
    setIsLoading(true);
    setIsStreaming(false);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand: brand.trim(), context: context.trim(), archetype: selectedArchetype }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(err.error || "Request failed");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      setIsLoading(false);
      setIsStreaming(true);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        setResult(accumulated);
      }

      setIsStreaming(false);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsLoading(false);
      setIsStreaming(false);
    }
  }, [brand, context, selectedArchetype, canAnalyze]);

  const archetypeLabel = selectedArchetype
    ? getArchetypeById(selectedArchetype)?.name
    : null;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shadow-sm">
              <span className="text-white text-lg font-bold leading-none">A</span>
            </div>
            <div>
              <h1 className="text-stone-900 font-bold text-lg leading-none">
                Archetype Analyzer
              </h1>
              <p className="text-stone-400 text-xs mt-0.5">Brand Transformation Tool</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-stone-400 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Powered by Gemini
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 leading-tight">
            What if your brand was a{" "}
            <span className="text-amber-500">different archetype?</span>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Input any brand, pick a Jungian archetype, and see a complete creative
            transformation — voice, tagline, visuals, and campaigns.
          </p>
        </div>

        {/* Input + Grid */}
        <div className="bg-white rounded-2xl border-2 border-stone-200 p-8 shadow-sm space-y-8">
          {/* Brand Input */}
          <BrandInput
            brand={brand}
            context={context}
            onBrandChange={setBrand}
            onContextChange={setContext}
            disabled={isLoading || isStreaming}
          />

          {/* Archetype Grid */}
          <ArchetypeGrid
            selected={selectedArchetype}
            onSelect={setSelectedArchetype}
            disabled={isLoading || isStreaming}
          />

          {/* Analyze Button */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-100">
            <p className="text-stone-400 text-sm">
              {selectedArchetype && brand
                ? `Transform ${brand} → ${archetypeLabel}`
                : !brand
                ? "Enter a brand name to get started"
                : "Select an archetype to continue"}
            </p>
            <button
              onClick={handleAnalyze}
              disabled={!canAnalyze}
              className="
                px-6 py-3 rounded-xl font-semibold text-sm
                bg-amber-500 text-white
                hover:bg-amber-600 active:bg-amber-700
                disabled:opacity-40 disabled:cursor-not-allowed
                transition-all duration-150 shadow-sm hover:shadow
                flex items-center gap-2
              "
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                    />
                  </svg>
                  Analyzing…
                </>
              ) : (
                <>
                  <span>Analyze</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl border-2 border-red-200 bg-red-50 px-6 py-4 flex items-start gap-3">
            <span className="text-red-500 text-lg">⚠️</span>
            <div>
              <p className="text-red-700 font-semibold text-sm">Something went wrong</p>
              <p className="text-red-600 text-sm mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <LoadingState brand={brand} archetype={archetypeLabel || selectedArchetype || ""} />
        )}

        {/* Results */}
        {(result || isStreaming) && selectedArchetype && (
          <ResultCard
            brand={brand}
            archetypeId={selectedArchetype}
            content={result}
            isStreaming={isStreaming}
          />
        )}

        {/* Examples hint */}
        {!result && !isLoading && !isStreaming && (
          <div className="text-center py-8">
            <p className="text-stone-400 text-sm mb-4">Try these brands:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Nike", "Apple", "Patagonia", "McLaren Racing", "Rolex", "Airbnb"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border-2 border-stone-200 text-stone-600 hover:border-amber-300 hover:text-amber-700 transition-colors duration-150"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-stone-200 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-stone-400 text-xs">
            Brand Archetype Analyzer · Built with Next.js 15 + Gemini · 12 Jungian Archetypes
          </p>
        </div>
      </footer>
    </div>
  );
}
