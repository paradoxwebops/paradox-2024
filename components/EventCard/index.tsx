import { allEventData } from "@/app/events/page";
import Link from "next/link";

export default function EventCard({ event }: { event: allEventData }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className=" bg-gradient-to-l from-[#AD2FFF] flex flex-col to-[#230137] w-full rounded-xl p-4"
    >
      <div className="rounded-xl w-full h-full">
        <img
          src=""
          alt="bg-img"
          className="w-full h-[300px] object-cover rounded-xl"
        />
        <p className="text-2xl text-white font-bold">{event.name}</p>
      </div>
    </Link>
  );
}
