"use client";

import Image from "next/image";
import { Card } from "..";
import { motion } from "framer-motion";

export type HeaderData = {
  bg: string;
  text: string;
  image: string;
};

export type PageHeaderData = {
  team: HeaderData;
  about: HeaderData;
  sponsors: HeaderData;
  contact: HeaderData;
  faq: HeaderData;
  events: HeaderData;
  fest: HeaderData;
  profile: HeaderData;
  accommodation: HeaderData;
};

const Header = ({ bg, text, image }: HeaderData) => {
  const circleMajorStyles: React.CSSProperties = {
    width: "200px",
    height: "200px",
    backgroundColor: "rgba(0, 0, 0,0.25)",
    marginLeft: "-100px",
    marginTop: "-100px",
  };

  const circleMinorStyles: React.CSSProperties = {
    width: "125px",
    height: "125px",
    backgroundColor: "rgba(0, 0, 0,0.25)",
    zIndex: 10,
  };

  return (
    <Card bgColor={bg} className="overflow-hidden">
      <div className="flex w-full justify-between items-start">
        <motion.div
          style={{ backgroundColor: "rgba(0, 0, 0,0.25" }}
          className="rounded-full border-2 ml-[-100px] mt-[-100px] w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 border-white flex justify-center items-center"
        >
          <motion.div
            style={{ backgroundColor: "rgba(0, 0, 0,0.25" }}
            className="rounded-full border-2 z-[10] h-24 w-24 md:h-28 md:w-28 lg:w-32 lg:h-32 border-white"
          />
        </motion.div>
        <Image
          src={"/paradox_logo_text.webp"}
          alt="Paradox logo"
          width={200}
          height={150}
          className="w-16 sm:w-20 md:w-32 lg:w-48"
        />
      </div>
      <div className="flex w-full justify-start items-center px-4 md:px-6">
        <h1
          className="milestone text-3xl md:text-5xl lg:text-8xl mb-0 text-white"
          style={{ letterSpacing: "2px" }}
        >
          {text}
        </h1>
        {/* <Image 
                    src={image}
                    alt="Header image"
                    height={100}
                    width={200}
                /> */}
      </div>
    </Card>
  );
};

export { Header };
