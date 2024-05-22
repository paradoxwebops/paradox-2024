"use client";

import { Megaphone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, delay } from "framer-motion";
import { useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "@/store";
import { delAuth } from "@/store/actions";
import { rgba } from "@/lib/utils";
import { Card } from "../Card";
import moment from "moment";
import { getAnnouncements } from "@/lib/methods";
import { AnnouncementData } from "@/lib/types";
import { useAxios, useNavbar } from "@/contexts";

type NavbarLink = {
  name: string;
  href: string;
  target: "_self" | "_target";
  onClick?: Function
};

type ToggleableProps = {
  open: boolean;
  showToggle: () => void;
}

const NavbarAnnouncements = ({open, showToggle}:ToggleableProps) => {

  const [data, setData] = useState<AnnouncementData[]>([])
  const {axios} = useAxios()

  const showAnimationDuration = 1

  useEffect(() => {
    getAnnouncements(axios)
    .then((res) => {
      setData((s) => [...res.data])
    })
  }, [])

  return (
    <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className="w-full h-screen lg:max-w-[400px] lg:max-h-[500px] fixed top-0 right-0 lg:right-[50px] lg:top-[90px] z-[100] lg:rounded-2xl p-2 flex flex-col justify-evenly max-lg:!bg-[#eeeeee]"
            style={{ backgroundColor: rgba('#aaaaaa', .45), transformOrigin: 'top right' }}
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1)' }}
            exit={{ transform: 'scale(0)' }}
          >
            <div className="flex items-center justify-between px-6 py-3">
              <h4 className={`milestone text-[#15253E] tracking-wide`}>Announcement</h4>
              <button onClick={showToggle}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <Card bgColor={rgba('#031248', 0.5)} className="h-[600px] lg:h-[500px] overflow-y-scroll grid gap-4">
              {data.map(({title, id, body, created_by, created_at}) => {
                return (
                  <Card bgColor={rgba('#000000', 0.35)} key={id} className="text-white w-full h-[fit-content]">
                    <h6 className="tracking-wide">{title}</h6>
                    <p className="my-3 whitespace-pre-line">{body}</p>
                    <div className="flex items-center justify-between">
                      <span className="italic">~ {created_by}</span>
                      <span className="bg-[#3E5DAB] px-4 py-2 rounded-2xl">{moment(created_at).format('DD MMMM YYYY')}</span>
                    </div>
                  </Card>
                )
              })}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

const NavBar = () => {
  const [openAnnouncements, setOpenAnnouncements] = useState<boolean>(false)
  const {navbarShow, setNavbarShow} = useNavbar()

  const showToggle = () => {
    setNavbarShow((s) => !s);
  };

  const announcementToggle = () => {
    setOpenAnnouncements((s) => !s)
  }

  const maxHeightPx = 98;
  return (
    <div className="w-full" style={{ height: `${maxHeightPx}px` }}>
      <NavBarMenuFullScreen open={navbarShow} showToggle={showToggle} />
      <NavbarAnnouncements open={openAnnouncements} showToggle={announcementToggle} />
      <nav
        className="flex justify-between p-6 items-center fixed w-full z-[99]"
        style={{ maxHeight: `${maxHeightPx}px` }}
      >
        <Link href={"/"}>
          <Image
            priority
            src={"/logo.webp"}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex items-center justify-between">
          <button className="mr-3 lg:mr-6 flex bg-[#AAD4D4] px-5 py-3 rounded-2xl" onClick={announcementToggle}>
            <Megaphone />
            <div className="w-[10px] h-[10px] rounded-full bg-[#fa2417] ml-[-7px]"></div>
          </button>          
          <button className="flex text-[#4b2009] items-center justify-between bg-[#F1D4E2] px-5 py-3 rounded-2xl" onClick={showToggle}>
            MENU <Menu className="ml-3" />
          </button>
        </div>
      </nav>
    </div>
  );
};

const NavBarMenuFullScreen = ({
  open,
  showToggle,
}: ToggleableProps) => {
  const showAnimationDuration = 1;

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className="w-full h-screen overflow-y-auto fixed bottom-0 top-0 left-0 right-0 z-[100]"
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
            <div className="h-full items-start justify-center p-8">
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
            <motion.div 
              className="fixed bottom-0 right-0 z-[100]" 
              style={{transform: 'rotate(-90deg)', transformOrigin: 'top'}}
              initial={{ bottom: -500 }}
              animate={{ bottom: 0, transition: {delay: 1}}}
              exit={{ bottom: -500 }}
            >
              <Image
                src={"/paradox_title.webp"}
                alt="Paradox"
                className="hidden md:block"
                width={200}
                height={200}
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

  const beforeData:NavbarLink[] = []

  const afterData:NavbarLink[] = []

  if (access_token !== "") {

    afterData.push({
      href: "/",
      name: "LOGOUT",
      target: "_self",
      onClick: () => {
        googleLogout();
        dispatch(delAuth());
        window.localStorage.clear();
        showToggle();
      }
    })

    beforeData.push({
      href: "/profile",
      name: "PROFILE",
      target: "_self",
    })

  }

  const data: NavbarLink[] = [
    ...beforeData,
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
    {
      href: "/accommodation",
      name: "ACCOMMODATION",
      target: "_self",
    },
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
      name: "SPONSORS",
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
    {
      href: "/schedule",
      name: "SCHEDULE",
      target: "_self",
    },
    ...afterData
  ];
  return (
    <div data-lenis-prevent className="">
      {data.map((item) => {
        const { name } = item;

        const callback = () => {
          if (item.onClick) {
            item.onClick()
          }
          showToggle()
        }

        return (
          <div
            className="p-3 milestone text-3xl tracking-wide text-[#6D878F] "
            key={name}
          >
            <Link
              {...item}
              onClick={callback}
            >
              {name}
            </Link>
          </div>
        );
      })}
    </div>
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
