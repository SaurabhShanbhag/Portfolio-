interface CaseStudyHeroProps {
  title: string;
  description: string;
  meta: {
    label: string;
    value: string;
  }[];
}

import Link from 'next/link';

export function CaseStudyHero({ title, description, meta }: CaseStudyHeroProps) {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-body">
          <Link href="/" className="text-ink2 hover:text-accent transition-colors">
            Home
          </Link>
          <span className="text-ink3">/</span>
          <Link href="/#work" className="text-ink2 hover:text-accent transition-colors">
            Projects
          </Link>
          <span className="text-ink3">/</span>
          <span className="text-accent font-medium">Case Study</span>
        </nav>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-6">
          {title}
        </h1>

        {/* Description */}
        <p className="font-body text-base md:text-lg text-ink2 leading-relaxed max-w-3xl mb-8">
          {description}
        </p>

        {/* Meta Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
          {meta.map((item, idx) => (
            <div key={idx}>
              <p className="font-display text-xs text-accent uppercase tracking-[0.1em] mb-2">
                {item.label}
              </p>
              <p className="font-body text-sm md:text-base text-ink">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
