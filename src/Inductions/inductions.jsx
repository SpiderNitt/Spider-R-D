import React, { useState } from "react";
import FAQ from "./faq";
import "./inductions.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "raleway",
    fontWeight: "bold",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(7, 0, 7),
  },
}));

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "How many domains are there inside Spider?",
      answer: "There are four domains in Spider",
      open: false,
    },
    {
      question: "What are those domains? Can I apply for more than one domain?",
      answer: "Answer is mysterious. Wait for official answer.",
      open: false,
    },
    {
      question: "What is the mentorship programme ?",
      answer: "Please mail me if you find out. :P",
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

  const classes = myStyles();
  return (
    <div>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        className={classes.root}
      >
        Got any Questions?
      </Typography>
      <div className="App">
        <h2 className="ind-content"> Check if we got them answered!</h2>
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
