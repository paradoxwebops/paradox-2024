"use client";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { GeoInfo } from "./geoinfo";
import { checkFestRegistration, festRegister } from "@/lib/methods";
import { FormDataProps } from "@/lib/interfaces";
import { useToast, useAxios } from "@/contexts";
import { useRouter } from "next/navigation";
import ComponentLoading from "../LoadingForm";
import { East_Sea_Dokdo } from "next/font/google";

const eastSeaDokdo = East_Sea_Dokdo({ weight: "400", subsets: ["latin"] });
export const inputClassNames = {
  label: ["!text-[#000]", "font-semibold"],
  input: [
    "text-[#2D78A3]",
    "font-bold",
    "placeholder:text-[#2D78A3] placeholder:font-bold",
  ],
  inputWrapper: ["bg-[#B9D7DE]"],
};

export const selectClassNames = {
  trigger: [...inputClassNames.inputWrapper],
  value: [...inputClassNames.input],
  ...inputClassNames,
};

function RegistrationForm() {
  const { axios } = useAxios();
  const [checkFest, setCheckFest] = useState(false);
  const [invalid, setInvalid] = useState<
    { name: string; invalid: boolean; message: string }[]
  >([]);
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>({
    whatsapp: "",
    country: "",
    gender: "",
    state: "",
    city: "",
    dob: "",
    arrival_date: "",
    departure_date: "",
    likelihood: "",
  });

  const validate = () => {
    if (formData.dob.length <= 0) {
      return {
        isValidated: false,
        message: "DOB is empty",
      };
    } else if (formData.whatsapp.length <= 0) {
      return {
        isValidated: false,
        message: "Whatsapp number is empty",
      };
    } else if (formData.gender.length <= 0) {
      return {
        isValidated: false,
        message: "Gender is not selected",
      };
    } else if (formData.country.length <= 0) {
      return {
        isValidated: false,
        message: "Country is not selected",
      };
    } else if (formData.state.length <= 0) {
      return {
        isValidated: false,
        message: "State is not selected",
      };
    } else if (formData.arrival_date.length <= 0) {
      return {
        isValidated: false,
        message: "Arrival Date is not selected",
      };
    } else if (formData.departure_date.length <= 0) {
      return {
        isValidated: false,
        message: "Departure Date is not selected",
      };
    } else if (formData.likelihood.length <= 0) {
      return {
        isValidated: false,
        message: "Likelihood is not selected",
      };
    } else if (formData.city.length <= 0) {
      if (formData.country !== "India") {
        return {
          isValidated: true,
          message: "message: You have entered everything",
        };
      } else
        return {
          isValidated: false,
          message: "City is not selected",
        };
    } else {
      return {
        isValidated: true,
        message: "You have entered everything",
      };
    }
  };
  const check = async () => {
    setLoading(true);
    try {
      const res = await checkFestRegistration(axios);
      if (res && res.data) {
        setCheckFest(res.data.registered);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }

    setLoading(false);
  };
  useEffect(() => {
    check();
  }, []);
  const handleSubmit = () => {
    setLoading(true);
    if (validate().isValidated) {
      festRegister(axios, { ...formData })
        .then(({ data }) => {
          toast({
            title: "Registered",
            description: `You have successfully registered for Paradox'24`,
          });
          router.push("/");
        })
        .catch((err) => {
          setLoading(false);
          const res = err.response;
          console.log(err);

          if (res) {
            alert(`Error ${res.status}: ${res.data.message}`);
          }
          if (!res && err) {
            toast({
              title: "Something Went Wrong!",
              description: `${err.status} Error`,
              variant: "destructive",
            });
          }
        });
    } else {
      setLoading(false);
      toast({
        title: "Empty Field",
        description: validate().message,
      });
    }
  };

  return (
    <ComponentLoading loading={loading}>
      {!checkFest ? (
        <div className="w-full flex flex-col gap-4">
          <Input
            label="Date of Birth"
            placeholder="DOB"
            type="date"
            isRequired
            classNames={{ ...inputClassNames }}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                dob: new Date(e.target.value)?.toISOString().split(":")[0],
              }))
            }
            isInvalid={
              invalid.filter((e) => e.name == "DOB" && e.invalid).length > 0
            }
            errorMessage={
              invalid.filter((e) => e.name == "DOB" && e.invalid).length > 0 &&
              invalid.filter((e) => e.name == "DOB")[0]
                ? invalid.filter((e) => e.name == "DOB")[0].message
                : ""
            }
          />
          <Input
            label="Provide Whatsapp Number"
            placeholder="Whatsapp Number"
            isRequired
            type="tel"
            classNames={{ ...inputClassNames }}
            isInvalid={
              invalid.filter((e) => e.name == "phNo" && e.invalid).length > 0
            }
            errorMessage={
              invalid.filter((e) => e.name == "phNo")[0]
                ? invalid.filter((e) => e.name == "PhNo")[0].message
                : ""
            }
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
            }
          />
          <Select
            isRequired
            label="Select your gender"
            placeholder="Gender"
            classNames={{ ...selectClassNames }}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, gender: e.target.value }))
            }
          >
            <SelectItem key="Male" value={"Male"}>
              Male
            </SelectItem>
            <SelectItem key="Female" value={"Female"}>
              Female
            </SelectItem>
          </Select>
          <GeoInfo updateState={setFormData} />
          <Input
            label="Arrival Date "
            placeholder="Arrival"
            isRequired
            classNames={{ ...inputClassNames }}
            type="date"
            isInvalid={
              invalid.filter((e) => e.name == "arrival" && e.invalid).length > 0
            }
            errorMessage={
              invalid.filter((e) => e.name == "arrival")[0]
                ? invalid.filter((e) => e.name == "arrival")[0].message
                : ""
            }
            onChange={(e: any) =>
              setFormData((prev) => ({
                ...prev,
                arrival_date: new Date(e.target.value)
                  ?.toISOString()
                  .split(":")[0],
              }))
            }
          />
          <Input
            label="Departure Date"
            defaultValue={new Date("30-5-2024").toString()}
            classNames={{ ...inputClassNames }}
            placeholder="Departure"
            isRequired
            isInvalid={
              invalid.filter((e) => e.name == "departure" && e.invalid).length >
              0
            }
            errorMessage={
              invalid.filter((e) => e.name == "departure")[0]
                ? invalid.filter((e) => e.name == "departure")[0].message
                : ""
            }
            type="date"
            onChange={(e: any) =>
              setFormData((prev) => ({
                ...prev,
                departure_date: new Date(e.target.value)
                  .toISOString()
                  .split(":")[0],
              }))
            }
          />
          <Select
            isRequired
            label="Likelihood of coming to paradox"
            classNames={{ ...selectClassNames }}
            placeholder="How likely are you to come to paradox"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, likelihood: e.target.value }))
            }
          >
            <SelectItem key="Definitely" value={"Definitely"}>
              Definitely
            </SelectItem>
            <SelectItem key="Most Probably" value={"Most Probably"}>
              Most Probably
            </SelectItem>
            <SelectItem key="Unsure" value={"Unsure"}>
              Unsure
            </SelectItem>
          </Select>
          <Button
            type="submit"
            className="w-full max-w-[200px] ml-auto font-bold bg-[#2D78A2] text-[#ECF4F8]"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <p
            className={`${eastSeaDokdo.className} text-4xl text-center`}
          >{`You have lost your rights to register. Just kidding, you have already registered for Paradox'24 :)`}</p>
          <small className="text-center">
            {`PS: Stop complaining about webops and we might just let you edit
            your registration form 😈`}
          </small>
        </div>
      )}
    </ComponentLoading>
  );
}

export { RegistrationForm };
