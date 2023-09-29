import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import NOCUWEB from "../../img/nocuweb.png";
import IWWRMP from "../../img/iwwrmp.png";
import NOCU from "../../img/nocu.png";
import NPQS from "../../img/npqs.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

    
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
