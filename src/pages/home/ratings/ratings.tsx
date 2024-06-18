import "./style.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  RatingCard,
  IRating,
} from "../../../components/rating-card/rating-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { result } from "./content";

export function Ratings() {
  const content: IRating[] = result;

  return (
    <section className="ratings-section">
      <h1>Embarque em jornadas excepcionais com a MarAberto</h1>
      <h2 className="light">
        Imagine despertar ao som suave das ondas, com vistas deslumbrantes do
        horizonte marítimo, pronto para iniciar uma aventura verdadeiramente
        única. Bem-vindo à MarAberto, onde você pode descobrir e reservar
        experiências excepcionais em barcos, que está transformando a maneira
        como as pessoas exploram os mares.
      </h2>
      <Swiper
        centeredSlides={true}
        modules={[Autoplay]}
        slidesPerView="auto"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        centerInsufficientSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            spaceBetween: 60,
            centeredSlides: false,
          },
        }}
      >
        {content.map((item) => {
          return (
            <SwiperSlide style={{ width: "auto" }}>
              <RatingCard rating={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h2 className="big light">
        <b>1,280 usuários </b>
        já navegaram!
      </h2>
      <a href="/buscar-experiencias">Procurar</a>
    </section>
  );
}
