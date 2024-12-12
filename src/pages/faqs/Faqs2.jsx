import React from "react";
import "./faqs.css";
import FaqsItems2 from "./FaqsItems2";

const Faqs2 = () => {
  return (
    <>
      <div className="faqs" id="commercial">
        <img
          className="faqs-vector-img"
          src="./img/collection/vector-faqs.png"
          alt=""
        />
        <div className="faqs-container">
          <div className="faqs-title">
            <div className="faqs-description">
              <p>Чем мы можем вам помочь</p>
              <h2>Услуги для коммерции</h2>
              <span>
                Анализ конъюнктуры рынка, процессов рекламы и реализации,
                настройка и интеграция IT инструментов. Эффективное обучение
                персонала.
              </span>
            </div>
            <div className="faqs-buttons">
              <button className="faqs-btn">Коммерческий аудит</button>
              <button>Маркетинг</button>
              <button>Продажи</button>
              <button>Снабжение</button>
              <button>Кадры</button>
            </div>
          </div>

          <FaqsItems2 />
        </div>
      </div>
    </>
  );
};

export default Faqs2;
