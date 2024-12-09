import React from "react";
import "./agreement.css";
const data = {
  list: ["ОПРОС", "АУДИТ", "ДОГОВОР", "ИСПОЛНЕНИЕ", "ГАРАНТИЯ"],
  agreements: ["Эффективность", "Конфиденциальность", "Результативность"],
};

const Agreement = () => {
  return (
    <div className="agreement main-container">
      <div className="agreement-stage">
        <div className="agreement-stage-title">
          <img src="/img/icons/speedometer.svg" alt="speedometer" />
          <h3 className="background-gradient">ЭТАПЫ РАБОТ:</h3>
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
