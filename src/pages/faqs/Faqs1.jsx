import React from "react";
import "./faqs.css";
import FaqsItems1 from "./FaqsItems1";

const Faqs1 = () => {
  return (
    <>
      <div className="faqs" id="faqs">
        <img
          className="faqs-vector-img"
          src="./img/collection/vector-faqs.png"
          alt=""
        />
        <div className="faqs-container">
          <div className="faqs-title">
            <div className="faqs-description">
              <p>Чем мы можем вам помочь</p>
              <h2>Услуги для производства</h2>
              <span>
                Помогаем организациям быть лучше и эффективней на каждом этапе
                развития.
              </span>
              <span>
                &nbsp;Neiro Group ДАЕТ САМЫЕ ЭФФЕКТИВНЫЕ РЕШЕНИЯ - ВСЕ ОСТАЛЬНОЕ
                ЭТО НАРУШЕНИЕ{" "}
              </span>
            </div>
            <div className="faqs-buttons">
              <button className="faqs-btn">Производственный аудит</button>
              <button>Склад</button>
              <button>Цех</button>
              <button>Отдел технического контроля</button>
            </div>
          </div>

          <FaqsItems1 />
        </div>
      </div>
    </>
  );
};

export default Faqs1;
