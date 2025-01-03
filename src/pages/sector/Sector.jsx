import React from "react";
import "./sector.css";

const Sector = () => {
  const isWidth = window.innerWidth < 490;
  return (
    <div className="sector">
      <div className="sector-container">
        <div className="sector-head">
          <div className="sector-title">
            <h1>отрасли</h1>
            <h1 className="background-gradient">которым мы помогаем</h1>
          </div>
          <div className="sector-subtitle">
            <p>С ВАС ИДЕЯ - С НАС ВОПЛОЩЕНИЕ</p>

            <p>
              Наша консалтинговая компания специализируется на оказании помощи
              различным отраслям бизнеса в достижении своих целей и улучшении
              процессов.
            </p>
            <p>"ЭФФЕКТИВНЫЙ БИЗНЕС - ЭФФЕКТИВНЫЕ РЕШЕНИЯ"</p>
          </div>
        </div>

        <div className="sector-grid">
          <div className="sector-item">
            <img src="./img/icons/tie.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">Государственный сектор</h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/product.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Потребительский сектор и розничная торговля
              </h4>
            </div>
          </div>

          <div className="sector-item">
            <img src="./img/icons/wood-industries.png" alt="" />
            <div className="sector-item__name">
              {isWidth ? (
                <h4 className="background-gradient">
                  Легкая промышленность, деревообраба-
                  <br />
                  тывающая промышленность
                </h4>
              ) : (
                <h4 className="background-gradient">
                  Легкая промышленность, деревообрабатывающая промышленность
                </h4>
              )}
            </div>
          </div>
          <div className="sector-item">
            <img src="./img/icons/construction.png" alt="" />
            <div className="sector-item__name">
              <h4 className="background-gradient">
                Строительство и девелопмент
              </h4>
            </div>
          </div>

          <img
            className="sector-circle"
            src="./img/icons/sector-circle.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sector;
