import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "./reviews.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const avatar_1 = "./img/icons/avatar_1.png";
const avatar_2 = "./img/icons/avatar_2.png";
const avatar_3 = "./img/icons/avatar_3.png";
const avatar_4 = "./img/icons/avatar_4.png";
const avatar_5 = "./img/icons/avatar_5.png";
const avatar_6 = "./img/icons/avatar_6.png";
const avatar_7 = "./img/icons/avatar_7.png";
const avatar_8 = "./img/icons/avatar_8.png";
const avatar_9 = "./img/icons/avatar_9.png";
const avatar_10 = "./img/icons/avatar_10.png";

const data = [
  {
    text: "Обратился в NeiroGroup, чтобы оптимизировать работу моего предприятия. Специалисты провели детальный анализ бизнес-процессов и предложили конкретные шаги для улучшения эффективности работы. В результате внедрения их рекомендаций мы смогли сократить время на выполнение задач и улучшить качество продукции. Очень доволен результатом!",
    avatar: avatar_1,
  },
  {
    text: "Наша компания столкнулась с проблемой снижения оборотов. Мы обратились за помощью и они провели глубокий анализ нашей ситуации. Они предложили нам несколько стратегий для увеличения оборотов, которые мы успешно внедрили. Результаты превзошли наши ожидания — обороты компании значительно выросли, и мы достигли новых высот",
    avatar: avatar_2,
  },
  {
    text: "Мы искали способы увеличить прибыль нашей компании и обратились к этой консалтинговой фирме. Они провели аудит наших финансовых показателей и предложили ряд мер для повышения прибыльности. Благодаря их рекомендациям мы смогли оптимизировать расходы и увеличить доходы. Это помогло нам достичь желаемых результатов",
    avatar: avatar_3,
  },
  {
    text: "Я был приятно удивлён результатами работы с НейроГрупп. Они помогли мне оптимизировать процессы в моей компании, что привело к увеличению производительности и снижению затрат. Теперь я могу сосредоточиться на развитии бизнеса, зная, что у меня есть надёжные партнёры, готовые помочь в любой ситуации",
    avatar: avatar_4,
  },
  {
    text: "Товарищи из NeiroGroup действительно знают своё дело. Они не только помогли нам увеличить обороты, но и научили нас лучше понимать рынок и потребности клиентов. Теперь мы можем принимать более обоснованные решения и уверенно двигаться вперёд",
    avatar: avatar_5,
  },
  {
    text: "Сотрудничество с этой компанией стало настоящим прорывом для нашего бизнеса. Они проанализировали нашу деятельность, выявили слабые места и предложили эффективные стратегии для оптимизации работы и увеличения прибыли. Мы благодарны им за профессионализм и результаты, которых мы достигли благодаря их помощи",
    avatar: avatar_6,
  },
  {
    text: "После обращения в NeiroGroup мы увидели значительные изменения в работе нашей организации. Они помогли нам оптимизировать процессы, улучшить управление ресурсами и повысить эффективность работы. Всё это привело к увеличению прибыли и улучшению качества продукции",
    avatar: avatar_7,
  },
  {
    text: "Очень рад, что выбрал именно эту консалтинговую фирму. Они настоящие профессионалы своего дела и знают, как помочь бизнесу расти и развиваться. Их рекомендации по увеличению оборотов и прибыли оказались очень полезными для нашей компании",
    avatar: avatar_8,
  },
  {
    text: "Благодаря этой компании мы смогли значительно увеличить свою прибыль. Они провели тщательный анализ наших финансовых показателей, предложили стратегии для роста и помогли нам их реализовать. Теперь мы видим положительные результаты и уверены в будущем",
    avatar: avatar_9,
  },
  {
    text: "Работа с NeiroGroup была для нас настоящим открытием. Они показали нам новые подходы к управлению бизнесом, помогли оптимизировать процессы и увеличить прибыль. Мы очень довольны результатами и рекомендуем их всем, кто хочет добиться успеха в своём деле",
    avatar: avatar_10,
  },
];
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
            direction={"vertical"}
            loop={false}
            autoHeight={true}
            slidesPerView={1}
            mousewheel={false}
            pagination={{
              clickable: true,
              el: ".reviews-pagination",
            }}
            modules={[Mousewheel, Pagination]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} style={{ height: "60px" }}>
                <div className="reviews-slider">
                  <div className="reviews-stars">
                    <img src="./img/icons/stars.png" alt="" />
                  </div>
                  <div className="reviews-title">
                    <p>{item.text}</p>
                  </div>
                  <div className="reviews-person">
                    <img src={item.avatar} alt="avatar" />
                    <div className="reviews-name">
                      <h6>Иванов Иван</h6>
                      <p>Ui Deisgner</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="pagination" className="reviews-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
