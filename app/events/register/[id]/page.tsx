"use client";

import Loading from "@/app/loading";
import RegistrationFormPage from "@/components/RegistrationPage";
import { useAxios } from "@/contexts";
import { FormType } from "@/lib/interfaces/Event";
import { useSelector } from "@/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventRegistrationMainPage() {
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState<FormType>({} as FormType);
  const [failed, setFailed] = useState(false);
  const [err, setErr] = useState({
    error: false,
    message: "",
  });
  const { id } = useParams();
  const { axios } = useAxios();
  const getForm = async (id: string) => {
    setLoading(true);
    setFailed(true);

    await axios
      .get("/fest/events/form/?event_id=" + id)
      .then((res) => {
        if (res.data) {
          setData(res.data);
          setFailed(false);
        }
      })
      .catch((err) => {
        setErr({
          error: true,
          message:
            "Something went wrong. Read the toast messages that appear quick 😉.",
        });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getForm(id.toString());
  }, [id]);
  if (loading) {
    return <Loading />;
  } else if (err.error) {
    return <p>{err.message}</p>;
  } else
    return (
      <>
        {typeof id == "string" && !failed && data && (
          <RegistrationFormPage
            event_id={parseInt(id.toString())}
            data={data}
          />
        )}
      </>
    );
}
