import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans"
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { NavBar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "Paradox '24 | IIT Madras | BS Degree",
  description:
    "Paradox is the annual techno-cultural fest of the IIT Madras BS Degree.",
  keywords:
    "Paradox 2024, Paradox 24, IIT Madras, BS Degree, IITMBS, IITM BS, Paradox",
};

const bricolage = Bricolage_Grotesque({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
