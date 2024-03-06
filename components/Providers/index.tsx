"use client";

import SmoothScrolling from "../SmoothScrolling";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScrolling>{children}</SmoothScrolling>
    </>
  );
}
