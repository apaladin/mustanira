type P = React.SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24" } as const;

export const BagIcon = (p: P) => (
  <svg {...base} width={22} height={22} {...p}>
    <path d="M6 7h12l1 13H5L6 7Z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base} width={22} height={22} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} width={22} height={22} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const SearchIcon = (p: P) => (
  <svg {...base} width={18} height={18} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base} width={18} height={18} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} width={18} height={18} {...p}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);
export const TrashIcon = (p: P) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
  </svg>
);
export const HeartIcon = (p: P) => (
  <svg {...base} width={20} height={20} {...p}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
  </svg>
);
export const TruckIcon = (p: P) => (
  <svg {...base} width={20} height={20} {...p}>
    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="17.5" r="1.5" />
    <circle cx="17" cy="17.5" r="1.5" />
  </svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base} width={20} height={20} {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const CapIcon = (p: P) => (
  <svg {...base} width={20} height={20} {...p}>
    <path d="m2 9 10-5 10 5-10 5L2 9Z" />
    <path d="M6 11v5c3 2 9 2 12 0v-5" />
  </svg>
);

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-coral ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden>
            <defs>
              <linearGradient id={`s${i}-${Math.round(fill * 100)}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="#d9d3c9" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#s${i}-${Math.round(fill * 100)})`}
              d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5z"
            />
          </svg>
        );
      })}
    </span>
  );
}
