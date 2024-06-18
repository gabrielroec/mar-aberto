import "./style.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { content } from "./content";
import { HistoriaCard } from "../../../../components/historia-card/historia-card";

export function ConhecaHistorias() {
  const result = content;
  return (
    <section className="conheca-historias-section">
      <h1 className="white">Conheça nossas histórias</h1>
      <Swiper
        centeredSlides={true}
        watchOverflow={true}
        slidesPerView="auto"
        loop={true}
        centerInsufficientSlides={true}
        breakpoints={{
          600: {
            spaceBetween: 60,
            centeredSlides: false,
          },
        }}
      >
        {
          result.map((item) => {
            return (
              <SwiperSlide style={{ width: "auto" }}>
                <HistoriaCard cardContent={item} />
              </SwiperSlide>
            );
      })}
      </Swiper>
    </section>
  );
}
