'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full h-[68px] glass-nav transition-all duration-300 ${
        isScrolled ? 'glass-nav-scrolled' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="font-display text-[1.1rem] text-ink font-normal hover:text-accent transition-colors">
          Saurabh Shanbhag
        </Link>

        {/* Desktop Navigation — lg+ only */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-[0.7rem] tracking-[0.08em] font-medium transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-accent underline underline-offset-4 decoration-[1.5px]'
                  : 'text-ink2 hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Resume button — Link so basePath applies on static / GitHub Pages */}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1.5px] border-accent text-accent text-[0.7rem] tracking-[0.08em] px-4 py-1.5 rounded-full hover:bg-accent hover:text-white transition-all duration-200"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile / tablet menu */}
        <button
          className="flex lg:hidden flex-col gap-1.5 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={`text-ink transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45' : ''
            }`}
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-40 w-full glass-nav border-t border-border lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-border px-6 py-4 text-center text-sm font-body tracking-wide text-ink2 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}

          {/* Resume in mobile menu */}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="m-3 inline-block rounded-full border-[1.5px] border-accent px-4 py-1.5 text-center text-xs tracking-wide text-accent transition-all duration-200 hover:bg-accent hover:text-white"
          >
            Resume
          </Link>
        </div>
      )}
    </header>
  );
}
