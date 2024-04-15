"use client";
import { allEventData } from "@/app/events/page";
import Link from "next/link";
import { useEffect } from "react";

export default function EventCard({ event }: { event: allEventData }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className=" border-[#6140E2] text-black from-[#AD2FFF] flex flex-col to-[#230137] w-full rounded-xl p-4"
    >
      <div className="rounded-xl wrap container wrap--1 w-full h-full flex flex-col gap-2">
        <img
          src={event.header_image}
          alt={event.name}
          className="w-full h-[300px] border-[#6140E2] box object-cover rounded-xl"
        />
        {/* <p className="text-2xl text-center   font-bold">{event.name}</p> */}
      </div>
    </Link>
  );
}
