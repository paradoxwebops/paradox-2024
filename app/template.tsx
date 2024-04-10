"use client";

import { Card, Footer, Header, PageHeaderData } from "@/components";
import { useParams, usePathname } from "next/navigation";

const data: PageHeaderData = {
  team: {
    bg: "#FEA500",
    text: "OUR TEAM",
    image: "/paradox_logo_text.png",
  },
  about: {
    bg: "#D4555C",
    text: "ABOUT",
    image: "/paradox_logo_text.png",
    gif: "/about.gif",
  },
  sponsors: {
    bg: "#a7688d",
    text: "PAST SPONSORS",
    image: "/paradox_logo_text.png",
  },
  contact: {
    bg: "#03190F",
    text: "CONTACT US",
    image: "/paradox_logo_text.png",
    gif: "/contact.mp4",
  },
  faq: {
    bg: "#FF8B8D",
    text: "FAQs",
    image: "/paradox_logo_text.png",
    gif: "/faq.gif",
  },
  events: {
    bg: "#9700E9",
    text: "EVENTS",
    image: "/paradox_logo_text.png",
    gif: "/event.mp4",
  },
  fest: {
    bg: "#76CEE2",
    text: "FEST",
    image: "/paradox_logo_text.png",
  },
  profile: {
    bg: "#65376B",
    text: "PROFILE",
    image: "/paradox_logo_text.png",
  },
  accommodation: {
    bg: "#76CEE2",
    text: "ACCOMMODATION",
    image: "/paradox_logo_text.png",
  },
};

type ComponentProps = {
  page:
    | "team"
    | "about"
    | "sponsors"
    | "contact"
    | "faq"
    | "events"
    | "fest"
    | "profile"
    | "accommodation"
    | (string & any);
};

export default function Template({ children }: { children: React.ReactNode }) {
  const p = usePathname();
  const n: ComponentProps & any = p.replace("/", "");
  //@ts-ignore
  const headerData: any = { ...data[n] };

  return (
    <>
      {p === "/" ? (
        children
      ) : (
        <div className="flex flex-col p-6 pt-0 items-center justify-between min-h-screen">
          {(Object.keys(headerData).length === 0) ? 
            (children)
          :
            <>
              <Header {...headerData} />
              <div className="w-full py-6">{children}</div>
              <Footer bg={headerData.bg} />
            </>
          }
        </div>
      )}
    </>
  );
}
