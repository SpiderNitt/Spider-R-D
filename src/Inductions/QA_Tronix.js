import React, { useState } from "react";
import FAQ from "./faq";
import "./inductions.css";

function TronixFaq() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "Are there any pre-requisites for applying to SOP in tronix profile?",
      answer:
        "There are no pre-requisites for applying, we’ll start everything from scratch and there will be mentors to guide you through the learning processing",
      open: false,
    },
    {
      question: "What are all the domains in Spider - Tronix?",
      answer:
        "There are three domains: \n1. Robotics and Control \n2. Signal Processing and Machine learning \n3. Embedded and Electronics",
      open: false,
    },
    {
      question: "Can I apply for more than one domain inside Tronix?",
      answer:
        "Yes, surely you can. However, in the end, you will be inducted through one of the domains only.",
      open: false,
    },
    {
      question: "What are the benefits of participating in SOP?",
      answer:
        "You will be ahead of your peers while applying for inductions because most of the basic concepts will be covered in SOP.",
      open: false,
    },
    {
      question: "How will I be matched with a mentor?",
      answer:
        "Based on your domain preference, a mentor will be allotted for you.",
      open: false,
    },
    {
      question: "How	will this Spider Orientation Program help me in my career?",
      answer:
        "You can contact your mentor whenever you get stuck in something, not just during the SOP period, but throughout your life. This is a way to get to know about research culture and interact with seniors.",
      open: false,
    },
    {
      question: "How will my work be evaluated?",
      answer:
        "The evaluation methodology will depend on the domain that you choose, but the thing that is common to all the domains is the amount of quality time that you have invested.",
      open: false,
    },
    {
      question: "What kind of commitments should I expect?",
      answer:
        "Each participant should be committed to giving time and effort in completing the tasks within the stipulated period. There must be a clear understanding of the roles and responsibilities of both the mentor and mentee, and they must follow an action plan that defines goals and outlines expectations for the Spider Orientation Program.",
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

export default TronixFaq;
