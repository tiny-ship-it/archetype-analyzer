"use client";

interface BrandInputProps {
  brand: string;
  context: string;
  onBrandChange: (value: string) => void;
  onContextChange: (value: string) => void;
  disabled?: boolean;
}

export function BrandInput({
  brand,
  context,
  onBrandChange,
  onContextChange,
  disabled,
}: BrandInputProps) {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="brand-name"
          className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
        >
          Brand Name
        </label>
        <input
          id="brand-name"
          type="text"
          value={brand}
          onChange={(e) => onBrandChange(e.target.value)}
          disabled={disabled}
          placeholder="e.g. Nike, McLaren Racing, Patagonia…"
          className="
            w-full px-4 py-3 rounded-xl border-2 border-stone-200
            bg-white text-stone-900 placeholder-stone-400
            text-base font-medium
            focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100
            disabled:opacity-60 disabled:cursor-not-allowed
            transition-colors duration-150
          "
          autoComplete="off"
        />
      </div>
      <div>
        <label
          htmlFor="brand-context"
          className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
        >
          Brand Context{" "}
          <span className="normal-case tracking-normal font-normal text-stone-400">
            (optional)
          </span>
        </label>
        <textarea
          id="brand-context"
          value={context}
          onChange={(e) => onContextChange(e.target.value)}
          disabled={disabled}
          placeholder="Tell us more — industry, products, current positioning, audience…"
          rows={3}
          className="
            w-full px-4 py-3 rounded-xl border-2 border-stone-200
            bg-white text-stone-900 placeholder-stone-400
            text-sm leading-relaxed
            focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100
            disabled:opacity-60 disabled:cursor-not-allowed
            resize-none transition-colors duration-150
          "
        />
      </div>
    </div>
  );
}
