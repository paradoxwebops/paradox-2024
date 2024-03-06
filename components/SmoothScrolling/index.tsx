"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactLenis root>{children}</ReactLenis>;
}
