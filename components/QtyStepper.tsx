"use client";

export default function QtyStepper({
  value,
  onChange,
  min = 0,
  small = false,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  small?: boolean;
}) {
  const size = small ? "h-8 w-8 text-sm" : "h-11 w-11";
  return (
    <div className="inline-flex items-center rounded-full border border-ink/15 bg-white">
      <button
        type="button"
        className={`${size} rounded-full font-semibold hover:bg-ink/5`}
        onClick={() => onChange(Math.max(min, value - 1))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className={`${small ? "w-6 text-sm" : "w-8"} text-center font-semibold tabular-nums`} aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={`${size} rounded-full font-semibold hover:bg-ink/5`}
        onClick={() => onChange(Math.min(999, value + 1))}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
