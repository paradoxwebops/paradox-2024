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
    <div className="w-full">

      <div className="flex flex-col-reverse md:block">
        <div className="flex max-md:flex-col relative md:absolute justify-between w-full left-0">
          <Card bgColor="#fff" className="font-semibold max-md:!transform-none md:max-w-[500px] max-md:mb-3" style={{transform: 'translate(10%, 140%)'}}>
            Gajendra aka Gaja, was born and raised in a scenic village of Anaikatti.
          </Card>
          <Card bgColor="#fff" className="font-semibold max-md:!transform-none md:max-w-[500px] max-md:mb-3" style={{transform: 'translate(-10%, 300%)'}}>
            His curiosity to learn about nature made him come to Chennai and join IITM as a student.
          </Card>
        </div>

        <Image 
          src={'/about_gaja.svg'}
          alt="About Gaja"
          height={1000}
          width={1000}
          className="mx-auto mt-12"
        />

      </div>

      <div className="flex max-md:flex-col relative md:absolute justify-between w-full left-0">
        <Card bgColor="#fff" className="font-semibold max-md:!transform-none md:max-w-[500px] max-md:mb-3" style={{transform: 'translate(10%, -340%)'}}>
          Gaja embodies the spirit of Paradox'24, a friendly, calm, extroverted and curious companion on the vibrant journey of college life.
        </Card>
        <Card bgColor="#fff" className="font-semibold max-md:!transform-none md:max-w-[500px] max-md:mb-3" style={{transform: 'translate(-10%, -500%)'}}>
          He's now an integral part of IITM, helping others with his vast experience: not just in academics, but at life too.
        </Card>
      </div>

      <div className="w-full flex justify-center">
        <Card bgColor="#fff" className="text-center max-md:!transform-none md:max-w-[500px] max-md:mb-3" style={{transform: 'translate(0%, -100%)'}}>
          <div className="w-full font-semibold text-[#BB6969]">
            Paradox'24-il Gajaa-ai sandhikkavum
          </div>
          <div className="w-full font-bold">
            Tamil illey ?
          </div>
          <div className="w-full font-bold text-[#BB6969]">
            Meet Gaja at Paradox '24
          </div>
        </Card>
      </div>

      <div className="w-full px-3 md:px-48">
        <div className="grid md:grid-cols-2 gap-6">
          <Card bgColor="#FF8188" className="p-0 flex flex-col justify-between overflow-hidden">
            <div className="p-8">
              <h4 className="text-2xl text-white fond-bold">PARADOX</h4>
              <p>
                <b>"Paradox"</b> is a unique and immersive fest celebrating the pioneering Bachelor of Science (BS) Degree in Data Science.
              </p>
            </div>
            <Image 
              src={'/about1.svg'}
              alt="Paradox image"
              width={1000}
              height={1000}
            />
          </Card>
          <Card bgColor="#68E3BD" className="p-0 flex flex-col justify-between overflow-hidden">

            <div className="p-8">
              <h4 className="text-2xl text-white fond-bold">IS PARADOX FOR YOU ?</h4>
              <p>
                <b>Absolutely!</b> Whether you're a student, a professional, or just someone who loves to explore new things, Paradox welcomes you with open arms.
              </p>
            </div>

            <Image 
              src={'/about2.svg'}
              alt="Paradox image"
              width={1000}
              height={1000}
            />
          </Card>
          <Card bgColor="#809CFF" className="p-0 flex flex-col justify-between overflow-hidden">
            <div className="p-8">
              <h4 className="text-2xl text-white fond-bold">WHY JOIN THE FUN ?</h4>
              <p>
                <b>Unleash your inner genius:</b> From coding challenges to designing robots, put your skills to the test in epic tech competitions.
              </p>
            </div>
            <Image 
              src={'/about3.svg'}
              alt="Paradox image"
              width={1000}
              height={1000}
            />
          </Card>
          <Card bgColor="#D196FF" className="p-0 flex flex-col justify-between overflow-hidden">

            <div className="p-8">
              <h4 className="text-2xl text-white fond-bold">IS PARADOX FOR YOU ?</h4>
              <p>
                Paradox is more than just a fest , it's an experience. Let's Level up your network beyond your DMs!
              </p>
            </div>

            <Image 
              src={'/about4.svg'}
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
