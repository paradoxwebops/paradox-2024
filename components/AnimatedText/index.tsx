"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [alt, setAlt] = useState(false);
  useEffect(() => {});
  return (
    <div
      onMouseEnter={() => {
        setMain(false);
      }}
      onMouseLeave={() => {
        setMain(true);
      }}
      className="relative overflow-hidden whitespace-nowrap text-9xl cursor-pointer  border-2 border-black"
      style={{ width }}
    >
      <AnimatePresence mode="wait">
        {!main && (
          <motion.span
            initial={{ left: "-100%", color: "hsl(28, 100%, 50%)" }}
            animate={{ left: "0", color: inColor }}
            exit={{ left: "-100%" }}
            transition={{ duration: 0.21, ease: "linear" }}
            className="text-9xl relative top-0  milestone"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {main && (
          <motion.span
            initial={{ right: "100%" }}
            animate={{ right: "-0px" }}
            exit={{ right: "100%" }}
            transition={{ duration: 0.21, ease: "linear" }}
            className="text-9xl relative top-0  milestone"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
