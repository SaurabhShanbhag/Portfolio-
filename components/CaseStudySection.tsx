import { ReactNode } from 'react';

interface CaseStudySectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: 'light' | 'dark';
}

export function CaseStudySection({
  title,
  subtitle,
  children,
  variant = 'light',
}: CaseStudySectionProps) {
  const bgClass = variant === 'dark' ? 'bg-surface' : 'bg-white';

  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.15em] text-accent font-body font-medium mb-2">
            {subtitle || 'Section'}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            {title}
          </h2>
        </div>

        {/* Content */}
        <div className="prose prose-sm md:prose-base max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
