"use client";
import Image from "next/image";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Utility functions
const getRadianValue = (deg:number) => (deg*Math.PI/180)
const calculateScaleConstant = ({dpr, dar}:{dpr:number, dar:number}) => ((dar+(1/dar))/(dpr))
const constantTranslateK = ({px, dpr, dar}:{px:number, dpr:number, dar:number}) => (px + (dpr*dar*10))
const translateXConstantX = ({px}:{px:number}) => (px)
const translateYConstantY = ({px}:{px:number}) => (px)

// Constants
const MAX_DELTA_A = getRadianValue(10)
const ISLAND_SCALE_K = 0
const BIRD_SCALE_K = 0.8

interface CloudProps {
  top?:number|string,
  left?:number|string,
  right?:number|string,
  bottom?:number|string,
  scale:number|string,
}
const Cloud = ({url, props, alt, current }:{url:string, alt:string, props:CloudProps, current:{px:number, percent:number}}) => {
  const {left, top, bottom, right,scale} = props
  return (
    <motion.div
      transition={{ duration: 0.75, ease: [0.87, 1, 0.13, 1] }}
      initial={{opacity:0}}
      animate={{opacity: current.percent > .13 ? 1 : 0 }}
      exit={{opacity:0, transition:{duration:0.75, ease:[0.87, 1,.13, 1]}}}
      className="fixed object-cover bg-cover z-[9]  w-[80%] md:w-[60%] lg:w-[40%] h-[80%] md:h-[60%] lg:h-[40%] m-auto"
      style={{top:top ?? "auto", left:left ?? "auto",right:right ?? "auto", bottom:bottom ?? "auto", transform: `scale(${scale})` }}
    >
      <Image
        src={url}
        alt={alt}
        width={1000}
        height={1000}
      />
    </motion.div>
  )
}
export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const [current, setCurrent] = useState({px: 0, percent: 0})
  const [d, setD] = useState({vw: 0, vh: 0, dpr: 1, dar: (16/9)})
  
  useEffect(() => {
    if (window) {
      setD({
        dpr: window.devicePixelRatio,
        vw: window.innerWidth,
        vh: window.innerHeight,
        dar: window.innerWidth / window.innerHeight
      })
    }
  }, []);
  
  // useEffect(() => {
  //   if (viewHeight > 0 && viewWidth > 0) {
  //     if (viewHeight < viewWidth) {
  //       setIsPhone(false);
  //     }
  //     console.log(viewHeight / viewWidth);
  //   }
  // }, [viewHeight, viewWidth]);
  useMotionValueEvent(scrollYProgress, "change", (percent) => {
    setCurrent(p => ({...p, percent}));
  });
  useMotionValueEvent(scrollY, "change", (px) => {
    setCurrent(p => ({...p, px}));
  })
  return (
    <main className="h-full relative">
      {/* FIRST COMP */}
      <div className="h-screen bg-red-100 relative">
        <motion.h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center p-8">
          IITM BS Degree Presents
        </motion.h1>
        <p className="text-center flex flex-col pt-12 items-center justify-center animate-bounce">
          Scroll Down <ChevronDown />{" "}
        </p>
        <motion.div
          style={{
            transform: `translateX(-${current.px}px) translateY(${
              current.percent * 50
            }%)`,
            // bottom: `${isPhone ? (viewHeight / viewWidth) * 3 : 0}%`,
          }}
          className={`fixed z-[20] w-full`}
        >
          <Image
            src="/chennai_blue.svg"
            alt="Chennai Blue"
            style={{
              // scale: `${isPhone ? (viewHeight / viewWidth) * 100 : 100}%`,
            }}
            className={`w-full`}
            width={2000}
            height={2000}
          />
        </motion.div>
        <motion.div
          style={{
            transform: `translateX(${current.px}px) translateY(${
              current.percent * 50
            }%)`,
            // bottom: `${isPhone ? (viewHeight / viewWidth) * 3 : 0}%`,
          }}
          className="fixed  z-[20] w-full"
        >
          <Image
            src="/chennai_color.svg"
            alt="Chennai Color"
            className="w-full"
            style={{
              // scale: `${isPhone ? (viewHeight / viewWidth) * 100 : 100}%`,
            }}
            width={2000}
            height={2000}
          />
        </motion.div>
      </div>

      {/* SECOND COMP */}
      <motion.div className="h-screen   bg-red-300  relative">
        <Cloud url="/cloud_left.svg" alt="Left Cloud" props={{scale:1, top:0, bottom:0, left:"-20%"}} current={current} />
        <Cloud url="/cloud_middle.svg" alt="Middle Cloud" props={{scale:1, top:0, bottom:0, left:0, right:0}} current={current} />
        <Cloud url="/cloud_right.svg" alt="Right Cloud" props={{scale:1, top:0, bottom:0, right:"-20%"}} current={current} />
      </motion.div>
      {/* <motion.div className="h-screen   bg-red-300  relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPos > 0.13 ? 1 : 0 }}
          exit={{ opacity: 0 }}
          style={{
            left: currentPos > 0.12 ? currentPos * -2 * 300 : "-100%",
            // width: `${(1 / (viewHeight / viewWidth)) * 100}%`,
          }}
          transition={{ duration: 0.75, ease: [0.87, 1, 0.13, 1] }}
          className="fixed top-[25%] bottom-0 w-[80%] md:w-[60%] lg:w-[40%] h-[80%] md:h-[60%] lg:h-[40%] object-cover bg-cover z-[9]"
        >
          <Image
            src="cloud_left.svg"
            alt="Left Cloud"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentPos > 0.13 ? 1 : 0 }}
          style={{
            bottom: currentPos > 0.12 ? currentPos * 2 * 400 : 0,
            // width: `${(1 / (viewHeight / viewWidth)) * 100}%`,
          }}
          className="fixed w-[80%] left-0 right-0 m-auto ml-[20%] md:w-[60%] lg:w-[40%] object-cover bg-cover z-[9]"
        >
          <Image
            src="cloud_middle.svg"
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
            // width: `${(1 / (viewHeight / viewWidth)) * 100}%`,
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
          animate={{ opacity: currentPos > 0.15 ? 1 : 0 }}
          style={{
            transform: `matrix(${currentPos + 0.75}, 0,0,${
              currentPos + 0.75
            }, ${currentPos * 100}, -${
              currentPxl - d.vh + (200 + (1/d.dar) * 100)
            })`,
          }}
          className="fixed left-0 right-0 m-auto w-[80%] sm:w-[40%] lg:w-[25%] object-cover bg-cover z-[7]"
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

      <div className="h-screen  bg-red-500  relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: current.percent > 0.2 ? 1 : 0 }}
          className="fixed bottom-0 w-screen h-[25%] xl:h-[20%] z-[7] bg-[#70cbff]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: current.percent > 0.2 ? 1 : 0 }}
          className="fixed bottom-0 w-screen h-[3%] z-[7] bg-[#f6e1aa]"
        ></motion.div>
      </div>
      <div className="h-screen  bg-red-700  relative"></div>
      <div className="h-screen  bg-red-900  relative"></div>
    </main>
  );
}
