"use client";
import { LoginButton } from "@/components";
import { FlagshipCarousel } from "@/components/Carousel";
import EventCard from "@/components/EventCard";
import { FlagshipContainerCard, FlagshipEventDetails } from "@/components/EventCard/Flagship";
import LoadingEventCards from "@/components/LoadingEventCards";
import { useAxios } from "@/contexts";
import { useSelector } from "@/store";
import { Info } from "lucide-react";
import { East_Sea_Dokdo } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const eastSeaDokdo = East_Sea_Dokdo({ weight: "400", subsets: ["latin"] });
export interface allEventData {
  id: string;
  name: string;
  header_image: string;
  department: string;
}

const FlagshipEventsContainer = ({data}:{data: FlagshipEventDetails[]}) => {
  return (
    <div className="w-full grid lg:grid-cols-2 gap-6">
      {data.map((val, ind) => {
        return (
          <div className="w-full relative">
            <Image
              src={val.image}
              alt={val.name}
              height={200}
              width={200}
              className="w-full h-auto"
            />
            <a href={`/events/flagship/${val.url}`} className="after:absolute after:inset-0" />
          </div>
        )
      })}
    </div>
  )
}

export default function EventsPage() {
  const { axios } = useAxios();
  const [loading, setLoading] = useState(false);
  const { access_token } = useSelector((s) => s.auth);
  const [selected, setSelected] = useState(
    window.localStorage.getItem("selected") || "Technicals"
  );
  const [events, setEvents] = useState<allEventData[]>([]);
  const getAllEvents = async () => {
    setLoading(true);
    await axios
      .get("/fest/events/all/")
      .then((res) => {
        if (res.data) {
          setEvents(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  useEffect(() => {
    getAllEvents();
  }, [access_token]);
  useEffect(() => {
    window.localStorage.setItem("selected", selected);
  }, [selected]);
  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);


  const flagshipEvents:FlagshipEventDetails[] = [
    {
        name: 'Gen AI Hackathon',
        url: 'genai',
        image: '/genai_banner.webp'
    },
    // {
    //     name: 'Laser Tag',
    //     url: 'lasertag',
    //     image: ''
    // },
    {
        name: 'Prom Night',
        url: 'promnight',
        image: '/promnight_banner.webp'
    },
]

  if (loading) {
    return <LoadingEventCards />;
  }
  
  return (
    <div>
      <div className="flex flex-col gap-4 ">
        {/* FLAGSHIP EVENTS */}
        {/* <FlagshipCarousel slides={flagshipEvents} options={{ loop: true }} /> */}
        <FlagshipEventsContainer data={flagshipEvents} />
        {events.length == 0 && (
          <h2
            className={`${eastSeaDokdo.className} text-7xl text-center`}
            style={{ color: "#550083" }}
          >
            No events available for now. Please check in later.
          </h2>
        )}
        {events.length >= 1 && (
          <div className="flex flex-col gap-4 h-full justify-start">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <button
                  onClick={() => setSelected("Technicals")}
                  className={`outline-none text-center ${
                    selected == "Technicals"
                      ? "border-[#6140E2] bg-[#D1C7FA]"
                      : "bg-[#DEDAEF]"
                  }   p-1 md:p-2 border-2 rounded-xl text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-[#30044D]`}
                >
                  Technicals
                </button>
                <button
                  onClick={() => setSelected("Sports")}
                  className={`outline-none text-center ${
                    selected == "Sports"
                      ? "border-[#6140E2] bg-[#D1C7FA]"
                      : "bg-[#DEDAEF]"
                  }   p-1 md:p-2 border-2 rounded-xl text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-[#30044D]`}
                >
                  Sports
                </button>
                <button
                  onClick={() => setSelected("Culturals")}
                  className={`outline-none text-center ${
                    selected == "Culturals"
                      ? "border-[#6140E2] bg-[#D1C7FA]"
                      : "bg-[#DEDAEF]"
                  }   p-1 md:p-2 border-2 rounded-xl text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-[#30044D]`}
                >
                  Culturals
                </button>
              </div>
              <p className="flex gap-2 justify-start items-start text-sm md:text-lg">
                {" "}
                <Info /> Select one of the buttons to view events specific to that
                department.
              </p>
            </div>
            <div className=" w-full flex justify-center items-center gap-4">
              <div className=" max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 w-full">
                {events
                  .filter((event) => event.department == selected)
                  .map((event, ind) => {
                    return <EventCard event={event} key={event.id} />;
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
