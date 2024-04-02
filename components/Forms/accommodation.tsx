"use client";
import {
  Select,
  SelectItem,
  Input,
  Button,
  Textarea,
  Switch,
  Checkbox,
  Link,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { GeoInfo } from "./geoinfo";
import {
  accomRegister,
  checkAccomRegistration,
  checkFestRegistration,
  festRegister,
} from "@/lib/methods";
import { AccommodationProps } from "@/lib/interfaces";
import { useToast, useAxios } from "@/contexts";
import { useRouter } from "next/navigation";
import { East_Sea_Dokdo } from "next/font/google";
import ComponentLoading from "../LoadingForm";
import { inputClassNames, selectClassNames } from ".";

const eastSeaDokdo = East_Sea_Dokdo({ weight: "400", subsets: ["latin"] });

function AccommodationForm() {
  const { axios } = useAxios();
  const [checkFest, setCheckFest] = useState(false);
  const [checkAccom, setCheckAccom] = useState({
    registered: false,
    paid: false,
  });
  const [agree, setAgree] = useState(false);
  const [pwd, setPWD] = useState(false);
  const [passport, setPassport] = useState(false);
  const [invalid, setInvalid] = useState<
    { name: string; invalid: boolean; message: string }[]
  >([]);
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const passportRef = useRef<HTMLInputElement>(null);
  const fileNameRef = useRef<HTMLElement | null>(null);
  const passportNameRef = useRef<HTMLElement | null>(null);
  const finalForm = new FormData();
  const [formData, setFormData] = useState<AccommodationProps>({
    arrival_date: "",
    departure_date: "",
    jain_food: "",
    emergency_contact: "",
    emergency_relationship: "",
    emergency_name: "",
    medical_issues: "",
    pwd: "",
    pwd_certificate: null,
    outside_india: "",
    passport: null,
  });

  const validate = () => {
    if (formData.emergency_contact.length <= 0) {
      return {
        isValidated: false,
        message: "Emergency contact number is empty",
      };
    } else if (formData.emergency_name.length <= 0) {
      return {
        isValidated: false,
        message: "Emergency contact name is empty",
      };
    } else if (formData.jain_food.length <= 0) {
      return {
        isValidated: false,
        message: "Jain food preference is not selected",
      };
    } else if (formData.pwd.length <= 0) {
      return {
        isValidated: false,
        message: "PWD field is not selected",
      };
    } else if (formData.outside_india.length <= 0) {
      return {
        isValidated: false,
        message: "Outside India field is not selected",
      };
    } else if (formData.emergency_relationship.length <= 0) {
      return {
        isValidated: false,
        message: "Emergency relationship field is empty",
      };
    } else if (formData.arrival_date.length <= 0) {
      return {
        isValidated: false,
        message: "Arrival Date is not selected",
      };
      //@ts-ignore
    } else if (pwd && fileRef.current?.files?.length <= 0) {
      return {
        isValidated: false,
        message: "PWD certificate is not uploaded",
      };
      //@ts-ignore
    } else if (passportRef.current?.files?.length <= 0) {
      return {
        isValidated: false,
        message: "Passport is not uploaded",
      };
    } else if (formData.departure_date.length <= 0) {
      return {
        isValidated: false,
        message: "Departure Date is not selected",
      };
    } else if (!agree) {
      return {
        isValidated: false,
        message: "Agree to terms & conditions",
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
    try {
      const res = await checkAccomRegistration(axios);
      if (res && res.data) {
        setCheckAccom({
          registered: res.data.registered,
          paid: res.data.paid,
        });
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
      finalForm.set("arrival_date", formData.arrival_date);
      finalForm.set("departure_date", formData.departure_date);
      finalForm.set("jain_food", formData.jain_food);
      finalForm.set("emergency_contact", formData.emergency_contact);
      finalForm.set(
        "emergency_contact_relation",
        formData.emergency_relationship
      );
      finalForm.set("emergency_contact_name", formData.emergency_name);
      finalForm.set(
        "medical_issues",
        formData.medical_issues ? formData.medical_issues : ""
      );
      finalForm.set("pwd", formData.pwd);
      //@ts-ignore
      finalForm.set("pwd_certificate", formData.pwd_certificate);
      finalForm.set("outside_india", formData.outside_india);
      //@ts-ignore
      finalForm.set("passport", formData.passport);
      console.log(finalForm);

      axios
        .post("/fest/accom_register/", finalForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setLoading(false);
          console.log(res.data);

          toast({
            title: "Success",
            description: `Your data has been successfully saved!`,
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
      setLoading(false);
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
      {checkFest ? (
        checkAccom.paid ? (
          !checkAccom.registered ? (
            <div className="w-full flex flex-col gap-4">
              <Input
                label="Arrival Date "
                placeholder="Arrival"
                isRequired
                classNames={{ ...inputClassNames }}
                type="date"
                isInvalid={
                  invalid.filter((e) => e.name == "arrival" && e.invalid)
                    .length > 0
                }
                errorMessage={
                  invalid.filter((e) => e.name == "arrival")[0]
                    ? invalid.filter((e) => e.name == "arrival")[0].message
                    : ""
                }
                onChange={(e: any) => {
                  setFormData((prev) => ({
                    ...prev,
                    arrival_date: new Date(e.target.value)
                      ?.toISOString()
                      .split(":")[0],
                  }));
                  finalForm.set(
                    "arrival_date",
                    new Date(e.target.value)?.toISOString().split(":")[0]
                  );
                }}
              />
              <Input
                label="Departure Date"
                defaultValue={new Date("30-5-2024").toString()}
                classNames={{ ...inputClassNames }}
                placeholder="Departure"
                isRequired
                isInvalid={
                  invalid.filter((e) => e.name == "departure" && e.invalid)
                    .length > 0
                }
                errorMessage={
                  invalid.filter((e) => e.name == "departure")[0]
                    ? invalid.filter((e) => e.name == "departure")[0].message
                    : ""
                }
                type="date"
                onChange={(e: any) => {
                  setFormData((prev) => ({
                    ...prev,
                    departure_date: new Date(e.target.value)
                      .toISOString()
                      .split(":")[0],
                  }));
                  finalForm.set(
                    "departure_date",
                    new Date(e.target.value)?.toISOString().split(":")[0]
                  );
                }}
              />
              <Input
                label="Emergency contact name"
                classNames={{ ...inputClassNames }}
                placeholder="Name of emergency contact"
                isRequired
                type="text"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    emergency_name: e.target.value,
                  }));
                  finalForm.set("emergency_contact_name", e.target.value);
                }}
              />
              <Input
                label="Emergency contact number"
                classNames={{ ...inputClassNames }}
                placeholder="Phone number of emergency contact"
                isRequired
                type="number"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    emergency_contact: e.target.value,
                  }));
                  finalForm.set("emergency_contact", e.target.value);
                }}
              />

              <Select
                isRequired
                label="Emergency contact relationship"
                placeholder="Relationship with emergency contact"
                classNames={{ ...selectClassNames }}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    emergency_relationship: e.target.value,
                  }));
                  finalForm.set("emergency_contact_relation", e.target.value);
                }}
              >
                <SelectItem key="spouse" value={"spouse"}>
                  Spouse
                </SelectItem>
                <SelectItem key="parent" value={"parent"}>
                  Parent
                </SelectItem>
                <SelectItem key="child" value={"child"}>
                  Child
                </SelectItem>
                <SelectItem key="sibling" value={"sibling"}>
                  Sibling
                </SelectItem>
                <SelectItem
                  key="other_family_member"
                  value={"other_family_member"}
                >
                  Other Family Member
                </SelectItem>
                <SelectItem key="legal_guardian" value={"legal_guardian"}>
                  Legal Guardian
                </SelectItem>
                <SelectItem key="other" value={"other"}>
                  Other
                </SelectItem>
              </Select>
              <Select
                isRequired
                label="Do you require Jain Food?"
                placeholder="Jain Food"
                classNames={{ ...selectClassNames }}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    jain_food: e.target.value,
                  }));
                  finalForm.set("jain_food", e.target.value);
                }}
              >
                <SelectItem key="true" value={"true"}>
                  Yes
                </SelectItem>
                <SelectItem key="false" value={"false"}>
                  No
                </SelectItem>
              </Select>
              <Textarea
                label="Do you have any medical issues?"
                classNames={{ ...inputClassNames }}
                placeholder="State your medical issues. Skip this question if you don't have any."
                type="text"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    medical_issues: e.target.value,
                  }));
                  finalForm.set("medical_issues", e.target.value);
                }}
              />
              <Select
                isRequired
                label="Do you reside outside India?"
                classNames={{ ...selectClassNames }}
                placeholder="NRI"
                onChange={(e) => {
                  if (e.target.value == "true") {
                    setPassport(true);
                  } else {
                    setPassport(false);
                  }
                  setFormData((prev) => ({
                    ...prev,
                    outside_india: e.target.value,
                  }));
                  finalForm.set("outside_india", e.target.value);
                }}
              >
                <SelectItem key="true" value={"true"}>
                  Yes
                </SelectItem>
                <SelectItem key="false" value={"false"}>
                  No
                </SelectItem>
              </Select>
              {passport && (
                <>
                  <div className="flex justify-start items-center gap-4">
                    <Button className="w-full max-w-[200px] font-bold bg-[#2D78A2] text-[#ECF4F8]">
                      {" "}
                      <label htmlFor="outside_india">Upload passport</label>
                    </Button>
                    <small ref={passportNameRef}></small>
                  </div>
                  <input
                    accept="application/pdf"
                    onChange={(e) => {
                      if (e.target.files !== null) {
                        let temp = { ...formData };
                        temp.passport = e.target.files[0];
                        setFormData(temp);
                        finalForm.set("outside_india", e.target.files[0]);
                        if (passportNameRef.current) {
                          passportNameRef.current.innerText =
                            e.target.files[0].name;
                        }
                      }
                    }}
                    ref={passportRef}
                    className="hidden"
                    id="outside_india"
                    type="file"
                  />
                </>
              )}
              <Select
                isRequired
                label="Are you a person with disabilities (PWD)?"
                classNames={{ ...selectClassNames }}
                placeholder="PWD"
                onChange={(e) => {
                  if (e.target.value == "true") {
                    setPWD(true);
                  } else {
                    setPWD(false);
                  }
                  setFormData((prev) => ({ ...prev, pwd: e.target.value }));
                  finalForm.set("pwd", e.target.value);
                }}
              >
                <SelectItem key="true" value={"true"}>
                  Yes
                </SelectItem>
                <SelectItem key="false" value={"false"}>
                  No
                </SelectItem>
              </Select>

              {pwd && (
                <>
                  <div className="flex justify-start items-center gap-4">
                    <Button className="w-full max-w-[200px] font-bold bg-[#2D78A2] text-[#ECF4F8]">
                      {" "}
                      <label htmlFor="pwd_certificate">
                        Upload certificate
                      </label>
                    </Button>
                    <small ref={fileNameRef}></small>
                  </div>
                  <input
                    accept="application/pdf"
                    onChange={(e) => {
                      if (e.target.files !== null) {
                        let temp = { ...formData };
                        temp.pwd_certificate = e.target.files[0];
                        setFormData(temp);
                        finalForm.set("pwd_certificate", e.target.files[0]);
                        if (fileNameRef.current) {
                          fileNameRef.current.innerText =
                            e.target.files[0].name;
                        }
                      }
                    }}
                    ref={fileRef}
                    className="hidden"
                    id="pwd_certificate"
                    type="file"
                  />
                </>
              )}

              <div className="flex gap-1 px-2">
                <Checkbox onValueChange={(e) => setAgree(e)} />{" "}
                <div>
                  I hereby acknowledge having read and understood all the{" "}
                  <Link
                    underline="always"
                    href="https://drive.google.com/file/d/11AP1L2wP5MwQcJmiy4esbTPs08iAsYUp/view?usp=drive_link"
                    target="_blank"
                  >
                    guidelines
                  </Link>{" "}
                  provided. I accept and agree to adhere strictly to each
                  condition outlined. I take full responsibility for my actions
                  during Paradox and understand that any deviation from these
                  guidelines will result in actions taken by the respective
                  committees. I commit to upholding the standards expected of me
                  as a participant.
                </div>
              </div>
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
              >{`Don't be greedy son. You done registered already 🤠`}</p>
            </div>
          )
        ) : (
          <>
            <p className={`${eastSeaDokdo.className} text-center text-4xl`}>
              {`Before visiting our website, please ensure that you have made the
              payment through the student dashboard. If you've already paid,
              please note that it may take upto 5 business days for the payment to
              be reflected here.`}{" "}
            </p>
          </>
        )
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <p
            className={`${eastSeaDokdo.className} text-center text-4xl`}
          >{`Well well what do we got here, just a noob who didn't register for Paradox'24. Register for the fest and then come back here`}</p>
        </div>
      )}
    </ComponentLoading>
  );
}

export { AccommodationForm };
