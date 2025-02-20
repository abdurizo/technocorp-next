// import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import ArrowLeftCarousel from "@/icon/ArrowLeftCarouselGreen.svg";
import ArrowRightCarousel from "@/icon/ArrowRightCarouselGreen.svg";
import CardProgrammer from "@/components/CardProgrammer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import KhodjabekovaSh from "@/img/imgProgrammer/KhodjabekovaShakhnoza.jpg";
import RasulovKomiljon from "@/img/imgProgrammer/RasulovKomiljon.jpg";

export default function CarouselProgrammer({ developers }) {
  return (
    <>
      <Swiper
        // cssMode={true}
        slidesPerView={3}
        spaceBetween={24}
        navigation={{
          nextEl: ".nextProg",
          prevEl: ".prevProg",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000, // Задержка между автопрокрутками в миллисекундах
          disableOnInteraction: false, // Продолжать авто прокрутку после взаимодействия
        }}
        className="mySwiper"
      >
        {developers.map((developer) => (
          <SwiperSlide>
            <CardProgrammer
              image={developer.photo}
              name={developer.fullname}
              profession={developer.position_text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prevProg arrow">
        <Image
          src={ArrowLeftCarousel}
          width={"auto"}
          height={"auto"}
          alt="Development"
        />
      </div>
      <div className="nextProg arrow">
        <Image
          src={ArrowRightCarousel}
          width={"auto"}
          height={"auto"}
          alt="Development"
        />
      </div>
    </>
  );
}
