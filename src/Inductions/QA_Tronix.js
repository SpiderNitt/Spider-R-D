import React, { useState } from 'react';
import FAQ from './faq';
import "./inductions.css";
 
function TronixFaq () {
    const [faqs, setfaqs] = useState([
        {
            question: 'Tronix Question Tronix Question Tronix Question',
            answer: 'There are four domains in Spider',
            open: false
            },
            {
            question: 'Tronix Question Tronix Question Tronix Question',
            answer: 'Answer is mysterious. Wait for official answer.',
            open: false
            },
            {
            question: 'Tronix Question Tronix Question Tronix Question',
            answer: 'Please mail me if you find out. :P',
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
        <div>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
  );
}

export default TronixFaq;