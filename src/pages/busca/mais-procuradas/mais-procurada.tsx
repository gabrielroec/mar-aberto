import "./style.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { results } from "../content";
import { ResultCard } from "../../../components/result-card/result-card";
import { IExperiencia } from "../../../models/experiencia";

export function MaisProcurados() {
  let content: IExperiencia[] = results;
  return (
    <section className="mais-procurados-section">
      <h1 className="ocean-blue">Experiências mais procuradas</h1>
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
              <ResultCard content={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
