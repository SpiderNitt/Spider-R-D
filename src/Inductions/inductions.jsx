import React, { useState } from 'react';
import FAQ from './faq';
import "./inductions.css";

function App () {
    const [faqs, setfaqs] = useState([
        {
        question: 'How many domains are there inside Spider?',
        answer: 'We are planning to have 101 domains.',
        open: false
        },
        {
        question: 'What are those domains? Can I apply for more than one domain?',
        answer: 'I dont know! Find it out yourself.',
        open: false
        },
        {
        question: 'What is the mentorship programme ?',
        answer: 'Simply for us to enjoy ragging you!.',
        open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
        if (i === index) {
            faq.open = !faq.open
        } else {
            faq.open = false;
        }
        return faq;
        }))
    }


    return (
        <div className="App">
            <h1 className="ind-header">Got any Questions? Check if we got them answered!</h1>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
  );
}

export default App;