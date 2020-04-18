import React, { useState } from "react";
import FAQ from "./faq";
import "./inductions.css";

function AlgosFaq() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "Profile Description",
      answer:
        "The Algorithms profile (or Algos) primarily focuses on competitive programming. We train for and participate in multiple programming contests, especially the ACM ICPC. With emphasis on improving the coding culture on campus, we conduct multiple contests, workshops and discussions throughout the year. But that’s not all! Members of our team have varied interests. We participate in hackathons and take up projects in multiple interesting fields like Machine Learning, Game Development and research.",
             open: false,
    },
    {
      question: "What does the Algorithms profile do?",
      answer:
        "The primary activity we take up is competitive programming. We extensively take part in online programming contests, hold discussions on these and improve upon our problem-solving skills. We also conduct Knowledge Sharing Sessions(KSS) which provides a great opportunity for members to learn new topics. Every year our teams train for and participate in the prestigious ACM ICPC. Members of our team also participate in hackathons and take up projects in a multitude of interesting fields including but not limited to Machine Learning, Game Development, research paper publications.",
      open: false,
    },
    {
      question: "What will the orientation program be like?",
      answer:
        "Every one of you would be given a set of useful learning materials, covering everything from a grass-root level. You’ll be given programming tasks based on these topics, building your algorithmic problem-solving skills. We’ll be guiding you along the way and you can reach out to us if you face any difficulties.",
      open: false,
    },

    {
      question: "Are there any prerequisites to apply?",
      answer: "None, except the will to learn.",
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

export default AlgosFaq;
