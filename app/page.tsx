"use client";
import Image from "next/image";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface CloudProps {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

type ScreenMeasurements = {
  dar: number;
  dpr: number;
  vw: number;
  vh: number;
}

type ScrollValues = {
  px: number;
  percent: number;
}

// Utility functions
const getRadianValue = (deg: number) => ((deg * Math.PI) / 180);
const getCurrentComponent = ({ height, px }: { height: number; px: number }) =>
  px / height;
const calculateScaleConstant = ({ dpr, dar }: ScreenMeasurements) =>
  (dar + 1 / dar) / dpr;
const constantTranslateK = ({
  px,
  dpr,
  dar,
}: ScrollValues & ScreenMeasurements) => (px + dpr * dar) / dpr;
const translateXConstantX = ({ px }: { px: number }) => px / 10;
const translateYConstantY = ({ px }: { px: number }) => px;


// const buildingBottom = ({dpr, dar}:ScreenMeasurements, scale:number, ref:RefObject<HTMLImageElement>) => {
//   // if (0.7 < dar && dar < 1) {
//   // }
  
//   // if (0.4 < dar && dar < 0.7) {
//   //   return `${10 - dar*dpr}vh`
//   // }
  
//   return `${(ref?.current?.naturalHeight ?? 0)*(scale-1)}px`
//   // return 0
// }

const buildingScale = ({dpr, dar}:ScreenMeasurements) => {
  if (0.5 < dar && dar < 1) {
    return 0.6 + (dar*dpr)
  }
  return 1
}

// Constants
const MAX_DELTA_A = getRadianValue(30);
const ISLAND_SCALE_K = 0;
const BIRD_SCALE_K = 0.6;

const Cloud = ({
  url,
  props,
  alt,
  current,
  comp,
}: {
  url: string;
  alt: string;
  props: CloudProps;
  current: { px: number; percent: number };
  comp: number;
}) => {
  const { left, top, bottom, right } = props;
  return (
    <motion.div>
      <motion.img
        transition={{ duration: 0.75, ease: [0.87, 1, 0.13, 1] }}
        initial={{ opacity: 0 }}
        animate={{ opacity: comp > 0.3 ? 1 : 0 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.75, ease: [0.87, 1, 0.13, 1] },
        }}
        className="fixed object-cover bg-cover z-[9]  w-[80%] md:w-[60%] lg:w-[40%]  m-auto"
        style={{
          top: top ?? "auto",
          left: left ?? "auto",
          right: right ?? "auto",
          bottom: bottom ?? "auto",
          transform: `translateX(${translateXConstantX(
            current
          )}px) translateY(${MAX_DELTA_A * current.percent * -400}px)`,
        }}
        src={url}
        alt={alt}
        width={1000}
        height={1000}
      />
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const [current, setCurrent] = useState<ScrollValues>({ px: 0, percent: 0 });
  const [d, setD] = useState<ScreenMeasurements>({ vw: 0, vh: 0, dpr: 1, dar: 16 / 9 });
  const [comp, setComp] = useState(0);
  // const chennaiBlueRef = useRef<HTMLImageElement>(null)
  // const chennaiColorRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (window) {
      setD({
        dpr: window.devicePixelRatio,
        vw: window.innerWidth,
        vh: window.innerHeight,
        dar: window.innerWidth / window.innerHeight,
      });
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (percent) => {
    setCurrent((p) => ({ ...p, percent }));
  });
  useMotionValueEvent(scrollY, "change", (px) => {
    setCurrent((p) => ({ ...p, px }));
    const height = window.innerHeight;
    setComp(getCurrentComponent({ height, px }));
  });

  return (
    <main className="h-full relative">
      {/* FIRST COMP */}
      <div className="h-screen relative">
        <motion.h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center p-8">
          IITM BS Degree Presents
        </motion.h1>
        <p className="text-center flex flex-col pt-12 items-center justify-center animate-bounce">
          Scroll Down <ChevronDown />{" "}
        </p>
        <motion.div
          style={{
            transform: `translateX(-${current.px}px) translateY(${current.percent * 50}%)`,
            // bottom: `${buildingBottom({...d}, buildingScale({...d}), chennaiBlueRef)}`
          }}
          className={`fixed z-[20] w-full bottom-0`}
        >
          <Image
            // ref={chennaiBlueRef}
            src="/chennai_blue.svg"
            alt="Chennai Blue"
            className={`w-full`}
            style={{
              transform: `scale(${buildingScale({...d})})`,
              transformOrigin: '50% 100%'
            }}
            width={2000}
            height={2000}
          />
        </motion.div>
        <motion.div
          style={{
            transform: `translateX(${current.px}px) translateY(${current.percent * 50}%)`,
            // bottom: `${buildingBottom({...d}, buildingScale({...d}), chennaiColorRef)}`
          }}
          className="fixed  z-[20] w-full bottom-0"
        >
          <Image
            src="/chennai_color.svg"
            alt="Chennai Color"
            // ref={chennaiColorRef}
            className="w-full"
            style={{
              transform: `scale(${buildingScale({...d})})`,
              transformOrigin: '50% 100%'
            }}
            width={2000}
            height={2000}
          />
        </motion.div>
      </div>

      {/* SECOND COMP */}
      <motion.div className="h-screen relative">
        <Cloud
          url="/cloud_left.svg"
          alt="Left Cloud"
          props={{
            top: "20%",
            bottom: "auto",
            left: "-20%",
          }}
          comp={comp}
          current={current}
        />
        <Cloud
          url="/cloud_middle.svg"
          alt="Middle Cloud"
          props={{ top: 0, bottom: 0, left: 0, right: 0 }}
          current={current}
          comp={comp}
        />
        <Cloud
          url="/cloud_right.svg"
          alt="Right Cloud"
          props={{
            top: "10%",
            bottom: "auto",
            right: "-20%",
          }}
          current={current}
          comp={comp}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: comp > 0.4 ? 1 : 0 }}
          style={{
            transform: `matrix(1, 0, 0, 1, ${
              MAX_DELTA_A * current.percent * 800
            }, -${current.px / 4 + 300})`,
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
      </motion.div>
      {/* THIRD COMP */}
      <div className="h-screen   relative">
        <motion.div
          //  initial={{ opacity: 0 }}
          //   animate={{ opacity: current.percent > 0.2 ? 1 : 0 }}
          //   style={{bottom:100 - }}
          className="fixed bottom-0 w-full h-[25%] xl:h-[20%] z-[7] bg-[#70cbff]"
        ></motion.div>
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: current.percent > 0.2 ? 1 : 0 }}
          className="fixed bottom-0 w-full h-[3%] z-[7] bg-[#f6e1aa]"
        ></motion.div>
        <motion.div
          className="fixed bottom-0 left-0 w-[50%] md:w-[30%] lg:w-[20%] z-[10]"
          initial={{ left: 0, bottom: 0 }}
          style={{
            transform: `scale(${
              current.percent * calculateScaleConstant(d) + BIRD_SCALE_K
            }) translateX(${current.px}px) translateY(-${
              current.px * (1 / d.dar)
            }px)`,
          }}
        >
          <Image src="/bird.svg" alt="Bird" width={1000} height={1000} />
        </motion.div>
      </div>
      <div className="h-screen relative"></div>
    </main>
  );
}
