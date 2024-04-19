"use client";

import { LoginButton } from "@/components";
import {
  EventData,
  EventPage,
  defaultEventValues,
} from "@/components/Pages/Event";
import { useAxios } from "@/contexts";
import { getEventById } from "@/lib/methods";
import { useSelector } from "@/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventMainPage() {
  const { id }: { id: any } = useParams();
  const { axios } = useAxios();
  const { access_token } = useSelector((state) => state.auth);
  const [failed, setFailed] = useState(false);
  const [data, setData] = useState<EventData>({ ...defaultEventValues });

  useEffect(() => {
    getEventById(axios, id).then((res) => {
      if (res) {
        const { data } = res;
        setData({ ...data });
        setFailed(false);
      } else {
        setFailed(true);
      }
    });
  }, [access_token]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (!!!access_token) {
    return (
      <>
        <div className="flex justify-center items-center h-[70vh] w-full">
          <div className="text-center">
            <h2 className="text-2xl mb-6">Please login to continue.</h2>
            <LoginButton />
          </div>
        </div>
      </>
    );
  }
  return <>{!failed && <EventPage {...data} />}</>;
}
