"use client";
import { Card } from "@/components";
import Image from "next/image";

export default function ContactPage() {
  const data = [
    {
      title: "General Inquiries",
      img: "/con_general.svg",
      info: {
        email: ["support@iitmparadox.org"],
      },
      description:
        "For any general questions or inquiries concerning Paradox 2024.",
    },
    {
      title: "Grievances",
      img: "/con_grieve.svg",
      info: {
        email: ["grievances@iitmparadox.org"],
      },
      description:
        "To report any issues or concerns related to Paradox 2024, its events, or its participants.",
    },
    {
      title: "Event Related Queries",
      img: "/con_events.svg",
      info: {
        email: ["events@iitmparadox.org"],
      },
      description:
        "Regarding any support from Department Heads of Sports - Culturals - Technicals.",
    },
    {
      title: "Payment Related Queries",
      img: "/con_pay.svg",
      info: {
        email: ["payments@iitmparadox.org"],
      },
      description: "All the queries regarding payment issues and failure.",
    },
    {
      title: "Sponsorship Queries",
      img: "/con_pay.svg",
      info: {
        email: ["partnership@iitmparadox.org"],
      },
      description: "All the queries regarding sponsorships.",
    },
  ];

  return (
    <>
      <h2
        className={`text-xl md:text-3xl lg:text-6xl my-12`}
        style={{ color: "#000" }}
      >
        Paradox 2024 Contact Information
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map(({ title, img, info, description }, ind) => {
          return (
            <Card
              bgColor="#03190F"
              className="flex max-md:flex-col-reverse justify-between"
              key={ind}
            >
              <div className="w-full md:w-1/2 flex flex-col justify-around">
                <h3 className="text-white text-3xl">{title}</h3>
                <div>
                  <div className="underline text-[#A3F613]">
                    {info.email.join(", ")}
                  </div>
                  <div className="text-white">{description}</div>
                </div>
              </div>
              <div className="">
                <Image src={img} alt="" className="w-full h-auto" />
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
