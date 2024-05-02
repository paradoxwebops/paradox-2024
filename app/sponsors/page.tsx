import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { East_Sea_Dokdo } from "next/font/google";

const east_sea = East_Sea_Dokdo({ weight: ["400"], subsets: ["latin"] });

export default function SponsorsPage() {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      
      <div className="md:min-h-screen rounded-xl bg-[url(/bg.svg)] p-4 bg-cover bg-no-repeat w-full flex flex-col justify-center items-center">
        
      </div>

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
