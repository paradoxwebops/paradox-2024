"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQPage() {
  const eligibilityData = [
    {
      question: "Q: Who can attend Paradox 2024?",
      answer:
        "A: Current students of the IIT Madras BS Degree Program in either Data Science or Electronic Science who have registered and received their Student Email ID and valid Student ID Card are eligible to attend Paradox 2024.",
    },
    {
      question: "Q: How do I register?",
      answer: "A: On the website.",
    },
    {
      question: "Q: How do I make a payment? ",
      answer: "A: ...",
    },
  ];

  const datesVenuesData = [
    {
      question: "Q: When and where will Paradox 2024 take place?",
      answer: "A: ...",
    },
    {
      question:
        "Q: I have never been to Chennai and this is my first time traveling alone. How will I reach the campus?",
      answer: "A: ...",
    },
    {
      question: "Q: How do I make a payment? ",
      answer: "A: ...",
    },
  ];

  const durationData = [
    {
      question: "Q: What is the duration of the stay?",
      answer: "A: ...",
    },
  ];

  const accommodationData = [
    {
      question: "Q: Can I avail hostel accommodation during Paradox 2024?",
      answer: "A: ...",
    },
    {
      question: "Q: Is the accommodation at campus free or paid for students?",
      answer: "A: ...",
    },
    {
      question: "Q: What facilities are provided?",
      answer: "A: ...",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-4xl m-3">Eligibility</h2>
      <Accordion variant="splitted">
        {eligibilityData.map(({ question, answer }, ind) => {
          return (
            <AccordionItem
              key={`_${ind}`}
              aria-label="Accordion 1"
              indicator={<></>}
              classNames={{ base: ["!bg-[#FAD0CF]", "!shadow-none"] }}
              title={question}
            >
              {answer}
            </AccordionItem>
          );
        })}
      </Accordion>
      <h2 className="text-4xl m-3 mt-6">Dates & Venue</h2>
      <Accordion variant="splitted">
        {datesVenuesData.map(({ question, answer }, ind) => {
          return (
            <AccordionItem
              key={`_${ind}`}
              aria-label="Accordion 1"
              indicator={<></>}
              classNames={{ base: ["!bg-[#FAD0CF]", "!shadow-none"] }}
              title={question}
            >
              {answer}
            </AccordionItem>
          );
        })}
      </Accordion>
      <h2 className="text-4xl m-3 mt-6">Duration</h2>
      <Accordion variant="splitted">
        {durationData.map(({ question, answer }, ind) => {
          return (
            <AccordionItem
              key={`_${ind}`}
              aria-label="Accordion 1"
              indicator={<></>}
              classNames={{ base: ["!bg-[#FAD0CF]", "!shadow-none"] }}
              title={question}
            >
              {answer}
            </AccordionItem>
          );
        })}
      </Accordion>
      <h2 className="text-4xl m-3 mt-6">Accommodation</h2>
      <Accordion variant="splitted">
        {accommodationData.map(({ question, answer }, ind) => {
          return (
            <AccordionItem
              key={`_${ind}`}
              aria-label="Accordion 1"
              indicator={<></>}
              classNames={{ base: ["!bg-[#FAD0CF]", "!shadow-none"] }}
              title={question}
            >
              {answer}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
