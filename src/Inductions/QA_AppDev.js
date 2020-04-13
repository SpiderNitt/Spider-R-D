import React, { useState } from "react";
import FAQ from "./faq";
import "./inductions.css";

function AppFaq() {
  const [faqs, setfaqs] = useState([
    {
      question: "What will I learn in AppDev under the mentorship programs?",
      answer:
        "There are four domains in SpiderYou will learn to create applications for use on smartphones and tablets, get insight into how they actually work and A-Z of app design and development.",
      open: false,
    },
    {
      question: "What are the pre-Requisite?",
      answer:
        " There are no Pre-Requisite we will be sharing all the resources for learning AppDev and will be having frequent online sessions to teach you.",
      open: false,
    },
    {
      question: "I’m entirely new to coding should I even apply?",
      answer:
        "Sure why not! Anyways amid this lockdown, we are sure you have already binge-watched every series so why not just try this stuff also.",
      open: false,
    },
    {
      question: "I already know app dev why should I apply?",
      answer:
        "We will be going up with the series in a well-organized and systematic way so even though you might know Appdev we are sure you’ll find something new to learn if not anyways this also encompasses a competition along with it so you can have fun there.",
      open: false,
    },
    {
      question: "What platform will I learn to create the apps for?",
      answer:
        "We will be going with developing apps in Flutter, React Native and native android so it is up to you if you want to develop for cross-platform or just the native android.",
      open: false,
    },
    {
      question: "What all projects does AppDev undertake?",
      answer:
        "We take a few admin projects like Orientation app and Sportsfete app and a large number of startup and personal projects and the tech stack for almost every other applications we develop contains at least one tech buzzword..",
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
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default AppFaq;
