import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { East_Sea_Dokdo, Inika } from "next/font/google";
import { Card } from "@/components";
import { rgba } from "@/lib/utils";

const east_sea = East_Sea_Dokdo({ weight: ["400"], subsets: ["latin"] });

const inika = Inika({weight: ["400", "700"], subsets: ['latin']})

export default function SponsorsPage() {

  const associate_data = [
    {
      img: '/sponsors/french_essence.png',
      title: 'Fragrance Partner'
    }
  ]

  const event_sponsors_data = [
    {
      img: '/sponsors/chessdotcom.png'
    },
    {
      img: '/sponsors/chessify.png'
    },
    {
      img: '/sponsors/fetchai.png'
    },
  ]

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">

      <Card bgColor={rgba('#000000', 0)} className="bg-[url(/bg.svg)] bg-cover bg-no-repeat">

        <h2 className={`${inika.className} text-white text-center tracking-wide my-3`}>TITLE</h2>
        <div className="grid lg:grid-cols-1 gap-6">

          <Image 
            src={'/sponsors/title_acer.svg'}
            alt="Acer"
            height={500}
            width={500}
            className="w-full h-auto max-w-[500px] mx-auto"
          />
        </div>
      </Card>
      
      <Card bgColor={rgba('#000000', 0)} className="bg-[url(/bg.svg)] bg-cover bg-no-repeat">

        <h2 className={`${inika.className} text-white text-center tracking-wide my-3`}>ASSOCIATE</h2>
        <div className="grid gap-6 mx-auto w-full max-w-[1200px]">
          {associate_data.map((item, ind) => {
            return (
              <div key={ind} className="text-center">
                <Image 
                  src={item.img}
                  alt=""
                  height={500}
                  width={500}
                  className="w-full h-auto max-w-[500px] mx-auto"
                />
                <div className="font-bold mt-3">
                  {item.title}
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <Card bgColor={rgba('#000000', 0)} className="bg-[url(/bg.svg)] bg-cover bg-no-repeat">

        <h2 className={`${inika.className} text-white text-center tracking-wide my-3`}>EVENT SPONSORS</h2>
        <div className="grid lg:grid-cols-4 gap-6 mx-auto w-full max-w-[1200px]">
          {event_sponsors_data.map((item, ind) => {
            return (
              <div key={ind}>
                <Image 
                  src={item.img}
                  alt=""
                  height={500}
                  width={500}
                  className="w-full h-auto max-w-[500px] mx-auto"
                />
              </div>
            )
          })}
        </div>
      </Card>

      <div className="lg:min-h-screen w-full gap-8 flex justify-center items-center rounded-xl bg-[url(/bg.svg)] flex-col p-4 bg-cover bg-no-repeat">
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
      </div>
    </div>
  );
}
