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
      answer: "A: Registration is to be done via the official Paradox website using your official email ID. Please ensure all required details are accurately provided.",
    },
    {
      question: "Q: How do I make a payment? ",
      answer: "Payment details will be communicated via email shortly.",
    },
  ];

  const datesVenuesData = [
    {
      question: "Q: When and where will Paradox 2024 take place?",
      answer: "A: Paradox 2024 is scheduled from 30th May to 2nd June, 2024 at the IIT Madras campus.",
    },
    {
      question:
        "Q: I have never been to Chennai and this is my first time traveling alone. How will I reach the campus?",
      answer: "A: Prior to Paradox, a detailed email will be sent out to all students, providing all the necessary information for navigating to the IITM Campus. This email will include a map and comprehensive instructional videos to facilitate a seamless journey. ",
    },
  ];

  const durationData = [
    {
      question: "Q: What is the duration of the stay?",
      answer: "A: Accommodation will be provided for the duration of Paradox, i.e., from May 29th to June 2nd, totaling 5 days. The check out must be completed before 8:00 pm on 2nd June.",
    },
  ];

  const accommodationData = [
    {
      question: "Q: Can I avail hostel accommodation during Paradox 2024?",
      answer: "A: Yes, on-campus hostel accommodation with mess facilities is available on a first-come, first-served basis.",
    },
    {
      question: "Q: Is the accommodation at campus free or paid for students?",
      answer: "A: Accommodation facility for Paradox at IITM campus is paid. Students will be required to register and pay the accommodation charges to avail the facility. An email with detailed information regarding the accommodation details (including charges) will be sent out shortly.",
    },
    {
      question: "Q: What facilities are provided?",
      answer: "A: The accommodation includes mattress, pillow, and mess facilities, which covers breakfast, lunch, and dinner for the duration of your stay.",
    },
    {
      question: "Q:  What type of accommodation is provided? ",
      answer: "A:  Accommodation will be provided in well-secured and separate residential hostels for boys & girls at IIT Madras. The accommodation will be on a sharing basis.",
    },
    {
      question: "Q: Can I extend my accommodation pre or post Paradox?",
      answer: "A: No, you cannot extend your stay at the campus beyond the mentioned dates. You may find accommodation outside the campus if needed.",
    },
    {
      question: "Q.Can I change my allotted hostel and mess? ",
      answer: "A: No, Once the hostel and mess slots are allotted and no changes will be allowed after allotment.",
    },
    {
      question: "Q: Who can assist me after reaching the hostel? ",
      answer: "A: Volunteers and coordinators will be present in your respective hostels to assist you during your stay.",
    },
    {
      question: "Q: What are the check-in and check-out timings for the hostel?",
      answer: "A: The check-in time is 8:00 AM on May 29th 2024, and the check-out time is 8:00 PM on June 2nd 2024. You will receive an email with the specific details, including the hostel name and room number, after you fill out the accommodation form. The Check Out must be completed before 8:00 PM 2nd June.",
    },
    {
      question: "Q: I am a PwD. Is there special accommodation available on Campus for PwD?",
      answer: "A: Yes, We have special rooms with attached washrooms for PwD students on additional payment. Students will be required to upload their PwD certificates while registering for accommodation to avail the facilities.",
    },
    {
      question: "Q: What if I pay for accommodation but I am unable to secure accommodation due to limited availability. Will I get a refund?",
      answer: "A: Given the limited availability, the accommodation registration link on the website will automatically expire once we reach full capacity and the remaining students will not be able to secure on- campus accommodation.",
    },
    {
      question: "Q: My Flight/Train will reach chennai late at night. Will I be allowed to check-in?",
      answer: "A: The accommodation check-in desk will be operational from 8:00 am to 8:00 pm, spanning the period from May 29th to June 2nd. Students can check in anytime during the operational hours. Early or late accommodation is not possible. ",
    },
    {
      question: "Q: My Parents will be accompanying me to the Campus. Does Campus have guest rooms for Parents?",
      answer: "A: Accommodation facilities are restricted to the registered BS Degree Students only. Parents and other companions can opt for accommodation facilities (Hotels) around the campus.",
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
