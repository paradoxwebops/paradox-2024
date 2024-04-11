"use client";

import {
  EventData,
  EventPage,
  defaultEventValues,
} from "@/components/Pages/Event";
import { useAxios } from "@/contexts";
import { getEventById } from "@/lib/methods";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventMainPage() {
  const { id }: { id: any } = useParams();
  const { axios } = useAxios();
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
  }, []);

  return <>{!failed && <EventPage {...data} />}</>;
}
