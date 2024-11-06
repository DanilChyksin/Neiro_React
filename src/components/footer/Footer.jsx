import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-logo">
            <img className="footer-logo" src="./img/icons/logo.png" alt="" />
            <img
              className="footer-main-img"
              src="./img/collection/footer-img.png"
              alt=""
            />
          </div>
          <div className="footer-title-sector">
            <div className="footer-sector-item">
              <div className="footer-sector-toggle ">
                <span className="background-gradient">Меню</span>
              </div>
              <div className="footer-sector-menu">
                <ul className="footer-sector-menu-list">
                  <li>
                    <a href="#faqs">Услуги</a>
                  </li>
                  <li>
                    <a href="#project">Кейсы</a>
                  </li>
                  <li>
                    <a href="#client">Клиенты</a>
                  </li>
                  <li>
                    <a href="#expert">Команда</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-sector-item">
              <div className="footer-sector-toggle ">
                <span className="background-gradient">Услуги</span>
              </div>
              <div className="footer-sector-menu">
                <ul className="footer-sector-menu-list">
                  <li>
                    <a href="#faqs">Производственный аудит</a>
                  </li>
                  <li>
                    <a href="#commercial">Коммерческий аудит</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-contacts">
          <div className="footer-info">
            <div className="footers-numbers">
              <img src="./img/icons/phone.png" alt="" />
              <a href="tel:88126010807">8 (812) 601 08 07</a>
              <a href="tel:89523674641">8 952 367 46 41</a>
            </div>
            <div className="footers-info-img">
              <img src="./img/icons/mail.png" alt="" />
              <a href="mailto:cons@neirogroup.ru">cons@neirogroup.ru</a>
            </div>
          </div>
        </div>

        <div className="footer-policy">
          <div className="footer-policy-copyright">
            <span>Политика конфиденциальности</span>
          </div>
          <div className="footer-policy-right-content">
            <div className="footer-policy-privacy">
              <p>Terms & Condition </p>
              <p>Privacy Policy</p>
            </div>

            <img src="./img/icons/nil.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
