"use client";
import {
  BlockType,
  CheckboxGroupType,
  ElementType,
  FormType,
  InputType,
  RadioGroupType,
  SelectType,
  allEventType,
} from "@/lib/interfaces/Event";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "@/store";
import { useAxios, useToast } from "@/contexts";

const UnregisterModal = ({
  deleteRegistration,
}: {
  deleteRegistration: () => void;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        variant="bordered"
        className="text-red-500 font-bold border-red-500 hover:bg-red-600 hover:text-white"
        onClick={onOpen}
      >
        Unregister
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to unregister?
              </ModalHeader>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    deleteRegistration();
                    onClose();
                  }}
                >
                  Unregister
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default function RegistrationFormPage({
  edit,
  event_id,
  data,
}: {
  edit?: boolean;
  event_id: number | string;
  data: FormType;
}) {
  const [newState, setNewState] = useState(data);
  const { user } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { axios } = useAxios();

  const validate = () => {
    // Iterate over blocks
    for (let block of newState.blocks) {
      // Iterate over elements in each block
      for (let element of block.elements) {
        if (element.inputType === "checkbox") {
          if (element.element?.required) {
            let temp = element.element as CheckboxGroupType;
            if (temp.values.length <= 0) {
              return {
                validated: false,
                message: element.label + " is not filled",
              };
            }
          }
        } else if (element?.inputType === "email") {
          if (element.element?.required) {
            let temp = element.element as InputType;

            if (temp.value === "") {
              return {
                validated: false,
                message: element.label + " is not filled",
              };
            }
            if (!temp.value.includes("study.iitm.ac.in")) {
              return {
                validated: false,
                message: temp.value + " is not a valid student email",
              };
            }
          }
        } else {
          if (element.element?.required) {
            let temp = element.element as
              | InputType
              | RadioGroupType
              | SelectType;
            if (temp.value === "") {
              return {
                validated: false,
                message: element.label + " is not filled",
              };
            }
          }
        }
      }
    }
    return {
      validated: true,
      message: "All fields are filled",
    };
  };

  const onChange = (value: string, blockId: string, elementId: string) => {
    let temp = newState.blocks.map((b) => {
      if (b.id === blockId) {
        return {
          ...b,
          elements: b.elements.map((e) => {
            if (e.id === elementId) {
              return {
                ...e,
                element: {
                  ...e.element,
                  value: value,
                },
              };
            }
            return e;
          }),
        };
      }
      return b;
    });

    setNewState((prev) => {
      return {
        ...prev,
        blocks: temp,
      };
    });
  };
  const registerForm = async () => {
    const { validated, message } = validate();
    setLoading(true);
    if (!validated) {
      toast({
        title: "Error",
        description: message,
      });
    } else {
      const payload = {
        event_id,
        form: newState,
      };
      axios
        .post("/fest/events/form/submit/", payload)
        .then((res) => {
          if (res.data) {
            console.log(res.data);

            toast({
              title: "Success",
              description: "Form submitted successfully",
            });
            window.location.href = "/events";
          }
        })
        .catch((err) => {
          // toast({
          //   title: "Error",
          //   description: "Form submission failed",
          // });
        })
        .finally(() => setLoading(false));
    }
    setLoading(false);
  };

  const editForm = async () => {
    const { validated, message } = validate();
    setLoading(true);
    if (!validated) {
      toast({
        title: "Error",
        description: message,
      });
    } else {
      const payload = {
        event_id,
        form: newState,
      };
      axios
        .put("/fest/events/form/edit/", payload)
        .then((res) => {
          if (res.data) {
            console.log(res.data);

            toast({
              title: "Success",
              description: res.data.message,
            });
          }
        })
        .catch((err) => {
          // toast({
          //   title: "Error",
          //   description: "Form submission failed",
          // });
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  };

  const deleteRegistration = async () => {
    setLoading(true);
    await axios
      .delete("/fest/events/registered/" + event_id + "/delete/")
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          toast({
            title: "Success",
            description: res.data.message,
          });
          window.location.href = "/profile";
        }
      })
      .catch((err) => {
        // toast({
        //   title: "Error",
        //   description: "Form submission failed",
        // });
        console.log(err);
      })
      .finally(() => setLoading(false));
    setLoading(false);
  };

  const ChangeInputElement = (
    type: string,
    data: ElementType,
    index: number,
    blockId: string,
    elementId: string
  ) => {
    const [newData, setNewData] = useState(data);
    useEffect(() => {
      setNewData(data);
    }, [data]);
    switch (type) {
      case "radio":
        let temp = { ...(newData.element as RadioGroupType) };
        return (
          <div className="flex flex-col gap-2">
            <RadioGroup
              label={`${index}. ${newData.label}`}
              onValueChange={(event) => {
                onChange(event, blockId, elementId);
              }}
              defaultValue={edit ? temp.value : ""}
              isRequired={temp.required}
              className="p-2"
            >
              {temp.inputs.map((option, index) => {
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Radio value={option}>{option}</Radio>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        );

      case "checkbox":
        let temp2 = { ...(newData.element as CheckboxGroupType) };
        return (
          <div className="flex flex-col gap-2">
            <CheckboxGroup
              aria-label={newData.label}
              label={`${index}. ${newData.label}`}
              defaultValue={edit ? temp2.values : []}
              onValueChange={(event) => {
                let temp = newState.blocks.map((b) => {
                  if (b.id === blockId) {
                    return {
                      ...b,
                      elements: b.elements.map((e) => {
                        if (e.id === elementId) {
                          return {
                            ...e,
                            element: {
                              ...e.element,
                              values: event,
                            },
                          };
                        }
                        return e;
                      }),
                    };
                  }
                  return b;
                });

                setNewState((prev) => {
                  return {
                    ...prev,
                    blocks: temp,
                  };
                });
              }}
              isRequired={temp2.required}
              className="p-2"
            >
              {temp2.inputs.map((option, index) => {
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox value={option}>{option}</Checkbox>
                  </div>
                );
              })}
            </CheckboxGroup>
          </div>
        );

      case "select":
        let temp3 = { ...(newData.element as SelectType) };
        return (
          <div className="flex flex-col gap-2 p-2">
            <p className="text-[#71717a]">
              {" "}
              {`${index}.`} {newData.label}{" "}
              {temp3.required && <span className="text-red-500">*</span>}
            </p>
            <Select
              aria-label={newData.label}
              placeholder="Select an option"
              onChange={(event) => {
                onChange(
                  temp3.inputs[parseInt(event.target.value)],
                  blockId,
                  elementId
                );
              }}
              required={temp3.required}
            >
              <SelectSection data-lenis-prevent>
                {temp3.inputs.map((item, index) => {
                  return (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectSection>
            </Select>
            <p>Selected Value : {temp3.value}</p>
          </div>
        );

      default:
        const inputData = { ...(newData.element as InputType) };
        return (
          <div className="flex flex-col gap-2 p-2">
            <p className="text-[#71717a]">
              {" "}
              {`${index}.`} {newData.label}{" "}
              {inputData.required && <span className="text-red-500">*</span>}
            </p>
            <Input
              aria-label={newData.label}
              placeholder="Enter value"
              onChange={(event) => {
                onChange(event.target.value, blockId, elementId);
              }}
              type={newData.inputType}
              defaultValue={edit ? inputData.value : ""}
              isRequired={inputData.required}
              max={inputData.max}
              min={inputData.min}
              maxLength={inputData.maxLength}
              minLength={inputData.minLength}
            />
          </div>
        );
    }
  };

  return (
    <div className=" md:p-6 lg:p-8 xl:p-12 flex flex-col gap-4 justify-center items-center w-full">
      <div className="w-full max-w-[1000px] justify-between flex">
        <h3 className="text-xl font-bold">
          {" "}
          {edit && "Edit"} Registration Form
        </h3>
        {edit && <UnregisterModal deleteRegistration={deleteRegistration} />}
      </div>
      <Card className="w-full max-w-[1000px]">
        {/* {newState.bg_img?.length > 0 ? (
          <div className="relative">
            <Image
              className="w-full h-[200px] bg-slate-700 rounded"
              src=""
              alt="bg image"
              width={2000}
              height={2000}
            />
            <div className="absolute top-2 right-2">
              <Button>Reset</Button>
            </div>
          </div>
        ) : (
          <div className="h-[200px] bg-slate-700 rounded w-full flex justify-center items-center"></div>
        )} */}
        <CardHeader className="flex flex-col gap-2 justify-start items-start">
          <h3 className="pt-4">{newState.name} </h3>
          <small>{newState.desc}</small>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-16">
            {newState.blocks.map((block, index) => {
              return (
                <div key={index} className="flex flex-col gap-8">
                  <p className="pl-1 font-bold">{block.title}</p>
                  <div className="flex flex-col gap-4">
                    {block.elements.map((element, index) => {
                      if (element.element) {
                        return (
                          <div key={index}>
                            {ChangeInputElement(
                              element.inputType,
                              element,
                              index + 1,
                              block.id,
                              element.id
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
            <Button
              variant="solid"
              className="bg-green-600"
              onClick={() => {
                let valid = validate();

                if (valid.validated) {
                  if (edit) {
                    editForm();
                  } else registerForm();
                } else {
                  return toast({
                    title: "Fill all required fields",
                    description: valid.message,
                    variant: "destructive",
                  });
                }
              }}
            >
              Register
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
