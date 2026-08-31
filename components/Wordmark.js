export function Wordmark({ className = "" }) {
  return (
    <img
      src="/wordmark.png"
      alt="HybridSpan"
      className={`block h-auto max-h-[2.1rem] w-auto object-contain md:max-h-[2.5rem] ${className}`}
    />
  );
}
