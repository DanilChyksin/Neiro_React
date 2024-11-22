import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-logo">
            <img
              className="footer-logo"
              src="./img/icons/logo.png"
              alt="logo"
            />
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
              <img src="./img/icons/phone.png" alt="phone" />
              <a href="tel:88126010807">+7 (812) 601 08 07</a>
              <img src="./img/icons/whatsapp.svg" alt="whatsapp" />
              <a href="tel:89523674641">+7 952 367 46 41</a>
            </div>
            <div className="footers-info-img">
              <div className="footers-info-img-first">
                <img src="./img/icons/mail.png" alt="email" />
                <a href="mailto:cons@neirogroup.ru">cons@neirogroup.ru</a>
              </div>
              <p>ИНН: 7817127960</p>
            </div>
          </div>
        </div>

        <div className="footer-policy">
          <div className="footer-policy-copyright">
            <span>Политика конфиденциальности</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
