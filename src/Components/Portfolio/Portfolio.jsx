import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import NOCUWEB from "../../img/nocuweb.png";
import NPQS from "../../img/npqs.png";
import IWWRMP from "../../img/iwwrmp.png";
import NOCU from "../../img/nocu.png";


const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={NOCUWEB} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NOCU} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IWWRMP} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NPQS} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;