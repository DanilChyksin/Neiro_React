import React from "react";
import "./agreement.css";

const Agreement = () => {
  return (
    <div className="agreement main-container">
      <div className="agreement-stage">
        <div className="agreement-stage-title">
          <img src="/img/icons/speedometer.svg" alt="speedometer" />
          <h3 className="background-gradient">
            Каждый аудит проходит этап соглосование{" "}
          </h3>
        </div>
        <ul>
          <li>
            <span className="background-gradient">01</span> Клиент заполняет
            опросный лист
          </li>
          <li>
            <span className="background-gradient">02</span> Мы назначем нашего
            аудитора
          </li>
          <li>
            <span className="background-gradient">03</span> Аудитор назначает
            группу наших экспертов
          </li>
          <li>
            <span className="background-gradient">04</span> Мы предоставляем
            возможные решения
          </li>
          <li>
            <span className="background-gradient">05</span> Клиент принимает
            решение о выборе
          </li>
          <li>
            <span className="background-gradient">06</span> Подписание договра
          </li>
          <li>
            <span className="background-gradient">07</span> Мы направляем
            аудитора к клиенту
          </li>
        </ul>
      </div>
      <div className="agreement-important">
        <h3 className="background-gradient">Для нас важно :</h3>
        <ul>
          <li>
            <span className="background-gradient">—</span>Эффективность
          </li>
          <li>
            <span className="background-gradient">—</span>Конфиденциальность
          </li>
          <li>
            <span className="background-gradient">—</span>Результативность
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Agreement;
