import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/TimelineItem";
import { HorizontalCardScroller } from "@/components/HorizontalCardScroller";
import { publicFile } from "@/lib/siteBasePath";

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

      {/* SECTION 2: Bio intro (full width) + Image & Achievement */}
      <section className="bg-white py-20 md:py-24">
        {/* Intro: wider on desktop; inner measure keeps line length comfortable */}
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-6xl">
            <SectionHeading title="Hi, I'm Saurabh" />

            <div className="space-y-4 mt-6">
            <p className="font-body text-base text-ink2 leading-relaxed">
              I am an MBA (Marketing & Operations) student with a strong foundation
              in technology, e-commerce, and digital business solutions, backed by
              hands-on industry experience in UI/UX design, web development, quality
              analysis, and e-commerce operations. My professional journey began in
              the IT industry, where I developed practical expertise in user research,
              interface design, website development, testing, and quality control.
            </p>

            <p className="font-body text-base text-ink2 leading-relaxed">
              Currently, I am expanding my knowledge in marketing analytics, operations
              management, and business strategy through my MBA while gaining real-world
              exposure in e-commerce management and performance marketing. I have
              experience working with Amazon Seller Central, Amazon Ads, Meta Ads,
              Helium 10, and analytics tools to improve product visibility, customer
              engagement, and operational efficiency.
            </p>

            <p className="font-body text-base text-ink2 leading-relaxed">
              I enjoy combining creativity, technology, and data-driven thinking to
              build impactful digital experiences and support business growth. Beyond
              academics and work, I am passionate about travel, trekking, photography,
              graphic design, video editing, and creating planted aquariums.
            </p>
          </div>
          </div>
        </div>

        {/* Image + Achievement: balanced columns, natural image proportions */}
        <div className="mx-auto w-full max-w-7xl px-6 mt-14 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
            <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface2">
              <Image
                src={publicFile("/images/about-photo.jpg")}
                alt="Saurabh Shanbhag"
                width={480}
                height={560}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div className="bg-surface2 border border-border rounded-2xl p-6">
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
              image: publicFile("/images/travel/travel-1.jpg"),
              title: "Rann of Kutch",
              caption: "White Desert Landscapes · Gujarat",
            },
            {
              image: publicFile("/images/travel/travel-2.jpg"),
              title: "Tirupati Alipiri Mettu",
              caption: "11 km Spiritual Trek to Tirumala",
            },
            {
              image: publicFile("/images/travel/travel-3.jpg"),
              title: "Ayodhya Ram Mandir",
              caption: "Sacred Heritage & Temple Architecture",
            },
            {
              image: publicFile("/images/travel/travel-4.jpg"),
              title: "Prayagraj Kumbh Mela",
              caption: "World's Largest Spiritual Gathering",
            },
            {
              image: publicFile("/images/travel/travel-5.jpg"),
              title: "Jodhpur, Rajasthan",
              caption: "Blue City · Culture & Forts",
            },
            {
              image: publicFile("/images/travel/travel-6.jpg"),
              title: "Jagannath Puri Rath Yatra",
              caption: "Grand Chariot Festival Experience",
            },
            {
              image: publicFile("/images/travel/travel-7.jpg"),
              title: "Dwarkadhish Temple",
              caption: "Sacred Krishna Temple · Gujarat",
            },
            {
              image: publicFile("/images/travel/travel-8.jpg"),
              title: "Statue of Unity",
              caption: "World's Tallest Statue · Gujarat",
            },
            {
              image: publicFile("/images/travel/travel-9.jpg"),
              title: "Jagannath Puri Temple",
              caption: "Spiritual Landmark of Odisha",
            },
            {
              image: publicFile("/images/travel/travel-10.jpg"),
              title: "Sun Temple, Modhera",
              caption: "Ancient Solar Architecture · Gujarat",
            },
            {
              image: publicFile("/images/travel/travel-11.jpg"),
              title: "Thar Desert, Rajasthan",
              caption: "Golden Sand Dunes & Desert Landscapes",
            },
            {
              image: publicFile("/images/travel/travel-12.jpg"),
              title: "Kodachadri Trek",
              caption: "Western Ghats Adventure Trail",
            },
            {
              image: publicFile("/images/travel/travel-13.jpg"),
              title: "Rann of Kutch",
              caption: "Endless White Salt Desert Experience",
            },
          ]}
        />
      </section>
    </>
  );
}
