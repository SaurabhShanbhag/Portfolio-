import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { HorizontalCardScroller } from "@/components/HorizontalCardScroller";
import { publicFile } from "@/lib/siteBasePath";

export const metadata: Metadata = {
  title: "Saurabh Shanbhag — Portfolio",
  description:
    "MBA Student, UI/UX Designer & Web Developer based in Bengaluru",
};

export default function Home() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="flex min-h-[calc(100vh-68px)] items-center bg-white py-16 md:py-20 lg:py-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: Hero text */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.15em] text-ink3 font-body mb-4 animate-fade-up">
                Welcome
              </p>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] animate-fade-up animate-delay-100">
                <span>Hi, I&apos;m</span>
                <br />
                <span className="text-accent">Saurabh</span>
                <br />
                <span>Shanbhag</span>
              </h1>

              <p className="font-display italic text-xl text-ink2 mt-5 animate-fade-up animate-delay-200">
                MBA Student · E-commerce & Growth Analyst · UI/UX Designer · Web Developer · Quality Control Analyst
              </p>

              <p className="font-body text-base text-ink3 mt-4 max-w-md leading-relaxed animate-fade-up animate-delay-300">
                Helping brands grow through e-commerce strategy, performance marketing, analytics, and user-focused digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 animate-fade-up animate-delay-400">
                <Link
                  href="/#work"
                  className="bg-accent text-white px-8 py-3 rounded-full text-sm font-body font-medium hover:bg-accentHover transition-colors duration-200"
                >
                  View My Work
                </Link>
                <Link
                  href="/about"
                  className="border-[1.5px] border-ink text-ink px-8 py-3 rounded-full text-sm font-body font-medium hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  Know More
                </Link>
              </div>
            </div>

            {/* RIGHT: Profile image */}
            <div className="flex items-center justify-center mt-12 lg:mt-0">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-gold/30 scale-[1.25] pointer-events-none" />

                {/* Decorative dots */}
                <div
                  className="absolute -z-10 inset-[-20%] opacity-30 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#C4541A 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Image */}
                <Image
                  src={publicFile("/images/profile.jpg")}
                  fill
                  className="object-cover rounded-full"
                  alt="Saurabh Shanbhag"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: About Snapshot */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
            {/* LEFT: Bio */}
            <div className="md:pr-12">
              <SectionHeading title="About Me" />

              <p className="font-body text-base text-ink2 leading-relaxed mt-6 max-w-prose">
                A tech-savvy MBA student with 2+ years in UI/UX design and web
                development. I bridge technology and business strategy to drive
                growth and create meaningful user experiences.
              </p>

              <Link
                href="/about"
                className="text-accent font-medium text-sm hover:underline mt-6 inline-flex items-center gap-1 transition-all"
              >
                Know More →
              </Link>
            </div>

            {/* RIGHT: Stats */}
            <div className="md:mt-0 mt-10">
              <div className="flex flex-col gap-4">
                {/* Stat Card 1 */}
                <div className="bg-white border border-border rounded-2xl px-6 py-5 hover:border-accent transition-colors">
                  <p className="font-display text-4xl text-accent">2+</p>
                  <p className="text-sm text-ink3 font-body mt-1">
                    Years of Experience
                  </p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-white border border-border rounded-2xl px-6 py-5 hover:border-accent transition-colors">
                  <p className="font-display text-4xl text-accent">6</p>
                  <p className="text-sm text-ink3 font-body mt-1">
                    Websites Built
                  </p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-white border border-border rounded-2xl px-6 py-5 hover:border-accent transition-colors">
                  <p className="font-display text-4xl text-accent">MBA</p>
                  <p className="text-sm text-ink3 font-body mt-1">
                    @ PES University Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Featured Certifications */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Featured Certifications"
            subtitle="Professional certifications across design, development, marketing & business"
          />

          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:mt-14 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8">
            {/* Certificate 1 */}
            <div className="group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                <Image
                  src={publicFile("/images/certifications/certificate-1.jpg")}
                  alt="Google UX Design Certificate"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg text-ink leading-snug">
                    Google UX Design
                  </h3>
                  <p className="text-sm text-ink3 mt-2 font-body">
                    Google / Coursera
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-medium w-fit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified Certification
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                <Image
                  src={publicFile("/images/certifications/certificate-2.jpg")}
                  alt="Foundations of Digital Marketing & E-commerce Certificate"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg text-ink leading-snug">
                    Foundations of Digital Marketing & E-commerce
                  </h3>
                  <p className="text-sm text-ink3 mt-2 font-body">
                    Google / Coursera
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-medium w-fit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified Certification
                </div>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                <Image
                  src={publicFile("/images/certifications/certificate-3.jpg")}
                  alt="Digital Transformation Certificate"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg text-ink leading-snug">
                    Digital Transformation: AI, Data Analytics, Strategy & Cloud
                  </h3>
                  <p className="text-sm text-ink3 mt-2 font-body">
                    Professional Certification
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-medium w-fit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified Certification
                </div>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                <Image
                  src={publicFile("/images/certifications/certificate-4.jpg")}
                  alt="Full-Stack Web Development Bootcamp Certificate"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg text-ink leading-snug">
                    Full-Stack Web Development Bootcamp
                  </h3>
                  <p className="text-sm text-ink3 mt-2 font-body">
                    Udemy
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-medium w-fit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified Certification
                </div>
              </div>
            </div>

            {/* Certificate 5 */}
            <div className="group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                <Image
                  src={publicFile("/images/certifications/certificate-5.jpg")}
                  alt="Java Programming Certificate"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg text-ink leading-snug">
                    Java Programming
                  </h3>
                  <p className="text-sm text-ink3 mt-2 font-body">
                    Professional Certification
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-medium w-fit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified Certification
                </div>
              </div>
            </div>

            {/* Certificate 6 */}
            <div className="group flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                <Image
                  src={publicFile("/images/certifications/certificate-6.jpg")}
                  alt="Centre for Sustainability & Business Certificate"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg text-ink leading-snug">
                    Centre for Sustainability & Business — FOMC
                  </h3>
                  <p className="text-sm text-ink3 mt-2 font-body">
                    Centre of Excellence
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-medium w-fit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified Certification
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Work */}
      <section id="work" className="bg-white py-16 md:py-20">
        <div className="mx-auto mb-8 max-w-6xl px-6 md:mb-10">
          <SectionHeading
            title="My Work"
            subtitle="Websites I've designed & built"
          />
        </div>

        <HorizontalCardScroller
          variant="work"
          cards={[
            {
              image: publicFile("/images/work/ayush.gif"),
              title: "Ayush Wellness Clinic",
              description: "Healthcare website with appointment booking UI",
              link: "http://ayushwellnessclinic.com",
              linkLabel: "Visit Site",
            },
            {
              image: publicFile("/images/work/hueb.gif"),
              title: "Hueb",
              description: "Luxury jewelry brand website",
              link: "http://hueb.com",
              linkLabel: "Visit Site",
            },
            {
              image: publicFile("/images/work/hans.gif"),
              title: "Hans Naturals",
              description: "Natural products e-commerce website",
              link: "http://hansnaturals.com",
              linkLabel: "Visit Site",
            },
            {
              image: publicFile("/images/work/damodar.gif"),
              title: "Damodar IT Solutions",
              description: "Corporate website for IT solutions firm",
              link: "https://damodaritsolutions.com",
              linkLabel: "Visit Site",
            },
            {
              image: publicFile("/images/work/soapaloop.gif"),
              title: "Soapaloop",
              description: "Artisan soap brand website",
              link: "https://soapaloop.com",
              linkLabel: "Visit Site",
            },
            {
              image: publicFile("/images/work/lmchm.gif"),
              title: "LMCHM",
              description: "Institutional website",
              link: "http://lmchm.in",
              linkLabel: "Visit Site",
            },
          ]}
        />
      </section>

      {/* SECTION 5: Posters & Designs */}
      <section id="posters" className="bg-surface py-16 md:py-20">
        <div className="mx-auto mb-8 max-w-6xl px-6 md:mb-10">
          <SectionHeading
            title="Posters & Designs"
            subtitle="Graphic design and visual communication work"
          />
        </div>

        <HorizontalCardScroller
          variant="poster"
          cards={[
            {
              image: publicFile("/images/posters/poster-1.jpg"),
              title: "Poster Design 1",
              caption: "Graphic design work",
            },
            {
              image: publicFile("/images/posters/poster-2.jpg"),
              title: "Poster Design 2",
              caption: "Visual communication",
            },
            {
              image: publicFile("/images/posters/poster-3.jpg"),
              title: "Poster Design 3",
              caption: "Brand identity",
            },
            {
              image: publicFile("/images/posters/poster-4.jpg"),
              title: "Poster Design 4",
              caption: "Event poster",
            },
            {
              image: publicFile("/images/posters/poster-5.jpg"),
              title: "Poster Design 5",
              caption: "Marketing collateral",
            },
            {
              image: publicFile("/images/posters/poster-6.jpg"),
              title: "Poster Design 6",
              caption: "Digital design",
            },
            {
              image: publicFile("/images/posters/poster-7.jpg"),
              title: "Poster Design 7",
              caption: "Social media creative",
            },
            {
              image: publicFile("/images/posters/poster-8.jpg"),
              title: "Poster Design 8",
              caption: "Promotional design",
            },
          ]}
        />
      </section>
    </>
  );
}
