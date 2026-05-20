"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialNavLinks } from "@/components/SocialNavLinks";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission (replace with actual API endpoint if needed)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you could add actual form submission logic
      // For now, just show success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Contact Info */}
          <div>
            <SectionHeading title="Let's Connect" />

            <p className="font-body text-base text-ink2 leading-relaxed mt-6 max-w-sm">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent mt-0.5"
                  aria-hidden
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink3 font-medium mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:saurabhshanbhag24@gmail.com"
                    className="text-sm text-ink2 hover:text-accent transition-colors"
                  >
                    saurabhshanbhag24@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent mt-0.5"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink3 font-medium mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+918197899548"
                    className="text-sm text-ink2 hover:text-accent transition-colors"
                  >
                    +91 8197899548
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent mt-0.5"
                  aria-hidden
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink3 font-medium mb-1">
                    Location
                  </p>
                  <p className="text-sm text-ink2">Bengaluru, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-ink3 font-medium mb-4">
                Find me on
              </p>
              <SocialNavLinks variant="contact" />
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-ink3 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-ink placeholder:text-ink3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-ink3 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-ink placeholder:text-ink3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs uppercase tracking-widest text-ink3 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-ink placeholder:text-ink3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-ink3 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-ink placeholder:text-ink3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell me more about your project..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white px-6 py-3 rounded-full text-sm font-body font-medium hover:bg-accentHover disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                  <p className="text-sm text-green-700 font-medium">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-center">
                  <p className="text-sm text-red-700 font-medium">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
