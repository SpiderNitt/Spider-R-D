import React, { useState } from "react";
import FAQ from "./faq";
import "./inductions.css";

function GeneralFaq() {
  const [faqs, setfaqs] = useState([
    {
      question: "Who are we?",
      answer:
        "Spider, the Research and Development Club of NIT Trichy is a group of people enthusiastic about technology and innovation. We ideate and pursue projects that are relevant to today's industry in fields like Artificial Intelligence and Machine Learning, Electronics, Computer Technology along with App and Web Development. We are the multi-disciplinary club of our college. We as a team look forward to Ideate and Innovate to take Research and Development projects to greater heights.",
      open: false,
    },
    {
      question: "How many profiles are there inside Spider?",
      answer:
        "We have 4 profiles: Algorithms, App Development, Tronix, and Web Development.",
      open: false,
    },
    {
      question: "Can I apply for more than one profile?",
      answer:
        "Yes, surely you can. You can register for multiple domains in the induction process. However, in the induction process, you will be inducted through one of the profiles only.",
      open: false,
    },
    {
      question: "How is this orientation different from Inductions?",
      answer:
        "This “Orientation Program” is basically to give you an idea of the concepts required to participate in our induction process.",
      open: false,
    },
    {
      question: "How many people will be inducted this year?",
      answer:
        "There is no fixed number of seats as such. Based upon what we are looking for and how well a candidate fits in, we induct.",
      open: false,
    },
    {
      question: "What differentiates spider from other clubs?",
      answer:
        "We are one of the most prominent clubs which indulges in more Research and Development Projects and actively publish our Research works in IEEE etc. Once you get inducted in a particular profile, you can collaborate with other profiles to gain more knowledge in all the other fields.",
      open: false,
    },
    {
      question: "Will I be assigned a mentor?",
      answer:
        "Yes, As soon as we get to know your interests after you register in our portal, you will be segregated into groups based on your interests and each group will be assigned a mentor from that particular profile.",
      open: false,
    },
    {
      question:
        "Will I have multiple mentors if I apply for more than one profile?",
      answer: "Yes, one from each of the profiles that you choose. ",
      open: false,
    },
    {
      question: "How will I communicate with my mentor?",
      answer:
        "A Whatsapp group will be created through which you can get in touch with your mentor to clarify all your doubts.",
      open: false,
    },
    {
      question: "How will my progress be evaluated?",
      answer:
        "You will be given constant feedback of your progress in the portal by your assigned mentor.",
      open: false,
    },
    {
      question: "I don’t have a laptop. What do I do?",
      answer:
        "Nothing to worry about. We’ve designed the tasks to accommodate everyone. You will not be left out.",
      open: false,
    },
    {
      question: "How is this going to help in the induction process?",
      answer:
        "All these tasks would help you get a basic understanding of the domain that you are choosing and are planned in such a way that it will be helpful when you participate in the induction process.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default GeneralFaq;
