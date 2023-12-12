import React, { useState } from 'react';
import './Styling.css';
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'What is the minimum order quantity for customised photo gifts?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum mi at vestibulum bibendum. Nullam in imperdiet ligula, sit amet volutpat quam.',
    },
    {
      question: 'What all gifts can I give to my loved one?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum mi at vestibulum bibendum. Nullam in imperdiet ligula, sit amet volutpat quam.',
    },
    {
      question: 'Does fridge magnets leave scratches on the fridge?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum mi at vestibulum bibendum. Nullam in imperdiet ligula, sit amet volutpat quam.',
    },
    {
      question: 'Who will provide t-shirt for my t-shirt printing order?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum mi at vestibulum bibendum. Nullam in imperdiet ligula, sit amet volutpat quam.',
    },
    {
      question: 'Which is the best frame, LED or traditional?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum mi at vestibulum bibendum. Nullam in imperdiet ligula, sit amet volutpat quam.',
    },
    {
      question: 'What are the delivery TAT for these products?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum mi at vestibulum bibendum. Nullam in imperdiet ligula, sit amet volutpat quam.',
    },
  ];

  return (
    <>
    <div className="container">
        <div>
          <h1>Frequently Asked Questions</h1>
        </div>
    </div>
    
    <div className="accordion">
        
      <div className="column ">
        {faqData.slice(0, 3).map((faq, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="column ">
        {faqData.slice(3).map((faq, index) => (
          <div key={index + 3} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index + 3)}>
              {faq.question}
            </div>
            {openIndex === index + 3 && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Accordion;
