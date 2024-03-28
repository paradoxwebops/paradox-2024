import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans"
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { NavBar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Paradox '24",
  description: "Paradox '24",
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
        </Providers>
      </body>
    </html>
  );
}
