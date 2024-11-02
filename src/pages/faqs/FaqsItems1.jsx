import React, { useState } from "react";
import "./faqs.css";

const FaqsItems1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFaqClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      id: "01",
      question: "Склад",
      answer: [
        "включает в себя",
        "— создание системы HR",
        "— моделирование компетенций",
        "— работа с корпоративной культурой",
        "— опросы вовлеченности",
        "— оценка и развитие топ-руководителей",
      ],
      imageSrc: "./img/collection/faqs-img.png",
    },
    {
      id: "02",
      question: "Цех",
      answer: [
        "включает в себя",
        "— создание системы HR",
        "— моделирование компетенций",
        "— работа с корпоративной культурой",
        "— опросы вовлеченности",
        "— оценка и развитие топ-руководителей",
      ],
      imageSrc: "./img/collection/faqs-img.png",
    },
    {
      id: "03",
      question: "Отдел технического контроля",
      answer: [
        "включает в себя",
        "— создание системы HR",
        "— моделирование компетенций",
        "— работа с корпоративной культурой",
        "— опросы вовлеченности",
        "— оценка и развитие топ-руководителей",
      ],
      imageSrc: "./img/collection/faqs-img.png",
    },
  ];

  return (
    <div className="faqs-items-container">
      {data.map((faq, index) => (
        <div
          className={`faqs-item ${index === activeIndex ? "active" : ""}`}
          key={index}
        >
          <div className="faqs-question" onClick={() => handleFaqClick(index)}>
            <div className="faqs-question-title">
              <ul>{faq.id}</ul>
              <h4>{faq.question}</h4>
            </div>
            <div className="faqs-button">
              <img src="./img/icons/arrow-top.svg" alt="arrow" />
            </div>
          </div>
          <div className="faqs-answer">
            <img src={faq.imageSrc} alt="" />
            <div className="faqs-includes-text">
              <h3 className="background-gradient">{faq.answer[0]}</h3>
              <ul>
                {faq.answer.slice(1).map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqsItems1;
