"use client";
import { useLottie } from "lottie-react";
import { Loader2 } from "lucide-react";
import { East_Sea_Dokdo } from "next/font/google";
import animation from "./PRELOADER.json";
const east_sea = East_Sea_Dokdo({ weight: ["400"], subsets: ["latin"] });
export default function Loading() {
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="h-screen w-screen fixed inset-0 flex flex-col justify-center items-center bg-[#f6f1ec]  text-black z-[100]">
      <div className="flex gap-2 w-[300px]">{View}</div>
      <p className={`${east_sea.className} text-2xl`}>
        Hold on tight, we are almost there!
      </p>
    </div>
  );
}
