"use client";
import React from "react";
import AnimationData from "@/app/PRELOADER.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const LoaderAnimation = () => {
  return (
    <Lottie
      loop={true}
      autoplay={true}
      animationData={AnimationData}
      height={400}
      width={400}
    />
  );
};

export default LoaderAnimation;
