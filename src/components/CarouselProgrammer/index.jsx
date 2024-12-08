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
import { Navigation, Pagination } from "swiper/modules";

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
            slidesPerView: 3
          },
          450: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          }

        }}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
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

        {/* 
        <SwiperSlide>
          <CardProgrammer
            image={RasulovKomiljon}
            name={"Rasulov Komiljon Uktamjonovich"}
            profession={"Back-end developer"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProgrammer
            image={KhodjabekovaSh}
            name={"Khodjabekova Shakhnoza Baxodirovna"}
            profession={"Back-end developer"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProgrammer
            image={RasulovKomiljon}
            name={"Rasulov Komiljon Uktamjonovich"}
            profession={"Back-end developer"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProgrammer
            image={KhodjabekovaSh}
            name={"Khodjabekova Shakhnoza Baxodirovna"}
            profession={"Back-end developer"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProgrammer
            image={RasulovKomiljon}
            name={"Rasulov Komiljon Uktamjonovich"}
            profession={"Back-end developer"}
          />
        </SwiperSlide> */}
      </Swiper>
      <div className="prevProg arrow">
        <Image
          src={ArrowLeftCarousel}
          width={500}
          height={500}
          alt="Development"
        />
      </div>
      <div className="nextProg arrow">
        <Image
          src={ArrowRightCarousel}
          width={500}
          height={500}
          alt="Development"
        />
      </div>
    </>
  );
}
