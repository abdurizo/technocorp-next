import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Button from "../Button";

function OtherNews() {
  const news = [
    { id: "1", text: "Barchasi" },
    { id: "2", text: "Mobil ilovalar" },
    { id: "3", text: "Axborot tizimlari" },
    { id: "4", text: "Veb-saytlar" },
    { id: "5", text: "Start-up" },
  ];

  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        navigation={{
          nextEl: ".nextProg",
          prevEl: ".prevProg",
        }}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        {news.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <Button text={item.text} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default OtherNews;
