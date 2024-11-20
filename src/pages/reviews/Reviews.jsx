import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

import "./reviews.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  return (
    <div>
      <div className="reviews-container">
        <div className="reviews-head">
          <p>Отзывы</p>
          <h3>Что о нас говорят</h3>
        </div>
        <div className="reviews-item">
          <Swiper
            id="swiper"
            cssMode={true}
            slidesPerView={1}
            loop={false}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide style={{ height: "130px" }}>
              <div className="reviews-slider">
                <div className="reviews-stars">
                  <img src="./img/icons/stars.png" alt="" />
                </div>
                <div className="reviews-title">
                  <p>
                    Внимание команды к запросу клиента, а также полное
                    погружение и кастомизация продукта, позволяет нам обращаться
                    за решением любой нестандартной задачи, а также
                    рекомендовать TSQ как надежного, профессионального в сфере
                    обучения и консалтинга!
                  </p>
                </div>
                <div className="reviews-person">
                  <img src="./img/collection/expert.png" alt="" />
                  <div className="reviews-name">
                    <h6>Иванов Иван</h6>
                    <p>Ui Deisgner</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "130px" }}>
              <div className="reviews-slider">
                <div className="reviews-stars">
                  <img src="./img/icons/stars.png" alt="" />
                </div>
                <div className="reviews-title">
                  <p>
                    Внимание команды к запросу клиента, а также полное
                    погружение и кастомизация продукта, позволяет нам обращаться
                    за решением любой нестандартной задачи, а также
                    рекомендовать TSQ как надежного, профессионального в сфере
                    обучения и консалтинга!
                  </p>
                </div>
                <div className="reviews-person">
                  <img src="./img/collection/expert.png" alt="" />
                  <div className="reviews-name">
                    <h6>Иванов Иван</h6>
                    <p>Ui Deisgner</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "130px" }}>
              <div className="reviews-slider">
                <div className="reviews-stars">
                  <img src="./img/icons/stars.png" alt="" />
                </div>
                <div className="reviews-title">
                  <p>
                    Внимание команды к запросу клиента, а также полное
                    погружение и кастомизация продукта, позволяет нам обращаться
                    за решением любой нестандартной задачи, а также
                    рекомендовать TSQ как надежного, профессионального в сфере
                    обучения и консалтинга!
                  </p>
                </div>
                <div className="reviews-person">
                  <img src="./img/collection/expert.png" alt="" />
                  <div className="reviews-name">
                    <h6>Иванов Иван</h6>
                    <p>Ui Deisgner</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "130px" }}>
              <div className="reviews-slider">
                <div className="reviews-stars">
                  <img src="./img/icons/stars.png" alt="" />
                </div>
                <div className="reviews-title">
                  <p>
                    Внимание команды к запросу клиента, а также полное
                    погружение и кастомизация продукта, позволяет нам обращаться
                    за решением любой нестандартной задачи, а также
                    рекомендовать TSQ как надежного, профессионального в сфере
                    обучения и консалтинга!
                  </p>
                </div>
                <div className="reviews-person">
                  <img src="./img/collection/expert.png" alt="" />
                  <div className="reviews-name">
                    <h6>Иванов Иван</h6>
                    <p>Ui Deisgner</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>{" "}
            <div className="reviews-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
