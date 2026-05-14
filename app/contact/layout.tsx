import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact — Saurabh Shanbhag",
  description:
    "Get in touch for projects, collaborations, or opportunities in UI/UX and web development.",
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
