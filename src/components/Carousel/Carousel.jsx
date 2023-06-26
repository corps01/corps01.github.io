import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.css";
import img1 from "../../assests/img/bright_coders.png";
import img2 from "../../assests/img/ludo_lab.png";
import img3 from "../../assests/img/modern_javascript.png";
import img4 from "../../assests/img/rockstars.png";
import img5 from "../../assests/img/tofl.png";
import img6 from "../../assests/img/certificado_cropped.png";

// import required modules
import { Pagination } from "swiper";
import { Box } from "@mui/material";

export default function Carousel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: { xs: "4rem", md: "12rem" },
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>
        <b>Certifications</b>
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide className="swiper-slide">
          <img src={img1} alt="a" />
          <b>Web Dev Bootcamp - BC</b>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img4} alt="a" />
          <b>Rockstars IT Program</b>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img3} alt="a" />
          <b>Complete Modern Javascript</b>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img2} alt="a" />
          <b>Videgame Fair</b>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img5} alt="a" />
          <b>TOFL English Certification</b>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img6} alt="a" />
          <b>Software Developer Degree, University of Colima </b>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
