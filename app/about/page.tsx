"use client"
import { Card } from "@/components";
// import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from "react";

const cardsData = [
  [
    {
      id: 1,
      heading: 'PARADOX',
      shortText: () => (
        <>
        <p>
          <b>Paradox</b> is a unique and immersive fest celebrating the pioneering Bachelor of Science (BS) Degree in Data Science and Electronic science offered by IIT Madras
        </p>
        </>
      ),
      longText: () => (
        <>
        <p>
          <b>Paradox</b> is a unique and immersive fest celebrating the pioneering Bachelor of Science (BS) Degree in Data Science and Applications and Electronics Science offered by IIT Madras . This annual on-campus gathering embodies the very essence of its name - a program that bridges the gap between the flexibility of online learning and the richness of on-campus interactions.
        </p>
        <p>
          Paradox 2024 is the ultimate Techno-Cultural-sports fest, brought to you by the students of IIT Madras BS Degree Program . It&apos;s a celebration of innovation, art, and culture, where you can unleash your potential, ignite your passion, and explore the diversity of India.
        </p>
        </>
      ),
      imageUrl: '/about1.svg',
      imageAlt: 'Paradox 1',
      bg: '#FF8188',
    },
    {
      id: 3,
      heading: 'WHY JOIN THE FUN ?',
      shortText: () => (
        <>
        <p>
          <b>Unleash your inner genius:</b> From coding challenges to designing robots, put your skills to the test in epic tech competitions.
        </p>
        </>
      ),
      longText: () => (
        <>
        <p>
          <b>Unleash your inner genius:</b> From coding challenges to designing robots, put your skills to the test in epic tech competitions.
        </p>
        <p>
          <b>Be dazzled by talent:</b> Witness and participate in mesmerizing dance performances, soulful music, and captivating plays that will leave you speechless.
        </p>
        <p>
          <b>Learn from the best:</b> Industry experts, renowned artists, IITM professors and thought leaders will share their knowledge and ignite your imagination in inspiring workshops and talks.
        </p>
        <p>
          <b>Explore the future:</b> See mind-blowing creations at interactive installations and exhibitions showcasing the fascinating blend of technology and art.
        </p>
        <p>
          <b>Connect with amazing people:</b> Make new friends from all over India, celebrate different cultures, and create memories that will last a lifetime.
        </p>
        </>
      ),
      imageUrl: '/about3.svg',
      imageAlt: 'Paradox 3',
      bg: '#809CFF',
    },
  ],
  [
    {
      id: 2,
      heading: 'IS PARADOX FOR YOU ?',
      shortText: () => (
        <>
        <p>
          <b>Absolutely!</b> Whether you&apos;re a student, a professional, or just someone who loves to explore new things, Paradox welcomes you with open arms.
        </p>
        </>
      ),
      longText: () => (
        <>
        <p>
          <b>Absolutely!</b> Whether you&apos;re a student, a professional, or just someone who loves to explore new things, Paradox welcomes you with open arms. Bring your passion, your curiosity, and your willingness to be amazed.
        </p>
        <p>
          From May 30<sup>th</sup> to 03<sup>rd</sup> June, 2024, Paradox will offer you a range of exciting events, workshops, competitions and shows, covering various domains of technology, science, literature, music, dance, drama, and more. You will get a chance to compete with the best minds, learn from the experts, network with peers, and have a blast.
        </p>
        </>
      ),
      imageUrl: '/about2.svg',
      imageAlt: 'Paradox 2',
      bg: '#68E3BD',
    },
    {
      id: 4,
      heading: '30th MAY - 03rd JUNE',
      shortText: () => (
        <>
        <p>
          Paradox is more than just a fest , it&apos;s an experience. Let&apos;s Level up your network beyond your DMs!
        </p>
        </>
      ),
      longText: () => (
        <>
        <p>
          Paradox is more than just a fest , it&apos;s an experience. Let&apos;s Level up your network beyond your DMs! Meet fellow tech enthusiasts, innovators, and inspiring minds in real life. Join us at Paradox 2024, and make Paradox 2024 the grandest, most unforgettable edition yet!
        </p>
        </>
      ),
      imageUrl: '/about4.svg',
      imageAlt: 'Paradox 4',
      bg: '#D196FF',
    },
  ],
]

