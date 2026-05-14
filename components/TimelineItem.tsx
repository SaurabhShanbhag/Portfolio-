interface TimelineItemProps {
  period: string;
  title: string;
  org: string;
  location: string;
  bullets?: string[];
  isLast?: boolean;
}

export function TimelineItem({
  period,
  title,
  org,
  location,
  bullets,
  isLast,
}: TimelineItemProps) {
  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:flex gap-8 pb-12">
        {/* Timeline spine */}
        <div className="w-32 flex-shrink-0 relative">
          <div className="text-xs text-ink3 uppercase tracking-wider text-right pr-6">
            {period}
          </div>

          {/* Decorative dot */}
          <div className="absolute top-0 -right-[14px] w-6 h-6 bg-white border-2 border-accent rounded-full" />

          {/* Vertical line */}
          {!isLast && (
            <div className="absolute top-8 -right-[10px] w-[2px] h-24 bg-border" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className="font-display text-lg text-ink">{title}</h3>
          <p className="text-sm text-ink2 mt-1">
            {org} · {location}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className="text-sm text-ink2 leading-relaxed mt-3 space-y-1 list-disc list-inside">
              {bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden border border-border rounded-xl p-5 mb-4">
        <p className="text-xs text-accent uppercase tracking-wider mb-2">
          {period}
        </p>
        <h3 className="font-display text-base text-ink">{title}</h3>
        <p className="text-sm text-ink2 mt-1">
          {org} · {location}
        </p>
        {bullets && bullets.length > 0 && (
          <ul className="text-sm text-ink2 leading-relaxed mt-3 space-y-1 list-disc list-inside">
            {bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
