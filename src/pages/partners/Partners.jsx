import React from "react";
import "./partners.css";

const Partners = () => {
  return (
    <div id="client">
      <div className="partners-container">
        <div className="partners-head">
          {/* <p>Сотрудничество</p> */}
          <h3>наши партнеры</h3>
        </div>
        <div className="partners-company">
          <div className="partners-company-img">
            <img id="first" src="./img/collection/company-icon1.svg" alt="" />
            <img id="yandex" src="./img/collection/company-icon2.svg" alt="" />
            <img id="bitrix" src="./img/collection/company-icon3.svg" alt="" />
            <img id="cdt" src="./img/collection/company-icon4.svg" alt="" />
            <img id="wakeup" src="./img/collection/company-icon5.svg" alt="" />

            <img
              id="zoomlion"
              src="./img/collection/company-icon6.svg"
              alt=""
            />
            <img id="spec" src="./img/collection/company-icon7.svg" alt="" />
            <img id="geo" src="./img/collection/company-icon8.svg" alt="" />
            <img
              id="rosdorsnab"
              src="./img/collection/company-icon9.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
