'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  tools: string[];
  outcomes: string[];
  imageUrl: string;
  caseStudyLink: string;
  primaryCtaLabel?: string;
}

export function FeaturedProjectCard({
  title,
  description,
  highlights,
  tools,
  outcomes,
  imageUrl,
  caseStudyLink,
  primaryCtaLabel = 'View Project',
}: FeaturedProjectCardProps) {
  return (
    <div className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300">
      {/* Premium grid layout: image left, content right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 items-stretch">
        {/* LEFT: Project Visual Showcase */}
        <div className="relative aspect-[4/5] lg:aspect-auto min-h-[350px] bg-surface overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* RIGHT: Content */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
          {/* Top content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-body font-medium text-accent uppercase tracking-[0.08em]">
                Featured Project
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-3xl lg:text-3xl text-ink leading-tight mb-4">
              {title}
            </h3>

            {/* Description */}
            <p className="font-body text-base text-ink2 leading-relaxed mb-6 max-w-md">
              {description}
            </p>

            {/* Work Highlights */}
            <div className="mb-8">
              <p className="font-display text-sm text-accent uppercase tracking-[0.1em] mb-3">
                What I Worked On
              </p>
              <ul className="space-y-2">
                {highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="font-body text-sm text-ink3 flex items-start gap-3"
                  >
                    <span className="text-accent mt-1 flex-shrink-0">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Outcomes Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Tools */}
              <div>
                <p className="font-display text-xs text-accent uppercase tracking-[0.1em] mb-2">
                  Tools Used
                </p>
                <p className="font-body text-sm text-ink2 leading-relaxed">
                  {tools.join(' • ')}
                </p>
              </div>

              {/* Key Outcomes */}
              <div>
                <p className="font-display text-xs text-accent uppercase tracking-[0.1em] mb-2">
                  Key Outcomes
                </p>
                <ul className="space-y-1">
                  {outcomes.slice(0, 2).map((outcome, idx) => (
                    <p key={idx} className="font-body text-sm text-ink2">
                      • {outcome}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            <Link
              href={caseStudyLink}
              className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-body font-medium hover:bg-accentHover transition-colors duration-200"
            >
              {primaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
