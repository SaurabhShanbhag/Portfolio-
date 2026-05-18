"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialNavLinks } from "@/components/SocialNavLinks";

interface FloatingBlobPosition {
  x: number;
  y: number;
}

export default function ContactPage() {
  const [mousePos, setMousePos] = useState<FloatingBlobPosition>({ x: 0, y: 0 });
  const [blobOffsets, setBlobOffsets] = useState<FloatingBlobPosition[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Only enable cursor tracking on desktop (md breakpoint and up)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePos({ x, y });
    };

    const handleAnimationFrame = () => {
      setMousePos((prev) => {
        const newOffsets = [
          {
            x: prev.x * 20,
            y: prev.y * 20,
          },
          {
            x: prev.x * 15,
            y: prev.y * 15,
          },
          {
            x: prev.x * 10,
            y: prev.y * 10,
          },
        ];
        setBlobOffsets(newOffsets);
        animationFrameRef.current = requestAnimationFrame(
          handleAnimationFrame
        );
        return prev;
      });
    };

    const handleResize = () => {
      const now = typeof window !== "undefined" && window.innerWidth < 768;
      if (now && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animationFrameRef.current = requestAnimationFrame(handleAnimationFrame);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* LEFT: Contact Info */}
          <div>
            <SectionHeading title="Let's Connect" />

            <p className="font-body text-base text-ink2 leading-relaxed mt-6 max-w-sm">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-5">
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent"
                  aria-hidden
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a
                  href="mailto:saurabhshanbhag24@gmail.com"
                  className="group inline-flex items-center gap-1 text-sm text-ink2 transition-colors hover:text-accent"
                >
                  saurabhshanbhag24@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm text-ink2">+91 8197899548</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent"
                  aria-hidden
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm text-ink2">Bengaluru, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-ink3 mb-4">
                Find me on
              </p>
              <SocialNavLinks variant="contact" />
            </div>
          </div>

          {/* RIGHT: Interactive Fluid Image Composition */}
          <div className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8" ref={containerRef}>
            <div className="relative w-full aspect-square max-w-full sm:max-w-md md:max-w-lg overflow-hidden rounded-3xl">
              {/* Background gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />

              {/* Animated background blobs */}
              <div
                className="absolute pointer-events-none inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 500px 320px at 20% 30%, rgba(168, 85, 247, 0.06) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute pointer-events-none inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 400px 400px at 80% 70%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
                }}
              />

              {/* Floating blob elements with cursor tracking */}
              {/* Blob 1 - Large soft blob (top-left) */}
              <div
                className="absolute w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 rounded-full opacity-20 pointer-events-none blur-2xl sm:blur-3xl transition-transform duration-300 ease-out"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  top: "-50px",
                  left: "-50px",
                  transform: `translate(${blobOffsets[0]?.x || 0}px, ${blobOffsets[0]?.y || 0}px)`,
                  animation: "float 8s ease-in-out infinite",
                }}
              />

              {/* Blob 2 - Medium soft blob (bottom-right) */}
              <div
                className="absolute w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full opacity-15 pointer-events-none blur-xl sm:blur-3xl transition-transform duration-300 ease-out"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  bottom: "-35px",
                  right: "-35px",
                  transform: `translate(${blobOffsets[1]?.x || 0}px, ${blobOffsets[1]?.y || 0}px)`,
                  animation: "float 10s ease-in-out infinite 1s",
                }}
              />

              {/* Blob 3 - Small soft blob (top-right) */}
              <div
                className="absolute w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 rounded-full opacity-15 pointer-events-none blur-lg sm:blur-2xl transition-transform duration-300 ease-out"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #f97316)",
                  top: "-25px",
                  right: "-25px",
                  transform: `translate(${blobOffsets[2]?.x || 0}px, ${blobOffsets[2]?.y || 0}px)`,
                  animation: "float 12s ease-in-out infinite 2s",
                }}
              />

              {/* Floating circular accent elements */}
              <div
                className="absolute w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full border border-purple-200/40 pointer-events-none"
                style={{
                  top: "12%",
                  right: "8%",
                  animation: "float-slow 15s ease-in-out infinite",
                  backdropFilter: "blur(6px)",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div
                className="absolute w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full border border-blue-200/30 pointer-events-none"
                style={{
                  bottom: "8%",
                  left: "6%",
                  animation: "float-slow 18s ease-in-out infinite",
                  backdropFilter: "blur(6px)",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              />

              {/* Main image container with glassmorphism effect */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  animation: "gentle-float 4s ease-in-out infinite",
                }}
              >
                {/* Glassmorphism card wrapper with balanced padding */}
                <div
                  className="relative w-[calc(100%-2rem)] sm:w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] lg:w-[calc(100%-2rem)]"
                  style={{
                    aspectRatio: "1 / 1",
                    backdropFilter: "blur(8px)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "24px",
                    padding: "10px",
                    boxShadow:
                      "0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 0 16px rgba(255,255,255,0.25)",
                  }}
                >
                  {/* Main graduation image */}
                  <div
                    className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/50"
                    style={{
                      boxShadow: "0 16px 48px -16px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Image
                      src="/images/graduation.png"
                      alt="Graduation celebration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Subtle radial light effect from center */}
              <div
                className="absolute pointer-events-none inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 600px 450px at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)",
                }}
              />

              {/* CSS Animations */}
              <style jsx>{`
                @keyframes float {
                  0%,
                  100% {
                    transform: translate(
                      ${blobOffsets[0]?.x || 0}px,
                      ${blobOffsets[0]?.y || 0}px
                    );
                  }
                  25% {
                    transform: translate(
                      calc(${blobOffsets[0]?.x || 0}px + 20px),
                      calc(${blobOffsets[0]?.y || 0}px - 15px)
                    );
                  }
                  50% {
                    transform: translate(
                      calc(${blobOffsets[0]?.x || 0}px + 15px),
                      calc(${blobOffsets[0]?.y || 0}px + 20px)
                    );
                  }
                  75% {
                    transform: translate(
                      calc(${blobOffsets[0]?.x || 0}px - 15px),
                      calc(${blobOffsets[0]?.y || 0}px + 8px)
                    );
                  }
                }

                @keyframes float-slow {
                  0%,
                  100% {
                    transform: translateY(0px) scale(1);
                    opacity: 0.8;
                  }
                  50% {
                    transform: translateY(-15px) scale(1.03);
                    opacity: 0.6;
                  }
                }

                @keyframes gentle-float {
                  0%,
                  100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-8px);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
