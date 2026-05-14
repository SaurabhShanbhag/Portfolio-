"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialNavLinks } from "@/components/SocialNavLinks";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email service)
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
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

          {/* RIGHT: Contact Form */}
          <div className="lg:mt-0 mt-12">
            {!submitted ? (
              <div className="bg-surface border border-border rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-ink3 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink3 focus:outline-none focus:border-accent transition-colors font-body"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-ink3 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink3 focus:outline-none focus:border-accent transition-colors font-body"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-ink3 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink3 focus:outline-none focus:border-accent transition-colors font-body"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-ink3 mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink3 focus:outline-none focus:border-accent transition-colors font-body resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-3 rounded-xl text-sm font-medium font-body hover:bg-accentHover transition-colors duration-200 mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center flex flex-col items-center gap-3">
                {/* Success Checkmark */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>

                <h3 className="font-display text-2xl text-green-800">
                  Thank you!
                </h3>
                <p className="font-body text-sm text-green-600">
                  I&apos;ll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
