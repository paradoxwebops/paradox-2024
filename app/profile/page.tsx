"use client";

import { LoginButton } from "@/components";
import EventCard from "@/components/EventCard";
import { useAxios } from "@/contexts";
import { useSelector } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface RegisteredEventsData {
  id: string;
  name: string;
  header_image: string;
}

export default function ProfilePage() {
  const { user, access_token } = useSelector((s) => s.auth);
  const { axios } = useAxios();
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRegisteredEvents = async () => {
    setLoading(true);
    await axios
      .get("/fest/events/registered/")
      .then((res) => {
        if (res.data) {
          setRegisteredEvents(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  useEffect(() => {
    getRegisteredEvents();
  }, [access_token]);
  if (!!!access_token) {
    return (
      <>
        <div className="flex justify-center align-center h-full">
          <div className="text-center">
            <h2 className="text-2xl mb-6">Please login to continue.</h2>
            <LoginButton />
          </div>
        </div>
      </>
    );
  } else
    return (
      <div className="flex flex-col gap-8 p-2 md:p-4 lg:p-8 xl:p-16">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 rounded-xl flex justify-center items-center bg-gradient-radial from-[#764b76] to-[#845d84]">
            <Image className=" rounded-full" src={user?.picture} alt="profile" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="p-2 px-4 bg-[#c7b2cc] rounded-xl flex flex-col">
              <span className="font-bold text-[#470E6A]">Name</span>
              <span>{user?.first_name + " " + user?.last_name}</span>
            </p>
            <p className="p-2 px-4 bg-[#c7b2cc] rounded-xl flex flex-col">
              <span className="font-bold text-[#470E6A]">Email</span>
              <span>{user?.email}</span>
            </p>
          </div>
        </div>
        {!loading ? (
          <div className="bg-gradient-radial to-[#d1c3d4] from-[#c591e2] rounded-xl p-4">
            <h6 className="text-[#470E6A]">Registered Events</h6>
            <div className="flex flex-wrap w-full">
              {registeredEvents.length !== 0 ? (
                registeredEvents.map((event: RegisteredEventsData) => (
                  <Link
                    key={event.id}
                    href={`/events/edit/${event.id}`}
                    className=" border-[#6140E2] text-black from-[#AD2FFF] flex flex-col  w-48 h-48 to-[#230137] rounded-xl p-4"
                  >
                    <div className="rounded-xl wrap container wrap--1 w-full h-full flex flex-col gap-2">
                      <Image
                        src={event.header_image}
                        alt={event.name}
                        className="w-full h-[300px] border-[#6140E2] box object-cover rounded-xl"
                      />
                    </div>
                  </Link>
                ))
              ) : (
                <div>
                  You have not registered for any events. Please go register for
                  events{" "}
                  <Link className="underline text-[#470E6A]" href={"/events"}>
                    here
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full h-[300px] bg-gray-300 animate-pulse rounded-3xl"></div>
        )}
      </div>
    );
}
