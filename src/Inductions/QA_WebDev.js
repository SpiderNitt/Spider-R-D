import React, { useState } from "react";
import FAQ from "./faq";
import "./inductions.css";

function WebFaq() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "Profile Description",
      answer:
        <p className="answer">A cluster of spiders that weave amazing sites? Yep, that’s us, the <b>web</b> developers of Spider, 
        R&D club of NITT. Can’t express your mind blowing ideas? Looks like it’s time to design, develop and deploy your very own site. 
        Join us this summer as we mentor you to ideate and innovate. Stay webbed for more!</p>,
             open: false,
    },
    {
      question:
        "What is the Web Development Profile in Spider? What does it do?",
      answer:
        "The Web Development Profile in Spider is a group of like-minded individuals interested in the art of Web Development- i.e expressing ideas through web.  We build websites such as this, take up interesting admin projects as well as hobby projects that always involve learning something new. ",
      open: false,
    },
    {
      question: "What types of projects does the web dev profile work on?",
      answer:
        "We are engaged in a lot of projects starting from ones from the admin to hobby ones to projects that get published! Some projects involve primarily development, while some are research-oriented.",
      open: false,
    },
    {
      question: "Does it do research?",
      answer:
        "Apart from development, we actively take up projects in Machine Learning, Blockchain and pretty much anything that’s trending. We are also engaged with other profiles for the development of prototype and paper publications.",
      open: false,
    },
    {
      question: "What is the orientation structure?",
      answer:
        "Everyone will be tutored on basic concepts of web development. The members of the profile are ready to help out anytime, to give one-to-one training.  There will be tasks which you can do over the long leave, during this quarantine.",
      open: false,
    },
    {
      question: "What is my takeaway with this orientation programme?",
      answer:
        "Ever saw websites online and wondered how brilliant websites are made? Here, we will teach you what goes on behind the hood. We will teach the basics of how to set up everything related to the web.",
      open: false,
    },
    {
      question: "What are the prerequisites to apply?",
      answer: "Zero. Nil. Nada. Nothing. Anyone can apply.",
      open: false,
    },
    {
      question:
        "I already know some web development. Why should I still apply?",
      answer:
        "We have got content to cover all levels, from beginner to advanced. You can still fine-tune your skills, or pick up something new along the way as well.",
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

export default WebFaq;
