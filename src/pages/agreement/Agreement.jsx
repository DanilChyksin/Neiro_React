import React from "react";
import "./agreement.css";
const data = {
  list: [
    "Клиент заполняет опросный лист",
    "Мы назначем нашего аудитора",
    "Аудитор назначает группу наших экспертов",
    "Мы предоставляем возможные решения",
    "Клиент принимает решение о выборе",
    "Подписание договра",
    "Мы направляем аудитора к клиенту",
  ],
  agreements: ["Эффективность", "Конфиденциальность", "Результативность"],
};

const Agreement = () => {
  return (
    <div className="agreement main-container">
      <div className="agreement-stage">
        <div className="agreement-stage-title">
          <img src="/img/icons/speedometer.svg" alt="speedometer" />
          <h3 className="background-gradient">
            Каждый аудит проходит этап соглосования{" "}
          </h3>
        </div>
        <ul>
          {data.list.map((el, i) => (
            <li key={i}>
              <span className="background-gradient">0{i + 1}</span> {el}
            </li>
          ))}
        </ul>
      </div>
      <div className="agreement-important">
        <h3 className="background-gradient">Для нас важно :</h3>
        <ul>
          {data.agreements.map((el, i) => (
            <li key={i}>
              <span className="background-gradient">—</span>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Agreement;
