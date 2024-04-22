"use client";

import Loading from "@/app/loading";
import { LoginButton } from "@/components";
import RegistrationFormPage from "@/components/RegistrationPage";
import { useAxios } from "@/contexts";
import { FormType } from "@/lib/interfaces/Event";
import { useSelector } from "@/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventRegistrationMainPage() {
  const [loading, setLoading] = useState(true);
  const { access_token } = useSelector((state) => state.auth);
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
        // setErr({
        //   error: true,
        //   message: JSON.parse(err),
        // });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getForm(id.toString());
  }, [id, access_token]);
  if (loading) {
    return <Loading />;
  } else if (!!!access_token) {
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
