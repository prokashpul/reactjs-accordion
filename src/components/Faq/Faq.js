import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Faq.css";
const Faq = ({ faqs }) => {
  const { question, answer } = faqs;
  const [faq, setfaq] = useState();
  return (
    <div className="faq">
      <div className="faq-header" onClick={() => setfaq(!faq)}>
        <h3>{question}</h3>
        <FontAwesomeIcon
          className={faq ? "icon up" : "icon"}
          icon={faArrowDown}
        />
      </div>
      <div className={faq ? "faq-open faq-body" : "faq-body "}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
