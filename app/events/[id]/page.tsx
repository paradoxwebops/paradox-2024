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
        console.log(data);

        setData({ ...data });
      } else {
        setFailed(true);
      }
    });
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
  }
  return <>{!failed && <EventPage {...data} />}</>;
}
