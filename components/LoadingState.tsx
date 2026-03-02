"use client";

interface LoadingStateProps {
  brand: string;
  archetype: string;
}

export function LoadingState({ brand, archetype }: LoadingStateProps) {
  return (
    <div className="w-full rounded-2xl border-2 border-stone-100 bg-stone-50 p-10 flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-stone-200 border-t-amber-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-amber-100 animate-pulse" />
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-stone-800 font-semibold text-lg">
          Transforming <span className="text-amber-600">{brand}</span>
        </p>
        <p className="text-stone-500 text-sm">
          Channeling the <span className="font-medium text-stone-700">{archetype}</span> archetype…
        </p>
      </div>
      <div className="flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-amber-400"
            style={{
              animation: `bounce 1.2s ease-in-out ${i * 0.12}s infinite`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