const hideComponent = (hov:number, cur:number) => {
  return (hov === 1 && cur === 3) || (hov === 3 && cur === 1) || (hov === 2 && cur === 4) || (hov === 4 && cur === 2)
}

export default function AboutPage() {
  const text = "PROFILE";
  const textArr = text.split("");
  const [hoverInd, sethoverInd] = useState<number>(-1)
  
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4 relative text-xs lg:text-base">
          <Image
            src={"/about_gaja.png"}
            alt="About Gaja"
            height={1000}
            width={1000}
            className="mx-auto md:w-2/3 xl:w-1/2"
          />
          <Card
            bgColor="#fff"
            className="font-semibold md:max-w-[300px] md:absolute top-24 left-0 xl:left-14 "
            // style={{ transform: "translate(10%, 140%)" }}
          >
            Gajendra aka Gaja, was born and raised in a scenic village of
            Anaikatti.
          </Card>
          <Card
            bgColor="#fff"
            className="font-semibold md:absolute top-1/3 right-0 xl:right-14  md:max-w-[300px]"
            // style={{ transform: "translate(-10%, 300%)" }}
          >
            {`His curiosity to learn about nature made him come to Chennai and
            join IITM as a student.`}
          </Card>
          <Card
            bgColor="#fff"
            className="font-semibold right-0 xl:right-16 bottom-10 md:max-w-[350px] md:absolute"
            // style={{ transform: "translate(10%, -340%)" }}
          >
            {`Gaja embodies the spirit of Paradox'24, a friendly, calm,
            extroverted and curious companion on the vibrant journey of college
            life.`}
          </Card>
          <Card
            bgColor="#fff"
            className="font-semibold md:absolute left-0 xl:left-20 bottom-10 md:max-w-[350px]"
            // style={{ transform: "translate(-10%, -500%)" }}
          >
            {`He's now an integral part of IITM, helping others with his vast
            experience: not just in academics, but at life too.`}
          </Card>
        </div>

        <div className="w-full flex justify-center text-xs md:text-sm lg:text-base ">
          <Card
            bgColor="#fff"
            className="text-center md:max-w-[400px]"
            // style={{ transform: "translate(0%, -100%)" }}
          >
            <div className="w-full font-semibold text-[#BB6969]">
              {`Paradox'24-il Gajaa-ai sandhikkavum`}
            </div>
            <div className="w-full font-bold">Tamil theriyadha ?</div>
            <div className="w-full font-bold text-[#BB6969]">
              {`Meet Gaja at Paradox '24`}
            </div>
          </Card>
        </div>

        <div className="w-full md:px-20 lg:px-40 xl:px-[20rem]">
          <div className="grid md:grid-cols-2 gap-6">
            {cardsData.map((item, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  {item.map(({heading, shortText, longText, imageUrl, imageAlt, bg, id}, ind) => {
                    return (
                      <AnimatePresence mode="wait" key={`${ind}_${id}`}>
                        {<motion.div 
                          style={{backgroundColor: bg,}} 
                          animate={{height: (!hideComponent(hoverInd, id) ? '100%' : '200px')}}
                          transition={{ type: "linear", duration: .3}}
                          className="p-0 flex flex-col justify-between overflow-hidden rounded-2xl w-full mb-6"
                          key={ind}
                          onHoverStart={() => sethoverInd(id)}
                          onHoverEnd={() => sethoverInd(-1)}
                        >
                          <div className="p-8">
                            <h4 className="text-2xl text-white fond-bold">{heading}</h4>
                            {/* {longText()} */}
                            <motion.div 
                              className="grid gap-6"
                              // initial={{height: 'auto'}}
                              // animate={{height: '100%'}}
                            >
                              {((id === (hoverInd))) ? longText() : shortText()}
                            </motion.div>
                          </div>
                          {!hideComponent(hoverInd, id) && (
                            <motion.img
                              src={imageUrl}
                              alt={imageAlt}
                              width={1000}
                              height={1000}
                              initial={{opacity: 0,}}
                              animate={{opacity: 1}}
                              exit={{opacity: 0}}
                            />
                          )}
                        </motion.div>}
                      </AnimatePresence>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
