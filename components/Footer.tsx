import { SocialNavLinks } from "@/components/SocialNavLinks";

export function Footer() {
  return (
    <footer className="relative z-10 shrink-0 bg-ink text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-20">
        {/* Branding */}
        <div className="min-w-0 max-w-full md:max-w-md">
          <h3 className="font-display text-xl text-white">Saurabh Shanbhag</h3>
          <p className="mt-1 text-sm text-white/50">
            MBA Student · UI/UX Designer · Web Developer
          </p>
          <p className="mt-5 text-sm leading-relaxed break-words text-white/45">
            Bengaluru-based — building thoughtful interfaces and web experiences
            at the intersection of design, technology, and business.
          </p>
        </div>

        {/* Connect */}
        <div className="min-w-0 w-full justify-self-stretch md:max-w-sm md:justify-self-end">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Connect
          </p>
          <SocialNavLinks variant="footer" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/10 px-6 pb-10 pt-8 text-center text-xs text-white/40">
        ©{" "}
        <span suppressHydrationWarning>
          {new Date().getFullYear()}
        </span>{" "}
        Saurabh Shanbhag. All rights reserved.
      </div>
    </footer>
  );
}
