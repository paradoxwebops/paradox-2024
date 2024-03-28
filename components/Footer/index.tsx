import Image from "next/image";
import { Card } from "..";
import Link from "next/link";
import { Instagram, Linkedin, Youtube, Mail, Heart } from "lucide-react";

type FooterProps = {
  bg: string;
};

type SocialLink = {
  id: number;
  url: string;
  icon: React.ReactNode;
};

const data: SocialLink[] = [
  {
    id: 1,
    url: "https://www.instagram.com/",
    icon: <Instagram className="w-3 md:w-full" />,
  },
  {
    id: 2,
    url: "https://www.youtube.com/",
    icon: <Youtube className="w-3 md:w-full" />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/",
    icon: <Linkedin className="w-3 md:w-full" />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/",
    icon: <Mail className="w-3 md:w-full" />,
  },
];

const Footer = ({ bg }: FooterProps) => {
  return (
    <Card bgColor={bg} className="text-white">
      <div className="flex justify-between items-center">
        <Image
          alt="paradox logo text"
          src={"/paradox_logo_text.webp"}
          width={1000}
          height={1000}
          className="w-24 md:w-48"
        />
        <div className="flex flex-col gap-2 text-right self-end">
          <div className="flex gap-2 md:gap-4 justify-end">
            {data.map(({ id, url, icon }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  className="bg-white/10 hover:bg-white/20 w-6 md:w-10 h-6 md:h-10 flex justify-center items-center  rounded-[20px]"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
          <small className="text-[6px] sm:text-[10px] md:text-base flex gap-1 md:gap-2 justify-center items-center">
            Designed with{" "}
            <Heart className="w-1 sm:w-2 md:w-4" fill="red" color="red" /> by
            Multimedia & WebOps Team
          </small>
        </div>
      </div>
    </Card>
  );
};

export { Footer };
