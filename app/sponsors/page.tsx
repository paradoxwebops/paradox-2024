import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { East_Sea_Dokdo } from "next/font/google";

const east_sea = East_Sea_Dokdo({ weight: ["400"], subsets: ["latin"] });

export default function SponsorsPage() {
  // const sponsorDetails = {
  //   title: [
  //     {
  //       imageSrc: "/sponsors/ta.avif",
  //       imageAlt: "Tiger Analytics Logo",
  //       link: "https://www.tigeranalytics.com/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "/sponsors/aditya.jpg",
  //       imageAlt: "Aditya Birla Logo",
  //       link: "https://www.adityabirla.com/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "/sponsors/techm.png",
  //       imageAlt: "Tech Mahindra Logo",
  //       link: "https://www.techmahindra.com/",
  //       color: null,
  //     },
  //   ],
  //   fest: [
  //     {
  //       imageSrc: "/sponsors/helle.png",
  //       imageAlt: "Hell Energy Logo",
  //       link: "https://www.hellenergy.com/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "/sponsors/emt.svg",
  //       imageAlt: "Ease My Trip Logo",
  //       link: "https://www.easemytrip.com/",
  //       color: null,
  //     },
  //   ],
  //   event: [
  //     {
  //       imageSrc: "/sponsors/market.png",
  //       imageAlt: "Market XYZ Logo",
  //       link: "https://www.market.xyz/",
  //       color: "bg-black",
  //     },
  //     {
  //       imageSrc: "/sponsors/redbull.jpg",
  //       imageAlt: "Red Bull Logo",
  //       link: "https://www.redbull.com/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "/sponsors/quidich.png",
  //       imageAlt: "Quidich Logo",
  //       link: "https://www.quidich.com/",
  //       color: "bg-black",
  //     },
  //     {
  //       imageSrc: "/sponsors/ecoline.jpg",
  //       imageAlt: "Ecoline Logo",
  //       link: "https://ecolineclothing.com/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "/sponsors/quine.png",
  //       imageAlt: "Quine Logo",
  //       link: "https://quine.sh/",
  //       color: "bg-black",
  //     },
  //     {
  //       imageSrc: "/sponsors/fotographik.jpg",
  //       imageAlt: "Fotografik Logo",
  //       link: "https://photo-wonder.com/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/verymuchindian.png",
  //       imageAlt: "Very Much Indian Logo",
  //       link: "https://www.verymuchindian.com/",
  //       color: "bg-black",
  //     },
  //     {
  //       imageSrc: "/sponsors/stockgro.webp",
  //       imageAlt: "StockGro Logo",
  //       link: "https://www.stockgro.club/",
  //       color: null,
  //     },

  //     {
  //       imageSrc: "sponsors/dsw.png",
  //       imageAlt: "Data Science Wizards Logo",
  //       link: "https://www.datasciencewizards.ai/",
  //       color: "bg-black",
  //     },
  //   ],
  //   platform_partners: [
  //     {
  //       imageSrc: "sponsors/polygon.png",
  //       imageAlt: "Polygon Logo",
  //       link: "https://polygon.technology/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/devfolio.png",
  //       imageAlt: "Devfolio Logo",
  //       link: "https://devfolio.co/",
  //       color: "bg-black",
  //     },
  //     {
  //       imageSrc: "sponsors/filecoin.png",
  //       imageAlt: "FileCoin Logo",
  //       link: "https://filecoin.io/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/cello.png",
  //       imageAlt: "Cello Logo",
  //       link: "https://celo.org/",
  //       color: "bg-[#0f1313]",
  //     },
  //     {
  //       imageSrc: "sponsors/technovalley.png",
  //       imageAlt: "Techno Valley Logo",
  //       link: "https://www.technovalley.co.in/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/tezos.jpg",
  //       imageAlt: "Tezos Logo",
  //       link: "https://tezos.com/",
  //       color: null,
  //     },
  //   ],
  //   event_partners: [
  //     {
  //       imageSrc: "sponsors/5ire.png",
  //       imageAlt: "5ire Logo",
  //       link: "https://www.5ire.org/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/xyz.webp",
  //       imageAlt: "XYZ Domain Logo",
  //       link: "https://gen.xyz/",
  //       color: "bg-black",
  //     },
  //     {
  //       imageSrc: "sponsors/mockflow.png",
  //       imageAlt: "MockFLow Logo",
  //       link: "https://mockflow.com/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/flowscale.jpg",
  //       imageAlt: "Flow Scale Logo",
  //       link: "https://fourscale.in/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/fitcheck.webp",
  //       imageAlt: "Fitcheck Logo",
  //       link: "https://fitcheck.co.in/",
  //       color: null,
  //     },
  //     {
  //       imageSrc: "sponsors/beeceptor.png",
  //       imageAlt: "Beeceptor Logo",
  //       link: "https://beeceptor.com/",
  //       color: null,
  //     },
  //   ],
  // };
  return (
    // <div className="flex flex-col gap-4">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <div className=" bg-gradient-to-t from-[#d2adae] grid grid-cols-2 max-h-[300px] to-[#9464aa] w-full rounded-xl backdrop-filter backdrop-blur-sm">
    //       <div className="flex flex-col justify-end text-white p-4 font-bold">
    //         Title Sponsors
    //       </div>
    //       <div className="grid grid-rows-3 max-h-[300px] p-4 gap-4">
    //         {sponsorDetails.title.map((s, index) => {
    //           return (
    //             <Link
    //               key={index}
    //               href={s.link}
    //               target="_blank"
    //               className="relative"
    //             >
    //               <div
    //                 className={`w-full h-full p-4 rounded justify-center items-center flex ${
    //                   s.color ? s.color : "bg-white"
    //                 }`}
    //               >
    //                 <img src={s.imageSrc} className="h-full" alt={s.imageAlt} />
    //               </div>
    //               <span className="absolute top-2 right-2">
    //                 {" "}
    //                 <ExternalLink size={16} />{" "}
    //               </span>
    //             </Link>
    //           );
    //         })}
    //       </div>
    //     </div>

    //     <div className=" bg-gradient-to-t from-[#d2adae] grid grid-cols-2 max-h-[300px] to-[#9464aa] w-full rounded-xl backdrop-filter backdrop-blur-sm">
    //       <div className="flex flex-col justify-end text-white p-4 font-bold">
    //         Fest Sponsors
    //       </div>
    //       <div className="grid grid-rows-3 max-h-[300px] p-4 gap-4">
    //         {sponsorDetails.fest.map((s, index) => {
    //           return (
    //             <Link
    //               key={index}
    //               href={s.link}
    //               target="_blank"
    //               className="relative"
    //             >
    //               <div
    //                 className={`w-full h-full p-4 rounded justify-center items-center flex ${
    //                   s.color ? s.color : "bg-white"
    //                 }`}
    //               >
    //                 <img src={s.imageSrc} className="h-full" alt={s.imageAlt} />
    //               </div>
    //               <span className="absolute top-2 right-2">
    //                 {" "}
    //                 <ExternalLink size={16} />{" "}
    //               </span>
    //             </Link>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //     <div className=" bg-gradient-to-t from-[#d2adae] flex flex-col to-[#9464aa] w-full rounded-xl backdrop-filter backdrop-blur-sm">
    //       <div className="grid grid-cols-2 h-full p-4 gap-4">
    //         {sponsorDetails.event.map((s, index) => {
    //           return (
    //             <Link
    //               key={index}
    //               href={s.link}
    //               target="_blank"
    //               className="max-h-[100px]"
    //             >
    //               <div
    //                 className={`w-full h-full p-4 rounded justify-center items-center flex ${
    //                   s.color ? s.color : "bg-white"
    //                 }`}
    //               >
    //                 <img src={s.imageSrc} className="h-full" alt={s.imageAlt} />
    //               </div>
    //             </Link>
    //           );
    //         })}
    //       </div>
    //       <div className="flex flex-col md:col-span-2 justify-end text-white p-4 font-bold">
    //         Event Sponsors
    //       </div>
    //     </div>

    //     <div className="lg:col-span-2 flex flex-col gap-4">
    //       <div className=" bg-gradient-to-t from-[#d2adae] grid grid-cols-2 max-h-[300px] to-[#9464aa] w-full rounded-xl backdrop-filter backdrop-blur-sm">
    //         <div className="flex flex-col justify-end text-white p-4 font-bold">
    //           Fest Sponsors
    //         </div>
    //         <div className="grid grid-rows-3 max-h-[300px] p-4 gap-4">
    //           {sponsorDetails.fest.map((s, index) => {
    //             return (
    //               <Link
    //                 key={index}
    //                 href={s.link}
    //                 target="_blank"
    //                 className="relative"
    //               >
    //                 <div
    //                   className={`w-full h-full p-4 rounded justify-center items-center flex ${
    //                     s.color ? s.color : "bg-white"
    //                   }`}
    //                 >
    //                   <img
    //                     src={s.imageSrc}
    //                     className="h-full"
    //                     alt={s.imageAlt}
    //                   />
    //                 </div>
    //                 <span className="absolute top-2 right-2">
    //                   {" "}
    //                   <ExternalLink size={16} />{" "}
    //                 </span>
    //               </Link>
    //             );
    //           })}
    //         </div>
    //       </div>

    //       <div className=" bg-gradient-to-t from-[#d2adae] grid grid-cols-2 max-h-[300px] to-[#9464aa] w-full rounded-xl backdrop-filter backdrop-blur-sm">
    //         <div className="flex flex-col justify-end text-white p-4 font-bold">
    //           Fest Sponsors
    //         </div>
    //         <div className="grid grid-rows-3 max-h-[300px] p-4 gap-4">
    //           {sponsorDetails.fest.map((s, index) => {
    //             return (
    //               <Link
    //                 key={index}
    //                 href={s.link}
    //                 target="_blank"
    //                 className="relative"
    //               >
    //                 <div
    //                   className={`w-full h-full p-4 rounded justify-center items-center flex ${
    //                     s.color ? s.color : "bg-white"
    //                   }`}
    //                 >
    //                   <img
    //                     src={s.imageSrc}
    //                     className="h-full"
    //                     alt={s.imageAlt}
    //                   />
    //                 </div>
    //                 <span className="absolute top-2 right-2">
    //                   {" "}
    //                   <ExternalLink size={16} />{" "}
    //                 </span>
    //               </Link>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <div className="md:min-h-screen rounded-xl bg-[url(/bg.svg)] p-4 bg-cover bg-no-repeat w-full flex flex-col justify-center items-center">
        <div className="max-w-[600px] md:h-[300px] flex flex-col gap-4 w-full p-4 justify-center items-center parent-sponsor lg:relative">
          <h3
            className={` text-white lg:absolute -top-20 child text-2xl md:text-4xl lg:text-5xl ${east_sea.className}`}
          >
            Title and Fest Sponsors
          </h3>
          <Image
            src={"/title.webp"}
            alt="Title sponsors"
            width={1000}
            height={1000}
            className=" max-w-[200px] md:max-w-[400px] child lg:absolute left-0 top-0 z-[2]"
          />
          <Image
            src={"/fest.webp"}
            alt="Fest sponsors"
            width={1000}
            height={1000}
            className=" max-w-[200px] md:max-w-[400px] child right-0 bottom-0 lg:absolute z-1"
          />
        </div>
      </div>
      <div className="lg:min-h-screen w-full gap-8 flex justify-center items-center rounded-xl bg-[url(/bg.svg)] flex-col p-4 bg-cover bg-no-repeat">
        <h3
          className={` text-white  child text-2xl md:text-4xl lg:text-5xl ${east_sea.className}`}
        >
          Other Sponsors
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-[200px] lg:max-w-[800px]">
          <div className="flex flex-col gap-4 col-span-3">
            <Image
              src={"/event-partners.png"}
              alt="Title sponsors"
              width={1000}
              height={1000}
            />
            <Image
              src={"/platform.png"}
              alt="Title sponsors"
              width={1000}
              height={1000}
            />
          </div>
          <Image
            src={"/event.png"}
            alt="Title sponsors"
            width={1000}
            height={1000}
            className="col-span-2 w-full"
          />
        </div>
      </div>
    </div>
  );
}
