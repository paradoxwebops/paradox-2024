"use client";

import { Card } from "@/components";
import {
  GenAIInstructorCard,
  GenAIMentorCard,
  GenAIPersonCardProps,
  GenAIPrizeCard,
  GenAIPrizeCardProps,
  GenAIRoundCard,
  GenAIRoundCardProps,
} from "@/components/EventCard/Flagship";
import { rgba } from "@/lib/utils";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { Calendar, MapPin, MessageCircleCode, Users2 } from "lucide-react";
import { Inter, Zen_Dots } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const zen_font = Zen_Dots({ weight: ["400"], subsets: ["latin"] });

const inter_font = Inter({ weight: ["300", "400", "500"], subsets: ["latin"] });

type FAQProps = {
  question: string;
  answer: string;
};

export default function FlagshipEventGenAIPage() {
  const prizes_data: GenAIPrizeCardProps[] = [
    {
      main: false,
      prize: "2nd",
      amount: "15,000",
      color: "silver",
    },
    {
      main: true,
      prize: "1st",
      amount: "25,000",
      color: "gold",
    },
    {
      main: false,
      prize: "3rd",
      amount: "10,000",
      color: "bronze",
    },
  ];

  const rounds_data: GenAIRoundCardProps[] = [
    {
      round: 1,
      title: "Primary round of submission and evaluation on metrics",
    },
    {
      round: 2,
      title: "Presentation of top 5 designs",
    },
  ];

  const mentors_data: GenAIPersonCardProps[] = [
    {
      name: "Thejesh G N",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!",
    },
    {
      name: "Livin Nector",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!",
    },
  ];

  const instructors_data: GenAIPersonCardProps[] = [
    {
      name: "Rishav Thakker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!",
    },
    {
      name: "Piyush Wairale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!",
    },
    {
      name: "Jayakrishnan M",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!",
    },
    {
      name: "Subendu Gorai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!",
    },
  ];

  const faqs_data: FAQProps[] = [
    {
      question: "Question1",
      answer: "Answer1",
    },
  ];

  return (
    <Card bgColor="#12001D" className={`overflow-hidden text-white`}>
      {/* HEADER */}
      <div className="flex w-full justify-between items-start">
        <div
          style={{ backgroundColor: rgba("#000000", 0.25) }}
          className="rounded-full border-2 ml-[-100px] mt-[-100px] w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 border-white flex justify-center items-center"
        >
          <div
            style={{ backgroundColor: rgba("#000000", 0.25) }}
            className="rounded-full border-2 z-[10] h-24 w-24 md:h-28 md:w-28 lg:w-32 lg:h-32 border-white"
          />
        </div>
        <Image
          src={"/paradox_logo_text.webp"}
          alt="Paradox logo"
          width={200}
          height={150}
          className="w-16 sm:w-20 md:w-32 lg:w-48 z-[2] relative"
        />
      </div>

      {/* IMAGE AND TITLE */}
      <div className="mb-6">
        <Image
          src={"/genai_bot.svg"}
          width={200}
          height={200}
          alt=""
          className="mx-auto w-full max-w-[300px]"
        />

        <div className={`${zen_font.className} text-white text-center`}>
          <h1 className="text-4xl lg:text-8xl tracking-wide">
            <span className="text-[#5EE0CA]">GEN AI</span>
            <br />
            <span className="text-[#B493C8]">HACKATHON</span>
          </h1>
        </div>
      </div>

      {/* DATE */}
      <Card
        bgColor={rgba("#ffffff", 0.1)}
        className="flex items-center justify-center text-center w-full max-w-[500px] my-12 mx-auto font-bold tracking-wide"
      >
        <Calendar className="mr-3" /> 31<sup>st</sup> May 2024 - 01<sup>st</sup>{" "}
        June 2024
      </Card>

      <div className="flex flex-col max-w-[700px] mx-auto mb-12 gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <Card
            bgColor={rgba("#ffffff", 0.1)}
            className="flex flex-col justify-between p-6"
          >
            <div className="text-[#CFB8DF]">
              <div>
                Start - 10<sup>th</sup> May 2024
              </div>
              <div>
                End - 29<sup>th</sup> May 2024
              </div>
            </div>
            <div className="flex items-center mt-3">
              <span>
                <Calendar className="mr-3" />
              </span>
              <h6>Registration Dates</h6>
            </div>
          </Card>
          <Card
            bgColor={rgba("#ffffff", 0.1)}
            className="flex flex-col justify-between p-6"
          >
            <div className="text-[#CFB8DF]">To be announced.</div>
            <div className="flex items-center mt-3">
              <span>
                <MapPin className="mr-3" />
              </span>
              <h6>Venue</h6>
            </div>
          </Card>
        </div>
        <div className=" w-full flex justify-center items-center">
          <Link href="/events/register/85">
            <Button className="max-w-[700px] w-full text-center">
              Register
            </Button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <Card
            bgColor={rgba("#ffffff", 0.1)}
            className="flex flex-col justify-between p-6"
          >
            <div className="text-[#CFB8DF]">
              <div>Minimum - 3</div>
              <div>Maximum - 5</div>
            </div>
            <div className="flex items-center mt-3">
              <span>
                <Users2 className="mr-3" />
              </span>
              <h6>Team</h6>
            </div>
          </Card>
          <Card
            bgColor={rgba("#ffffff", 0.1)}
            className="flex flex-col justify-between p-6"
          >
            <div className="text-[#CFB8DF]">{/* To be announced. */}</div>
            <div className="flex items-center mt-3">
              <span>
                <MessageCircleCode className="mr-3" />
              </span>
              <h6>Preliminary Workshop</h6>
            </div>
          </Card>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mb-12">
        <h3
          className={`${inter_font.className} tracking-wide text-center text-[#9C8DA6]`}
        >
          Crafting Conversations that Assist: Hackathon to build a chatbot for a
          website.
        </h3>

        <Card
          bgColor={rgba("#ffffff", 0.1)}
          className={`w-full max-w-[1000px] tracking-wide mx-auto mt-12 p-6`}
        >
          <b>Challenge</b>: Create a chatbot that answers questions based on
          content from websites, documents, and other sources! This hackathon is
          your opportunity to dive into open-source models, vector databases,
          and embeddings while constructing a specific business case or
          solution. Ready to code your way to victory? 🔥💻
        </Card>
      </div>

      {/* DESCRIPTION */}
      <div className="mb-12">
        <h3
          className={`${zen_font.className} tracking-wide text-center text-[#9C8DA6]`}
        >
          Your Mission 💡
        </h3>

        <Card
          bgColor={rgba("#ffffff", 0.1)}
          className={`w-full max-w-[1000px] tracking-wide mx-auto mt-12 p-6 flex flex-col gap-3`}
        >
          <div>
            <b>Create</b> 🎨: Build a chatbot with a user-friendly interface
            that is intuitive and engaging for users.
          </div>
          <div>
            <b>Interact</b> 💬: Allow the chatbot to interact with user in
            different ways.
          </div>
          <div>
            <b>Inform</b> 🔗: Ensure the chatbot includes reference links or
            citations to sources for its answers, establishing credibility and
            allowing users to verify information.
          </div>
          <div>
            <b>Optimize</b> 💸: Have the optimum design to ensure the queries
            are not expensive and the operational cost of the bot is competitive
          </div>
        </Card>
      </div>

      {/* DESCRIPTION */}
      <div className="mb-12">
        <h3
          className={`${zen_font.className} tracking-wide text-center text-[#9C8DA6]`}
        >
          Your Toolbox 🛠️
        </h3>

        <Card
          bgColor={rgba("#ffffff", 0.1)}
          className={`w-full max-w-[1000px] tracking-wide mx-auto mt-12 p-6 flex flex-col gap-3`}
        >
          <div>
            <b>Models</b>: Choose from a specific set range of Large Language
            Models.
          </div>
          <div>
            <b>APIs</b>: Use APIs to interact with the models.
          </div>
          <div>
            <b>Embeddings</b>: Explore different embeddings to store the
            context.
          </div>
          <div>
            <b>Vector Databases</b>: Select any open-source vector database.
          </div>
          <div>
            <b>TTS & STT</b>: Use supported browser services.
          </div>
        </Card>
      </div>

      {/* DESCRIPTION */}
      <div className="mb-12">
        <h3
          className={`${zen_font.className} tracking-wide text-center text-[#9C8DA6]`}
        >
          RULES
        </h3>

        <Card
          bgColor={rgba("#ffffff", 0.1)}
          className={`w-full max-w-[1000px] tracking-wide mx-auto mt-12 p-6 flex flex-col gap-3`}
        >
          <ul className="list-disc pl-6 flex flex-col gap-3">
            <li>
              <b>Preparation</b> 🛠️: You&apos;ll have two weeks (31/05/2024 -
              14/06/2024) to get familiar with the provided tools.
            </li>
            <li>
              <b>Details</b> 📆: The specific website, models, constraints, and
              evaluation criteria will be announced on 15/06/2024 when
              submissions open.
            </li>
            <li>
              <b>Round 1: Submission</b> 🕒: You&apos;ll have 36 hours to submit
              your project starting from the announcement of the specific
              details. Submissions will be accepted from 15/06/2024 at 9:00 am
              to 16/06/2024 at 9:00 pm. Our evaluation LLM sandbox will be
              available during the same time.
            </li>
            <li>
              <b>Round 2: Final Presentation and Demo</b> 🎤: The top 5
              submissions will present a demo of their solution along with a
              presentation on the approach used by them to solve the problem.
              (Details of the presentation template, duration etc., will be
              announced on 21/06/2024.)
            </li>
            <li>
              <b>Winners</b> 🏆: Winners will be determined based on final
              presentations and announced afterward.
            </li>
            <li>
              <b>License</b> : The code should be released under GNU General
              Public License version 3.
            </li>
            <li>
              <b>Rate limit on APIs</b>: There will be a rate limit on the
              resources provided to you (details to be provided on 15/06/2024).
              All the resources should be used efficiently. The organization
              team will reserve right to disqualify teams that attempt to take
              up more resources than the threshold permitted.
            </li>
            <li>
              <b>Team Size</b>: 3 - 5 members per team.
            </li>
          </ul>
        </Card>
      </div>

      {/* ROUNDS */}
      {/* <div className="">

                <h3 className={`${zen_font.className} text-center text-[#9C8DA6]`}>ROUNDS</h3>
                
                {rounds_data.map((item) => {
                    return (
                        <GenAIRoundCard {...item} key={item.round} />
                    )
                })}
            </div> */}

      {/* PRIZES */}
      <div className="mb-12">
        <h3 className={`${zen_font.className} text-center text-[#9C8DA6]`}>
          PRIZE POOL
        </h3>
        <div className="flex justify-center items-center gap-12 my-12 flex-col lg:flex-row">
          {prizes_data.map((item) => {
            return <GenAIPrizeCard {...item} key={item.prize} />;
          })}
        </div>
        <Card
          bgColor={rgba("#ffffff", 0.1)}
          className={`${zen_font.className} flex items-center justify-center w-full max-w-[600px] tracking-wide mx-auto shadow-[0_0_21px_10px_rgba(255,255,255,0.15)]`}
        >
          <Image
            src={"/white_trophy.svg"}
            alt=""
            height={50}
            width={50}
            className="mr-6"
          />
          <span>&#8377; </span>
          <span className="text-[#C5ACD4] mx-3">5,000</span> EACH FOR 4th AND
          5th
        </Card>
      </div>

      {/* TIMETABLE */}
      <div className="mb-12">
        <h3 className={`${zen_font.className} text-center text-[#9C8DA6]`}>
          TIME TABLE
        </h3>
        <div className="grid mt-12 max-w-[1000px] mx-auto">
          <Image
            src={"/genai_timetable.png"}
            alt="Time table"
            height={200}
            width={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* MENTORS */}
      <div className="mb-12">
        <h3 className={`${zen_font.className} text-center text-[#9C8DA6]`}>
          MENTORS
        </h3>
        <div className="grid lg:grid-cols-2 gap-6 mt-12 max-w-[1000px] mx-auto">
          {mentors_data.map((item, ind) => {
            return <GenAIMentorCard {...item} key={ind} />;
          })}
        </div>
      </div>

      {/* INSTRUCTORS */}
      <div className="mb-12">
        <h3 className={`${zen_font.className} text-center text-[#9C8DA6]`}>
          INSTRUCTORS
        </h3>
        <div className="grid lg:grid-cols-2 gap-6 mt-12 max-w-[1000px] mx-auto">
          {instructors_data.map((item, ind) => {
            return <GenAIInstructorCard {...item} key={ind} />;
          })}
        </div>
      </div>

      {/* FAQS */}
      {/* <div className="mb-12">

                <h3 className={`${zen_font.className} text-center text-[#9C8DA6]`}>FAQs</h3>
                <div className="mt-12 max-w-[1000px] mx-auto">
                    <Accordion variant="splitted">
                        {faqs_data.map(({ question, answer }, ind) => {
                            return (
                                <AccordionItem
                                    key={`_${ind}`}
                                    aria-label={question}
                                    indicator={<></>}
                                    classNames={{
                                        base: ["!bg-[#230137]", "!shadow-none"],
                                        title: ["!text-white"],
                                        content: ["!text-white"],
                                    }}
                                    title={`Q. ${question}`}
                                >
                                    {answer}
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div> */}
    </Card>
  );
}
