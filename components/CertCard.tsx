interface CertCardProps {
  title: string;
  issuer: string;
}

export function CertCard({ title, issuer }: CertCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors duration-200">
      {/* Decorative icon container */}
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
        {/* Graduation cap SVG */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C4541A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6m0 0v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5m0 0V9.412a2 2 0 0 1 .504-1.386l1.432-1.772A2 2 0 0 1 5.734 5h12.532a2 2 0 0 1 1.798.854l1.432 1.772a2 2 0 0 1 .504 1.386V10m-18 0h18M9 19h6" />
        </svg>
      </div>

      {/* Content */}
      <h3 className="font-display text-base text-ink mt-4 leading-snug">
        {title}
      </h3>
      <p className="text-xs text-ink3 mt-1 font-body">
        {issuer}
      </p>
    </div>
  );
}
