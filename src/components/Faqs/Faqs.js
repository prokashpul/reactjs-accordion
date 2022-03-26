import React from "react";
import Faq from "../Faq/Faq";
import "./Faqs.css";
const Faqs = () => {
  const faqdata = [
    {
      question: "what is react?",
      answer:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 2,
    },
    {
      question: "How to react work?",
      answer:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 2,
    },
    {
      question: "what is useState?",
      answer:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 3,
    },
  ];
  return (
    <div className="Faqs">
      {faqdata.map((faq) => (
        <Faq faqs={faq} key={faq.id}></Faq>
      ))}
    </div>
  );
};

export default Faqs;
