"use client";

import Image from "next/image";
import { Card } from "..";
import { motion } from "framer-motion";
import { rgba } from "@/lib/utils";
import Link from "next/link";
import { EventSponsor } from "../Pages/Event";
import { Zilla_Slab } from "next/font/google";

const zilla_slab = Zilla_Slab({weight: ['300', '400', '500', '600'], subsets: ['latin'], display: 'auto', style: ['italic', 'normal']})

export type HeaderData = {
  bg: string;
  text: string;
  image?: string;
  gif?: string;
  isEvent?: boolean;
  eventImage?: string;
  eventCategory?: string;
  eventId?: number | string;
  sponsors?: EventSponsor[];
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
  schedule: HeaderData;
};

const HeaderHeading1 = ({
  text,
  style,
  className,
  ...props
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <h1
      className={`milestone text-3xl md:text-5xl lg:text-8xl mb-0 text-white w-full ${className}`}
      style={{ letterSpacing: "2px", ...style }}
      {...props}
    >
      {text}
    </h1>
  );
};

const Header = ({
  bg,
  text,
  image,
  gif,
  eventCategory,
  eventImage,
  isEvent,
  eventId,
  sponsors,
}: HeaderData) => {
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

  const event_sponsors:EventSponsor[] = (!!sponsors?.length ? [...sponsors.filter((val) => val.title === 'event_sponsor')] : [])
  const event_partners:EventSponsor[] = (!!sponsors?.length ? [...sponsors.filter((val) => val.title === 'event_partner')] : [])

  return (
    <Card bgColor={bg} className="overflow-hidden relative">
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
          className="w-16 sm:w-20 md:w-32 lg:w-48 z-[2] relative"
        />
      </div>
      {!!isEvent ? (
        <>
          <div className="flex flex-col w-full justify-center items-center px-4 md:px-6 xl:mt-20">
            
            {event_sponsors.length !== 0 ? 
              <div className="text-white">
                <div className="flex gap-4 flex-wrap items-center">
                  {event_sponsors.map((val) => {
                    return (
                      <>
                      <div className="flex flex-col gap-2 items-center justify-center relative" key={val.id}>
                        <div className="max-md:hidden">
                          {val.name}
                        </div>
                        <Image 
                          src={val.logo}
                          alt={val.name}
                          height={200}
                          width={200}
                        />
                        <a href={val.url} className="after:absolute after:inset-0" />
                      </div>
                      </>
                    )
                  })}  
                </div>
                <div className={`${zilla_slab.className} text-center italic my-3`}>
                  presents
                </div>
              </div>
            : 
              <></>
            }

            <Image
              className="w-full h-auto md:max-w-[30%] rounded-2xl shadow-2xl"
              alt={text}
              src={eventImage ?? ''}
              height={200}
              width={200}
            />

            <HeaderHeading1 text={text} className="text-center !my-6" />
            {event_partners.length !== 0 ? 
              <div className="text-white mb-12">
                <div className={`${zilla_slab.className} text-center italic my-3`}>
                  powered by
                </div>
                <div className="flex gap-4 flex-wrap items-center">
                  {event_partners.map((val) => {
                    return (
                      <>
                      <div className="flex flex-col gap-2 items-center justify-center relative" key={val.id}>
                        <div className="max-md:hidden">
                          {val.name}
                        </div>
                        <Image 
                          src={val.logo}
                          alt={val.name}
                          height={200}
                          width={200}
                        />
                        <a href={val.url} className="after:absolute after:inset-0" />
                      </div>
                      </>
                    )
                  })}  
                </div>
              </div>
            : 
              <></>
            }
            <div
              className="px-12 py-2 rounded-full font-bold mb-6"
              style={{ color: bg, backgroundColor: rgba("#ffffff", 0.75) }}
            >
              {eventCategory}
            </div>

            <motion.div
              className="py-2 fixed bottom-6 z-[10]"
              initial={{ marginBottom: "-50px", opacity: 0 }}
              animate={{ marginBottom: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <a
                href={`/events/register/${eventId}`}
                className="rounded-2xl hover:text-[#c8bfcd] border-3 border-[rgba(255,255,255,.3)] px-8 py-2 bg-[#c8bfcd]  hover:bg-[#230137] text-[#230137] transition"
              >
                Register
              </a>
            </motion.div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full justify-start items-center px-4 md:px-6 xl:mt-20">
            <HeaderHeading1 text={text} />
            <div
              style={{ transform: "rotateY(180deg)" }}
              className=" absolute right-0 scale-150 bottom-[140px] xl:bottom-[-140px] w-1/2 rounded-l-xl"
            >
              {gif &&
                (text == "ABOUT" || text == "FAQs" ? (
                  <img className="" src={gif} alt="" />
                ) : (
                  <video loop autoPlay className="rounded-l-xl min-h-full">
                    <source src={gif} />
                  </video>
                ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export { Header };
