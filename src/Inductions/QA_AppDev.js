import React, { useState } from "react";
import FAQ from "./faq";
import "./inductions.css";

function AppFaq() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "Profile Description",
      answer:
        <p className="answer"><b>Flutter</b> is an open-source UI software development kit created by Google which is 
        used to develop applications for Android, iOS, Windows, Mac, Linux, Google Fuchsia and the web.
        Flutter converts a single code to run on different platforms and is currently used by giants like Google and Alibaba
        for their apps.<br/><br/> <b>React Native</b> is a cross-platform app development framework created by Facebook which is used to develop apps for
        Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities.<br/><br/><b>Native Android</b> apps stand
        for apps specifically designed to run on android devices like smartphones, tablets and TVs etc. We'll develop native android apps
        in Android studio</p>,
             open: false,
    },
    {
      question: "What will I learn in AppDev under the mentorship programs?",
      answer:
        "You will learn to create applications for use on smartphones and tablets, get insight into how they actually work and A-Z of app design and development.",
      open: false,
    },
    {
      question: "What are the pre-requisites?",
      answer:
        "There are no pre-requisites. We will be sharing all the resources for learning AppDev and will be having frequent online sessions to teach you.",
      open: false,
    },
    {
      question: "I’m entirely new to coding should I even apply?",
      answer:
        "Yes definitely, there's no harm in trying out something new and always has a probability of discovering you have a nack for it. We are here to guide you and help you discover your true potential. Just so you know, we have team members who didn't have any coding experience prior to Inductions process.",
      open: false,
    },
    {
      question: "I already know app dev, why should I apply?",
      answer:
        "We will be going up with the series in a well-organized and systematic way so even though you might know Appdev we are sure you’ll find something new to learn. And still if you don't, this orientation program encompasses a competition also, so you can have fun there.",
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
          <FAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default AppFaq;
