"use client";
import Image from "next/image";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const [currentPos, setCurrentPos] = useState(0);
  const [currentPxl, setCurrentPxl] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentPos(latest);
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCurrentPxl(latest);
  });
  return (
    <main className="h-full relative">
      <div className="h-screen bg-red-100 relative">
        <motion.div
          style={{ transform: `translateX(-${currentPxl}px)` }}
          className="fixed z-[20] w-full scale-[250%] md:scale-150 lg:scale-100 bottom-[10%] md:bottom-[5%] lg:bottom-0  "
        >
          <Image
            src="/chennai_blue.svg"
            alt="Chennai Blue"
            className="w-full scale-[250%] md:scale-150 lg:scale-100 "
            width={2000}
            height={2000}
          />
        </motion.div>
        <motion.div
          style={{ transform: `translateX(${currentPxl}px)` }}
          className="fixed  z-[20] w-full bottom-[10%] md:bottom-[5%] lg:bottom-0  "
        >
          <Image
            src="/chennai_color.svg"
            alt="Chennai Color"
            className="w-full  scale-[250%] md:scale-150 lg:scale-100 "
            width={2000}
            height={2000}
          />
        </motion.div>
      </div>
      {/* FIRST COMP */}
      {/* <motion.div className="h-screen bg-red-100 relative">
        <motion.div
          style={{ right: scrollY }}
          className="fixed lg:bottom-0 scale-[250%] md:scale-150 lg:scale-100 bottom-[10%] md:bottom-[5%]  w-full z-[10]"
        >
          <Image
            src="/chennai_blue.svg"
            width={4000}
            height={4000}
            alt="Chennai blue"
            className=""
          />
        </motion.div>
        <motion.div
          style={{ left: scrollY, right: 0 }}
          className="fixed m-auto scale-[250%] md:scale-150 lg:scale-100 bottom-[10%] md:bottom-[5%] lg:bottom-0 w-full  z-[10]"
        >
          <Image
            src="/chennai_color.svg"
            width={4000}
            height={4000}
            alt="Chennai color"
          />
        </motion.div>
      </motion.div> */}

      {/* SECOND COMP */}

      {/* <motion.div className="h-screen   bg-red-300  relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPos > 0.13 ? 1 : 0 }}
          style={{
            left: currentPos > 0.12 ? currentPos * -2 * 300 : "-100%",
          }}
          className="fixed top-[25%] bottom-0 w-[80%] md:w-[60%] lg:w-[40%] h-[80%] md:h-[60%] lg:h-[40%] object-cover bg-cover z-[9]"
        >
          <Image
            src="cloud_left.svg"
            className=""
            alt="Left Cloud"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPos > 0.13 ? 1 : 0 }}
          style={{
            bottom: currentPos > 0.12 ? currentPos * 2 * 500 : 0,
          }}
          className="fixed bot w-[80%] left-0 right-0 m-auto md:w-[60%] lg:w-[40%] object-cover bg-cover z-[9]"
        >
          <Image
            src="cloud_middle.svg"
            className=""
            alt="Middle Cloud"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPos > 0.13 ? 1 : 0 }}
          style={{
            right: currentPos > 0.12 ? currentPos * -2 * 300 : "-100%",
          }}
          className="fixed top-[25%] bottom-0 w-[80%] md:w-[60%] lg:w-[40%] object-cover bg-cover z-[9]"
        >
          <Image
            src="cloud_right.svg"
            className=""
            alt="Right Cloud"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPos > 0.13 ? 1 : 0 }}
          style={{
            bottom: currentPos > 0.12 ? currentPos * 300 : "-300px",
          }}
          className="fixed -bottom-32 left-0 right-0 m-auto w-[80%] md:w-[60%] lg:w-[25%] object-cover bg-cover z-[9]"
        >
          <Image
            src="sun.svg"
            className=""
            alt="Sun"
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div> */}
      <div className="h-screen  bg-red-500  relative"></div>
      <div className="h-screen  bg-red-700  relative"></div>
      <div className="h-screen  bg-red-900  relative"></div>
    </main>
  );
}
