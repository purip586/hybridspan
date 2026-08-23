export function Wordmark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 790 132"
      role="img"
      aria-label="HybridSpan"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* H */}
        <path d="M18 22v78M54 22v78M18 61h36" />
        {/* y — geometric bowl, script tail */}
        <path d="M80 50v14c0 16 10 24 22 24s22-8 22-24V50" />
        <path d="M124 66c1 24 0 40-20 48" />
        {/* b */}
        <path d="M166 22v78" />
        <path d="M166 54c4-18 16-24 30-24 17 0 30 13 30 28s-13 28-30 28c-14 0-26-6-30-24" />
        {/* r — cursive swoosh */}
        <path d="M250 50v50" />
        <path d="M250 55c8-22 36-24 42-4 2 8-8 14-18 11" />
        {/* i */}
        <path d="M314 50v50" />
        {/* d */}
        <path d="M386 22v78" />
        <path d="M386 54c-4-18-16-24-30-24-17 0-30 13-30 28s13 28 30 28c14 0 26-6 30-24" />
        {/* Hybrid holds hands with Span */}
        <path d="M394 50h18" />
        {/* S — script with a sail-like top */}
        <path d="M428 52c-4-22 34-32 44-8 4 10-8 16-20 18-18 4-28 18-16 32 10 12 38 10 44-6" />
        {/* p */}
        <path d="M508 50v66" />
        <path d="M508 54c4-18 16-24 30-24 17 0 30 13 30 28s-13 28-30 28c-14 0-26-6-30-24" />
        {/* a — geometric, stem on the right */}
        <path d="M662 50v50" />
        <path d="M662 54c-4-18-16-24-30-24-17 0-30 13-30 28s13 28 30 28c14 0 26-6 30-20" />
        {/* n */}
        <path d="M694 50v50" />
        <path d="M694 58c4-20 18-28 34-28 16 0 26 12 26 28v42" />
      </g>
      <circle cx="314" cy="33" r="7.4" fill="currentColor" />
    </svg>
  );
}
