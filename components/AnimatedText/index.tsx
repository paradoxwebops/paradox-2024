"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function AnimatedText({
  text,
  width,
  inColor,
  outColor,
}: {
  text: string;
  width?: string;
  inColor: string;
  outColor: string;
}) {
  const [main, setMain] = useState(true);
  const [w, setW] = useState<string>("initial");
  const spanWidth = useRef<HTMLElement>(null);
  useEffect(() => {
    if (spanWidth) {
      setW(spanWidth?.current?.offsetWidth + "px");
    }
  }, []);
  return (
    <div
      onMouseEnter={() => {
        setMain(false);
      }}
      onMouseLeave={() => {
        setMain(true);
      }}
      className="relative text-4xl md:text-8xl lg:text-9xl overflow-hidden milestone  border-black cursor-pointer"
      style={{ width: w }}
    >
      {/* <AnimatePresence mode="wait">
        {!main && (
          <motion.span
            ref={spanWidth}
            initial={{ left: "-100%", color: "hsl(28, 100%, 50%)" }}
            animate={{ left: "0", color: inColor }}
            exit={{ left: "-100%" }}
            transition={{ duration: 0.21, ease: [0.87, 0, 0.15, 1] }}
            className=" relative top-0 overflow-hidden"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence> */}
      <AnimatePresence mode="wait">
        {main && (
          <motion.span
            initial={{ right: "100%" }}
            animate={{ right: "0px" }}
            exit={{ right: "100%" }}
            transition={{ duration: 0.21, ease: [0.87, 0, 0.15, 1] }}
            className="relative top-0 right-0"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
