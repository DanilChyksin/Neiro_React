import React from "react";
import "./main.css";

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-content">
          <div className="main-content__left">
            <div className="main-title">
              <h1>NEIRO</h1>
              <h1 className="background-gradient">GROUP</h1>
            </div>
            <div className="main-subtitle">
              <p>Внимание. Понимание. Контекст.</p>
              <p>
                Neiro Group - это консалтинговая группа экспертов и уникальные
                нейронные сети, улучшающие Ваш бизнес.
              </p>
              <p>
                Помогаем компаниям реализовать успешные изменения, работая над
                решениями в сферах управленческого и HR-консалтинга, в основе
                которых – передовые технологии, работа с данными и отраслевые
                особенности.
              </p>
            </div>
            <div className="main-subcontent">
              <div className="main-btn">
                <a href="#application">Заполнить бриф</a>
                <img src="./img/icons/arrow-right.svg" alt="arrow right" />
              </div>
              <div className="main-photos">
                <img src="./img/icons/photo1.png" alt="" />
                <img src="./img/icons/photo2.png" alt="" />
                <img src="./img/icons/photo3.png" alt="" />
                <img src="./img/icons/photo4.png" alt="" />
              </div>
              <div className="main-stars">
                <img src="./img/icons/star.png" alt="" />
                <img src="./img/icons/star.png" alt="" />
                <img src="./img/icons/star.png" alt="" />
                <img src="./img/icons/star.png" alt="" />
                <img src="./img/icons/star-empty.png" alt="" />
              </div>
              <div className="main-score">
                <li>4.1</li>
              </div>
            </div>
          </div>
          <div className="main-content__right">
            <img src="./img/icons/circle.svg" alt="" />
          </div>
          <div className="main-img-static">
            <img src="./img/collection/main.png" className="" alt="" />
          </div>
          <div className="main-ellipse-img">
            <img src="./img/collection/ellipse.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
