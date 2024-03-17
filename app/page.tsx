
"use client";
import Image from "next/image";
import {
  useScroll,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
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

const calculateSunTranslateX = ({vw, percent}: ScreenMeasurements & ScrollValues) => {
  return (percent * vw) / 4
}

const calculateSunTranslateY = ({dar, percent, px, vh, dpr}: ScreenMeasurements & ScrollValues) => {
  return ((10 / 3) * dar * percent * vh)/(dar >= 1 ? (dpr) : (1/dpr))
}

const calculateIslandScale = ({current, d}: {current: ScrollValues, d:ScreenMeasurements}) => {
  return ((current.percent * calculateScaleConstant(d))/(d.dar >= 1 ? (d.dar-1) : (d.dar))) + ISLAND_SCALE_K
}

const calculateBirdTranslateXPx = ({px, vh}: ScreenMeasurements & ScrollValues) => {
  return px - vh
}

const calculateBirdTranslateYPx = ({px, vh, dar}: ScreenMeasurements & ScrollValues) => {
  return (px - vh) * (dar >= 1 ? (1 / dar) : (dar))
}

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
        className="fixed object-cover bg-cover z-[8]  w-[80%] md:w-[50%] lg:w-[40%]  m-auto"
        style={{
          top: top ?? "auto",
          left: left ?? "auto",
          right: right ?? "auto",
          bottom: bottom ?? "auto",
          transform: `translateX(${translateXConstantX(current)}px) translateY(${getRadianValue(95)*current.percent*100}px)`,
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
  const [comp, setComp] = useState<number>(0);

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

  // useEffect(() => {
  //   if (viewHeight > 0 && viewWidth > 0) {
  //     if (viewHeight < viewWidth) {
  //       setIsPhone(false);
  //     }
  //     console.log(viewHeight / viewWidth);
  //   }
  // }, [viewHeight, viewWidth]);
  useMotionValueEvent(scrollYProgress, "change", (percent) => {
    setCurrent((p) => ({ ...p, percent }));
  });
  useMotionValueEvent(scrollY, "change", (px) => {
    setCurrent((p) => ({ ...p, px }));
    const height = window.innerHeight;
    setComp(getCurrentComponent({ height, px }));
  })
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
            transform: `translateX(-${current.px}px) translateY(${
              current.percent * 150
            }%)`,
          }}
          className={`fixed z-[20] w-full bottom-0`}
        >
          <Image
            src="/chennai_blue.svg"
            alt="Chennai Blue"
            className={`w-full scale-[250%] md:scale-150 lg:scale-100 origin-bottom`}
            width={2000}
            height={2000}
          />
        </motion.div>
        <motion.div
          style={{
            transform: `translateX(${current.px}px) translateY(${
              current.percent * 150
            }%)`,
          }}
          className="fixed  z-[20] w-full bottom-0"
        >
          <Image
            src="/chennai_color.svg"
            alt="Chennai Color"
            className="w-full  scale-[250%] md:scale-150 lg:scale-100 origin-bottom"
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
          animate={{ opacity: 1 }}
          style={{
            transform: `matrix(1, 0, 0, 1, ${calculateSunTranslateX({...current, ...d})}, -${calculateSunTranslateY({...current, ...d})})`,
          }}
          className="fixed left-0 right-0 m-auto w-[40%] sm:w-[40%] lg:w-[25%] object-cover bg-cover z-[7]"
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
          initial={{ marginBottom: '-3%' }}
          animate={{ marginBottom: current.percent > 0.2 ? 0 : `-${(3*(1 - current.percent))}%` }}
          style={{ height: current.px }}
          className="fixed bottom-0 w-full max-h-[25%] xl:max-h-[20%] z-[9] bg-[#70cbff]"
        >
          <motion.div
            initial={{ marginBottom: '-3%' }}
            animate={{ marginBottom: current.percent > 0.2 ? 0 : `-${(3*(1 - current.percent))}%` }}
            className="fixed bottom-0 w-full h-[3%] z-[9] bg-[#f6e1aa]"
          ></motion.div>
        </motion.div>
        <motion.div
          className="fixed -bottom-24 -left-24 w-[50%] md:w-[30%] lg:w-[20%] z-[10]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            transform: `scale(${
              current.percent * calculateScaleConstant(d) + BIRD_SCALE_K
            }) translateX(${calculateBirdTranslateXPx({...current, ...d})}px) translateY(-${calculateBirdTranslateYPx({...current, ...d})}px)`,
          }}
        >
          <Image src="/bird.svg" alt="Bird" width={1000} height={1000} />
        </motion.div>
      </div>
      <div className="h-screen relative">
        <div className="w-[80%] md:w-[40%] h-auto z-[11] relative m-auto" style={{paddingTop: `${(1/d.dar)*10}%`}}>
          <Image 
            src={'/paradox_title.svg'}
            alt="Paradox"
            width={1000}
            height={1000}
          />
        </div>
        <motion.div
          className="fixed bottom-[12%] left-0 right-0 m-auto w-[50%] md:w-[30%] lg:w-[20%] z-[9]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            transform: `scale(${calculateIslandScale({current, d})})`,
            transformOrigin: d.dar >= 1 ? 'bottom left' : 'bottom center',
          }}
        >
          <Image src="/island.svg" alt="Island" width={1000} height={1000} style={{marginLeft: d.dar >= 1 ? '10vw' : 0}} />
        </motion.div>
      </div>
    </main>
  );
}
