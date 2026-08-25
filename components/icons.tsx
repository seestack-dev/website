/** Small inline glyphs. Sized in `em` so they track the surrounding text. */

type IconProps = { className?: string };

export function PlayIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className ?? "h-[1em] w-[1em]"}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 3.3a.7.7 0 0 1 1.06-.6l6 4.1a.7.7 0 0 1 0 1.16l-6 4.34a.7.7 0 0 1-1.06-.6V3.3Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className ?? "h-[1em] w-[1em]"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className ?? "h-[1em] w-[1em]"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 3.5H3.5v9h9v-3M9.5 3.5h3v3M12.5 3.5 7 9" />
    </svg>
  );
}
