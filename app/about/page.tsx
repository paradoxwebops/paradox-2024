import { Card } from "@/components";
// import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function AboutPage() {
  const text = "PROFILE";
  const textArr = text.split("");
  return (
    // <main className="flex justify-center items-center h-screen w-screen">
    //   <h4 className="flex">
    //     {textArr.map((e, index) => {
    //       return (
    //         <AnimatedText
    //           key={index}
    //           inColor="hsl(40, 100%, 50%)"
    //           outColor="#9A2A2A"
    //           text={e}
    //         />
    //       );
    //     })}
    //   </h4>
    // </main>
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4 relative text-xs lg:text-base">
          <Image
            src={"/about_gaja.svg"}
            alt="About Gaja"
            height={1000}
            width={1000}
            className="mx-auto mt-12 md:w-2/3 xl:w-1/2"
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
            <div className="w-full font-bold">Tamil illey ?</div>
            <div className="w-full font-bold text-[#BB6969]">
              {`Meet Gaja at Paradox '24`}
            </div>
          </Card>
        </div>

        <div className="w-full md:px-20 lg:px-40 xl:px-48">
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              bgColor="#FF8188"
              className="p-0 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-8">
                <h4 className="text-2xl text-white fond-bold">PARADOX</h4>
                <p>
                  <b>{`"Paradox"`}</b> is a unique and immersive fest
                  celebrating the pioneering Bachelor of Science (BS) Degree in
                  Data Science.
                </p>
              </div>
              <Image
                src={"/about1.svg"}
                alt="Paradox image"
                width={1000}
                height={1000}
              />
            </Card>
            <Card
              bgColor="#68E3BD"
              className="p-0 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-8">
                <h4 className="text-2xl text-white fond-bold">
                  IS PARADOX FOR YOU ?
                </h4>
                <p>
                  <b>Absolutely!</b>{" "}
                  {`Whether you're a student, a professional,
                  or just someone who loves to explore new things, Paradox
                  welcomes you with open arms.`}
                </p>
              </div>

              <Image
                src={"/about2.svg"}
                alt="Paradox image"
                width={1000}
                height={1000}
              />
            </Card>
            <Card
              bgColor="#809CFF"
              className="p-0 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-8">
                <h4 className="text-2xl text-white fond-bold">
                  WHY JOIN THE FUN ?
                </h4>
                <p>
                  <b>Unleash your inner genius:</b> From coding challenges to
                  designing robots, put your skills to the test in epic tech
                  competitions.
                </p>
              </div>
              <Image
                src={"/about3.svg"}
                alt="Paradox image"
                width={1000}
                height={1000}
              />
            </Card>
            <Card
              bgColor="#D196FF"
              className="p-0 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-8">
                <h4 className="text-2xl text-white fond-bold">
                  IS PARADOX FOR YOU ?
                </h4>
                <p>
                  {`Paradox is more than just a fest , it's an experience. Let's
                  Level up your network beyond your DMs!`}
                </p>
              </div>

              <Image
                src={"/about4.svg"}
                alt="Paradox image"
                width={1000}
                height={1000}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
