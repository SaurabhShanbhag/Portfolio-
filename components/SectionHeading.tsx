interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="font-display text-3xl md:text-4xl font-normal text-ink">
        {title}
      </h2>
      <div className={`w-12 h-[2px] bg-accent mt-3 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`font-body text-ink3 text-base mt-3 max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
