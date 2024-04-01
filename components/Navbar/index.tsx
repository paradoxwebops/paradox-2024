"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "@/store";
import { delAuth } from "@/store/actions";

type NavbarLink = {
  name: string;
  href: string;
  target: "_self" | "_target";
};

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showToggle = () => {
    setOpen((s) => !s);
  };
  const maxHeightPx = 98;
  return (
    <div className="w-full" style={{ height: `${maxHeightPx}px` }}>
      <NavBarMenuFullScreen open={open} showToggle={showToggle} />
      <nav
        className="flex justify-between p-6 items-center fixed w-full z-[99]"
        style={{ maxHeight: `${maxHeightPx}px` }}
      >
        <Link href={"/"}>
          <Image src={"/logo.webp"} alt="Logo" width={50} height={50} />
        </Link>
        <button onClick={showToggle}>
          <Menu />
        </button>
        {/* <button
          className="px-5 py-1 bg-neutral-950/20 rounded"
          onClick={showToggle}
        >
          Menu
        </button> */}
      </nav>
    </div>
  );
};

const NavBarMenuFullScreen = ({
  open,
  showToggle,
}: {
  open: boolean;
  showToggle: Function;
}) => {
  const showAnimationDuration = 1;

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className="w-full h-screen fixed bottom-0 top-0 left-0 right-0 z-[100]"
            style={{ backgroundColor: "#D7F1F9" }}
            initial={{ top: "-100%" }}
            animate={{ top: "0" }}
            exit={{ top: "-100%" }}
            transition={{
              duration: showAnimationDuration,
              ease: [0.87, 0, 0.25, 1],
            }}
          >
            <NavBarMenuCloseButton
              mainAnimationDuration={showAnimationDuration}
              showToggle={showToggle}
            />
            <div className="flex flex-col h-full items-start justify-center p-8">
              <Image
                src={"/paradox_logo_text.webp"}
                alt="Paradox"
                className="hidden md:block"
                width={400}
                height={400}
              />
              <NavBarLinks showToggle={showToggle} />
            </div>
            <motion.div
              className="fixed w-[50%] bottom-0 right-[10%]"
              style={{ mixBlendMode: "luminosity" }}
              initial={{ right: "100%" }}
              animate={{ right: "10%" }}
              exit={{ right: "-100%", transition: { delay: 0, duration: 1 } }}
              transition={{
                delay: showAnimationDuration,
                duration: showAnimationDuration * 2,
              }}
            >
              <Image
                src={"/navbar_boat.svg"}
                alt="Navbar boat"
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavBarLinks = ({ showToggle }: { showToggle: any }) => {
  const dispatch = useDispatch();
  const { access_token } = useSelector((state) => state.auth);
  const data: NavbarLink[] = [
    {
      href: "/about",
      name: "ABOUT",
      target: "_self",
    },
    {
      href: "/fest",
      name: "FEST REGISTRATION",
      target: "_self",
    },
    // {
    //   href: "/accommodation",
    //   name: "ACCOMMODATION",
    //   target: "_self",
    // },
    {
      href: "/team",
      name: "TEAM",
      target: "_self",
    },
    {
      href: "/events",
      name: "EVENTS",
      target: "_self",
    },
    {
      href: "/sponsors",
      name: "PAST SPONSORS",
      target: "_self",
    },
    {
      href: "/faq",
      name: "FAQs",
      target: "_self",
    },
    {
      href: "/contact",
      name: "CONTACT US",
      target: "_self",
    },
  ];
  return (
    <>
      {data.map((item) => {
        const { name } = item;
        return (
          <Link
            {...item}
            key={name}
            className="p-3 milestone text-3xl tracking-wide text-[#6D878F]"
            onClick={showToggle}
          >
            {name}
          </Link>
        );
      })}
      {access_token !== "" && (
        <p
          onClick={() => {
            googleLogout();
            dispatch(delAuth());
            showToggle();
          }}
          className="p-3 milestone text-3xl tracking-wide text-[#6D878F] cursor-pointer"
        >
          LOGOUT
        </p>
      )}
    </>
  );
};

const NavBarMenuCloseButton = ({
  mainAnimationDuration,
  showToggle,
}: {
  mainAnimationDuration: number;
  showToggle: any;
}) => {
  const circleScales = [0.5, 1, 1.5];

  return (
    <>
      {circleScales.map((val, ind) => {
        return (
          <motion.div
            initial={{ transform: `scale(0)` }}
            animate={{ transform: `scale(${val})` }}
            exit={{ transform: `scale(0)`, transition: { delay: 0 } }}
            transition={{
              delay: mainAnimationDuration + 0.1 * (ind + 1),
              ease: [0.87, 0, 0.25, 1],
            }}
            className="w-[40vw] h-[40vw] z-[101] fixed top-[-20vw] right-[-20vw] rounded-full"
            style={{
              backgroundColor: "rgba(32, 97, 125, 0.2)",
              transformOrigin: "50% 50% ",
            }}
            key={`${val}_${ind}`}
          />
        );
      })}
      <motion.button
        className="fixed top-4 right-4 z-[104]"
        onClick={showToggle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0 } }}
        transition={{ delay: mainAnimationDuration, ease: [0.87, 0, 0.25, 1] }}
      >
        <X className="w-8 h-8" />
      </motion.button>
    </>
  );
};

export { NavBar };
