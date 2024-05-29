import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { East_Sea_Dokdo, Inika } from "next/font/google";
import { Card } from "@/components";
import { rgba } from "@/lib/utils";
import { link } from "fs";

const east_sea = East_Sea_Dokdo({ weight: ["400"], subsets: ["latin"] });

const inika = Inika({ weight: ["400", "700"], subsets: ["latin"] });

export default function SponsorsPage() {
  const associate_data = [
    {
      img: "/sponsors/french_essence.png",
      title: "Fragrance Partner",
      link: "https://www.frenchessence.com/",
    },
    {
      img: "/sponsors/zepto.png",
      title: "",
      link: "https://www.zeptonow.com/",
    },
    {
      img: "/sponsors/ezdiner.png",
      title: "",
      link: "https://www.eazydiner.com/",
    },
  ];

  const fest_partners_data = [
    {
      img: "/sponsors/max_protein.png",
      title: "Protein Snacking Partner",
      link: "https://www.qelicacare.com/",
    },
    {
      img: "/sponsors/qelica.png",
      title: "Oral Care Partner",
      link: "https://www.qelicacare.com/",
    },
    {
      img: "/sponsors/instasport.png",
      title: "Sports Partner",
      link: "https://instasport.club/",
    },
    {
      img: "/sponsors/electronicsforyou.png",
      title: "Knowledge Partner",
      link: "https://www.electronicsforu.com/",
    },
    {
      img: "/sponsors/lottechocopie.png",
      title: "Snacking Partner",
      link: "https://www.lotteindia.com/choco-pie.html",
    },
  ];

  const event_sponsors_data = [
    {
      img: "/sponsors/fetchai.png",
      link: "https://fetch.ai/",
    },
    {
      img: "/sponsors/jaicopublishinghouse.png",
      link: "https://www.jaicobooks.com/",
    },
    {
      img: "/sponsors/rg.png",
      link: "https://adiy.in/",
    },

    {
      img: "/sponsors/kreativationstudio.png",
      link: "https://www.facebook.com/studio.kreativation/",
    },
    {
      img: "/sponsors/lt.png",
      link: "https://www.lntecc.com/",
    },
    {
      img: "/sponsors/chessdotcom.png",
      link: "https://www.chess.com/",
    },
    {
      img: "/sponsors/chessify.png",
      link: "https://chessify.me/",
    },
  ];

  const event_partners_data = [
    {
      img: "/sponsors/codingninjas.png",
      link: "https://www.codingninjas.com/",
    },
    {
      img: "/sponsors/valorant.png",
      link: "https://playvalorant.com/",
    },
    {
      img: "/sponsors/frozenbottle.png",
      link: "https://frozenbottle.com/",
    },
    {
      img: "/sponsors/upsurge.png",
      link: "https://www.upsurge.club/",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">

      <Card bgColor={rgba('#000000', 0)} className="bg-[url(/bg.svg)] bg-cover bg-no-repeat">

        <h2 className={`${inika.className} text-white text-center tracking-wide my-3`}>TITLE</h2>
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          <Image 
            src={'/sponsors/title_acer.svg'}
            alt="Acer"
            height={500}
            width={500}
            className="w-full h-auto max-w-[500px] mx-auto"
          />

          <div className={`${inika.className} flex flex-col gap-3 text-white font-bold`}>
            <p>
              Level up your tech game with Acer, a leading innovator in electronics and computing for over four decades. They craft top-notch laptops, desktops, monitors, and more, pushing the boundaries of what technology can achieve.
            </p>
            <p>
              Whether you're a student, professional, or gamer, Acer has something to offer. Conquer deadlines on sleek and powerful Aspire laptops. For gamers, the Predator line delivers cutting-edge hardware and immersive displays to dominate the competition. Creative professionals can unleash creativity with stunning monitors and workstations, bringing visions to life with clarity and color accuracy.
            </p>
            <p>
              Acer's focus extends beyond hardware, striving to create technology that seamlessly integrates into your life, enhancing productivity, entertainment, and computing. With innovation, reliability, and quality, Acer delivers performance, style, and cutting-edge features.
            </p>
            <p>
              Don't settle for less. Acer earned its reputation by exceeding expectations. Explore their computing solutions and unlock possibilities. From ultrabooks to gaming rigs, crystal-clear monitors to cloud solutions, Acer has something for everyone. Elevate your tech game and experience Acer's commitment to excellence. You won't be disappointed.
            </p>
          </div>
          
        </div>
      </Card>

      <Card bgColor={rgba('#000000', 0)} className="bg-[url(/bg.svg)] bg-cover bg-no-repeat">

        <h2 className={`${inika.className} text-white text-center tracking-wide my-3`}>CO - TITLE</h2>
        <div className="grid lg:grid-cols-1 gap-12">

          <div className="grid lg:grid-cols-2 gap-6 items-center">

            <Image 
              src={'/sponsors/cotitle_insightsias.png'}
              alt="Acer"
              height={500}
              width={500}
              className="w-full h-auto max-w-[500px] mx-auto"
            />
            <div className={`${inika.className} flex flex-col gap-3 text-white font-bold`}>
              <p>
                Unlock your potential with Insights IAS, the premier institute for Civil Services preparation. This esteemed organization has been guiding aspiring candidates towards their dreams of serving the nation.
              </p>
              <p>
                Insights IAS offers a comprehensive suite of programs meticulously designed to equip you with the knowledge, skills, and strategies necessary to excel in the highly competitive Civil Services examinations. Their expert faculty, comprising experienced educators and former civil servants, impart invaluable insights and mentor you through every stage of the rigorous selection process.
              </p>
              <p>
                From comprehensive coursework and interactive classroom sessions to mock tests and personalized mentoring, Insights IAS provides a holistic learning experience tailored to your individual needs. Their cutting-edge study materials, combined with a supportive learning environment, empower you to approach the exams with confidence and determination.
              </p>
              <p>
                Embark on a rewarding journey towards serving the nation with Insights IAS as your trusted partner. Unlock your true potential and pave the way for a fulfilling career in the prestigious Civil Services.
              </p>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <Image 
              src={'/sponsors/cotitle_tredence.png'}
              alt="Acer"
              height={500}
              width={500}
              className="w-full h-auto max-w-[500px] mx-auto"
            />
            <div className={`${inika.className} flex flex-col gap-3 text-white font-bold`}>
              <p>
                Harness the power of data-driven insights with Tredence, a trailblazer in analytics solutions. This visionary company has empowered businesses to unleash the true potential of their data.
              </p>
              <p>
                Seeking operational streamlining, process optimization, or game-changing revelations? Tredence's cutting-edge analytics capabilities deliver. Their seasoned experts, armed with advanced technologies and industry know-how, craft tailored solutions for unprecedented growth and efficiency.
              </p>
              <p>
                From robust data management to predictive modeling and prescriptive analytics, Tredence's comprehensive services equip you with tools for informed decisions and staying ahead. Their holistic approach fosters a data-driven culture fueling continuous improvement.
              </p>
              <p>
                Don't let data be a mere byproduct; let Tredence transform it into your greatest asset. Embrace excellence, innovation, and customer success as they navigate the evolving analytics landscape. Unlock new possibilities and gain a competitive edge with Tredence as your analytics partner.
              </p>
            </div>
          </div>

        </div>
      </Card>

      <Card
        bgColor={rgba("#000000", 0)}
        className="bg-[url(/bg.svg)] bg-cover bg-no-repeat"
      >
        <h2
          className={`${inika.className} text-white text-center tracking-wide my-3`}
        >
          ASSOCIATE
        </h2>
        <div className="flex gap-6 mx-auto w-full max-w-[1200px] justify-center">
          {associate_data.map((item, ind) => {
            return (
              <div key={ind} className="text-center w-full max-w-[20%]">
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.img}
                    alt=""
                    height={500}
                    width={500}
                    className="w-full h-auto max-w-[350px] rounded-lg mx-auto"
                  />
                </Link>
                <div className="font-bold mt-3">{item.title}</div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card
        bgColor={rgba("#000000", 0)}
        className="bg-[url(/bg.svg)] bg-cover bg-no-repeat"
      >
        <h2
          className={`${inika.className} text-white text-center tracking-wide my-3`}
        >
          FEST PARTNERS
        </h2>
        <div className="flex gap-6 mx-auto w-full max-w-[1200px] justify-center">
          {fest_partners_data.map((item, ind) => {
            return (
              <div key={ind} className="text-center w-full max-w-[20%]">
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.img}
                    alt=""
                    height={500}
                    width={500}
                    className="w-full h-auto max-w-[250px] rounded-lg mx-auto"
                  />
                </Link>
                <div className="font-bold mt-3">{item.title}</div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card
        bgColor={rgba("#000000", 0)}
        className="bg-[url(/bg.svg)] bg-cover bg-no-repeat"
      >
        <h2
          className={`${inika.className} text-white text-center tracking-wide my-3`}
        >
          EVENT SPONSORS
        </h2>
        <div className="flex max-lg:flex-col gap-6 mx-auto w-full max-w-[900px] justify-center flex-wrap">
          {event_sponsors_data.map((item, ind) => {
            return (
              <div key={ind} className="w-full lg:max-w-[20%] h-auto">
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.img}
                    alt=""
                    height={500}
                    width={500}
                    className="w-full h-auto max-w-[200px] mx-auto"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Card>

      <Card
        bgColor={rgba("#000000", 0)}
        className="bg-[url(/bg.svg)] bg-cover bg-no-repeat"
      >
        <h2
          className={`${inika.className} text-white text-center tracking-wide my-3`}
        >
          EVENT PARTNERS
        </h2>
        <div className="grid lg:grid-cols-3 justify-center items-center gap-8 mx-auto w-full max-w-[500px]">
          {event_partners_data.map((item, ind) => {
            return (
              <div key={ind}>
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.img}
                    alt=""
                    height={500}
                    width={500}
                    className="w-full h-auto max-w-[150px] mx-auto"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Card>

      {/* <div className="lg:min-h-screen w-full gap-8 flex justify-center items-center rounded-xl bg-[url(/bg.svg)] flex-col p-4 bg-cover bg-no-repeat">
        <div className="flex text-left w-full uppercase">

          <h3 className="text-[#740D47]">Past Sponsors</h3>
        
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[80%]">
          <Image
            src={"/event.png"}
            alt="Title sponsors"
            width={1000}
            height={1000}
            className="w-full"
          />
          <div className="flex flex-col gap-4">
            <Image
              src={"/title.webp"}
              alt="Title sponsors"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
            <Image
              src={"/fest.webp"}
              alt="Fest sponsors"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-4">
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
        </div>
      </div> */}
    </div>
  );
}
