'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Card {
  image: string;
  title: string;
  description?: string;
  caption?: string;
  link?: string;
  linkLabel?: string;
}

interface HorizontalCardScrollerProps {
  variant: 'work' | 'poster' | 'travel';
  cards: Card[];
}

export function HorizontalCardScroller({ variant, cards }: HorizontalCardScrollerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = (window.scrollY - sectionTop) / (sectionHeight - windowHeight);
      const clamped = Math.min(Math.max(scrollProgress, 0), 1);

      const trackWidth = track.scrollWidth;
      const maxTranslate = trackWidth - window.innerWidth + 48;

      track.style.transform = `translateX(${-clamped * maxTranslate}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageHeight = 'h-[264px] md:h-[288px]';
  const cardWidth = 'w-[360px] md:w-[380px]';
  const cardHeight = 'h-[440px] md:h-[480px]';

  const sectionHeightStyle = {
    height: `calc(${cards.length * 55}vw)`,
    maxHeight: `${cards.length * 500}px`,
  } as const;

  const renderCard = (card: Card, idx: number, fullWidthMobile: boolean) => (
    <div
      key={idx}
      className={`${fullWidthMobile ? `w-full ${cardHeight}` : `${cardWidth} ${cardHeight}`} flex-shrink-0 rounded-2xl overflow-hidden bg-surface border border-border hover:scale-[1.02] transition-transform duration-300 cursor-pointer flex flex-col`}
    >
      <div className={`${imageHeight} relative flex-shrink-0 w-full overflow-hidden bg-gray-200`}>
        {variant === 'work' ? (
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="bg-surface px-5 py-4 flex flex-col justify-between flex-1 min-h-0">
        <div className="min-w-0">
          <h3 className="font-display text-lg text-ink leading-snug">
            {card.title}
          </h3>
          {(card.description || card.caption) && (
            <p className="font-body text-sm text-ink2 mt-1 leading-relaxed">
              {card.description || card.caption}
            </p>
          )}
        </div>

        {card.link && card.linkLabel && (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-medium hover:underline mt-3 inline-flex items-center gap-1 w-fit"
          >
            {card.linkLabel} <span>→</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop / tablet: pinned horizontal scroll — tall runway only here */}
      <div
        ref={sectionRef}
        style={sectionHeightStyle}
        className="relative z-0 hidden w-full overflow-x-hidden md:block"
      >
        <div className="sticky top-[68px] z-0 flex h-[calc(100vh-68px)] items-center overflow-hidden pointer-events-auto">
          <div
            ref={trackRef}
            className="absolute flex flex-row gap-6 px-6 will-change-transform"
            style={{ transition: 'transform 0.08s ease-out' }}
          >
            {cards.map((card, idx) => renderCard(card, idx, false))}
          </div>
        </div>
      </div>

      {/* Mobile: natural document height (no vw runway — avoids footer / overlap issues) */}
      <div className="relative z-0 w-full min-w-0 overflow-x-hidden py-8 md:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6">
          {cards.map((card, idx) => renderCard(card, idx, true))}
        </div>
      </div>
    </>
  );
}
