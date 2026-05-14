import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/TimelineItem";
import { HorizontalCardScroller } from "@/components/HorizontalCardScroller";

export const metadata: Metadata = {
  title: "About — Saurabh Shanbhag",
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: CTA Banner */}
      <section className="border-b border-border bg-surface2 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-ink3 mb-4">
            About Me
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink">
            Tech Meets Strategy
          </h1>
          <p className="font-display italic text-xl text-ink2 mt-3">
            A Journey of Design, Data & Discovery
          </p>

          <p className="font-body text-base text-ink2 mt-6 max-w-2xl mx-auto leading-relaxed">
            MBA student with 2+ years in UI/UX design and web development,
            bridging technology and business strategy to drive growth and create
            meaningful, lasting impact.
          </p>

          <Link
            href="/contact"
            className="bg-accent text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-accentHover transition-colors mt-8 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* SECTION 2: Bio + Achievement */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT: Photo */}
            <div className="flex items-start">
              <Image
                src="/images/about-photo.jpg"
                width={480}
                height={560}
                alt="Saurabh Shanbhag"
                className="object-cover rounded-2xl border border-border w-full"
              />
            </div>

            {/* RIGHT: Bio */}
            <div className="flex flex-col justify-start lg:pt-0 pt-10">
              <SectionHeading title="Hi, I'm Saurabh" />

              <div className="space-y-4 mt-6">
                <p className="font-body text-base text-ink2 leading-relaxed">
                  I am a first-year MBA student with areas of strength in IT
                  with 2+ years of experience. Highly performance-driven
                  professional in the field of UI/UX design and web development.
                  I started my career as a junior developer in a startup where I
                  sharpened my skills and gained active experience in UI/UX
                  design and research, web development, quality control, and
                  testing.
                </p>

                <p className="font-body text-base text-ink2 leading-relaxed">
                  Through my MBA, I am expanding my skills in marketing,
                  finance, and operations management. With my technical
                  background, I help organisations make smarter data-driven
                  decisions, improve processes, and drive sustainable growth.
                </p>

                <p className="font-body text-base text-ink2 leading-relaxed">
                  Apart from studies and work, I love to travel and trek — I
                  have covered most states of India and dream of completing a
                  whole India tour in my 20s. My hobbies include designing
                  planted aquariums, photography, graphic design, and video
                  editing.
                </p>
              </div>

              {/* Achievement card */}
              <div className="bg-surface2 border border-border rounded-2xl p-6 mt-8">
                <p className="text-xs uppercase tracking-widest text-accent mb-3">
                  Achievement Highlight
                </p>
                <h3 className="font-display text-lg text-ink leading-snug">
                  Coordinating Multi-Platform Media Delivery for a Mega Heritage
                  Program
                </h3>
                <p className="font-body text-sm text-ink2 leading-relaxed mt-3">
                  Served as part of the 20-member core media team for the
                  550-year celebrations of Partagali Mutt — an 11-day national-level
                  cultural event. Managed complete digital and on-ground media
                  operations including reels, photography, vMix live sessions, and
                  content coordination across YouTube, Instagram, Facebook, and
                  WhatsApp. The event hosted Hon&apos;ble PM Narendra Modi, Shankar
                  Mahadevan, Mahesh Kale, Maithili Thakur, and Niladri Kumar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Work Experience */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading title="Work Experience" />

          <div className="mt-12">
            <TimelineItem
              period="Feb 2026 – Present"
              title="Marketing & Operations Intern"
              org="Arvind Industries"
              location="Bengaluru, India"
              bullets={[
                "Managed Amazon Seller Central for 2,000+ SKUs with accurate listings and catalog management",
                "Conducted keyword research and listing optimization using Helium 10",
                "Supported execution of Amazon Ads and Meta Ads campaigns",
                "Analyzed sales performance, conversion rates, and customer trends",
                "Coordinated with internal teams for inventory planning and operational efficiency",
              ]}
            />

            <TimelineItem
              period="Sep 2022 – Jan 2023"
              title="Associate Quality Controller"
              org="AffinityX"
              location="Pune, Maharashtra (Remote)"
              bullets={[
                "Conducted manual QA testing for CMS-based websites ensuring responsiveness and GoDaddy standards",
                "Performed smoke testing for new builds and regression testing for updates",
                "Worked on WordPress — testing plugins, fixing bugs, validating before deployment",
                "Used JIRA for project management and Agile methodologies",
                "Managed content moderation based on client-specific guidelines",
              ]}
            />

            <TimelineItem
              period="Jan 2021 – Aug 2022"
              title="UI/UX Designer & Developer"
              org="Damodar IT Solutions Pvt. Ltd"
              location="Kumta, Karnataka"
              isLast={true}
              bullets={[
                "Conducted user research to define personas, user stories, and storyboards",
                "Created wireframes and high-fidelity prototypes in Figma and Adobe XD",
                "Led usability testing — A/B, gorilla, and remote sessions",
                "Developed responsive websites using HTML, CSS, JavaScript, jQuery, and PHP",
                "Built CMS sites on WordPress, Wix, HubSpot, Umbraco, and Webflow",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Education */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading title="Education" />

          <div className="mt-12">
            <TimelineItem
              period="Dec 2024 – Present"
              title="Master of Business Administration"
              org="PES University"
              location="Bengaluru, India"
              bullets={["Specialization: Marketing and Operations"]}
            />

            <TimelineItem
              period="2016 – 2020"
              title="Bachelor of Engineering — Electrical & Electronics"
              org="Gogte Institute of Technology"
              location="Belagavi, Karnataka"
              bullets={["CGPA: 9.17"]}
            />

            <TimelineItem
              period="2014 – 2016"
              title="Senior Secondary Education (PCM)"
              org="Saraswathi PU College"
              location="Kumta, Karnataka"
            />

            <TimelineItem
              period="2011 – 2014"
              title="Secondary Education"
              org="C.V.S.K. High School"
              location="Kumta, Karnataka"
              isLast={true}
              bullets={[
                "Grade: Distinction (93.6%)",
                "Competed at Karnataka State Level Badminton Championship",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Travel */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto mb-8 max-w-6xl px-6 md:mb-10">
          <SectionHeading
            title="Places I've Been"
            subtitle="Covered most states of India — aiming for a full India tour in my 20s"
          />
        </div>

        <HorizontalCardScroller
          variant="travel"
          cards={[
            {
              image: "/images/travel/travel-1.jpg",
              title: "Travel",
              caption: "Exploring India",
            },
            {
              image: "/images/travel/travel-2.jpg",
              title: "Travel",
              caption: "Mountains & Treks",
            },
            {
              image: "/images/travel/travel-3.jpg",
              title: "Travel",
              caption: "Coastal Karnataka",
            },
            {
              image: "/images/travel/travel-4.jpg",
              title: "Travel",
              caption: "Heritage Sites",
            },
            {
              image: "/images/travel/travel-5.jpg",
              title: "Travel",
              caption: "Nature & Wildlife",
            },
            {
              image: "/images/travel/travel-6.jpg",
              title: "Travel",
              caption: "City Walks",
            },
          ]}
        />
      </section>
    </>
  );
}
