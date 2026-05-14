import type { ReactNode } from "react";

const ICON_SIZE = 18;
const STROKE = 1.8;

const socialEntries = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabhshanbhag24/",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/saurabh_shanbhag",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/16RxN6J8Mr/",
    icon: (
      <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z" />
    ),
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:saurabhshanbhag24@gmail.com",
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
  },
] as const;

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-colors duration-200"
      aria-hidden
    >
      {children}
    </svg>
  );
}

type Variant = "footer" | "contact";

export function SocialNavLinks({ variant }: { variant: Variant }) {
  if (variant === "footer") {
    return (
      <div className="space-y-1">
        {socialEntries.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target={item.key === "email" ? undefined : "_blank"}
            rel={
              item.key === "email"
                ? undefined
                : "noopener noreferrer"
            }
            className="group flex min-w-0 items-center gap-2.5 rounded-lg py-2 text-sm text-white/70 transition-colors duration-200 hover:text-white"
          >
            <SocialIcon>{item.icon}</SocialIcon>
            <span className="min-w-0 break-words transition-colors duration-200">{item.label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {socialEntries.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target={item.key === "email" ? undefined : "_blank"}
          rel={
            item.key === "email"
              ? undefined
              : "noopener noreferrer"
          }
          className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink2 transition-all duration-200 hover:border-accent hover:text-accent"
        >
          <SocialIcon>{item.icon}</SocialIcon>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
