import { ToastObject } from "@/contexts";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { X } from "lucide-react";

const Toast = ({
  title,
  description = "",
  variant = "default",
}: ToastObject) => {
  return (
    <>
      <Card
        className={`${
          variant === "destructive" ? "bg-red-800" : ""
        }  fixed bottom-2 right-2 max-w-[300px] md:max-w-[400px] z-[100] w-full flex flex-col gap-2`}
      >
        <CardHeader className=" font-bold p-4 pb-0">{title}</CardHeader>
        <CardBody className="px-4">{description} </CardBody>
      </Card>
    </>
  );
};

export { Toast };
