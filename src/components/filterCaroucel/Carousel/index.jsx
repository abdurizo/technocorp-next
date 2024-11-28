import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/router";

function OtherNews() {
  const [activetab, setActiveTab] = useState(undefined);

  const router = useRouter();
  const news = [
    { id: undefined, text: "Barchasi" },
    { id: 1, text: "Axborot tizimlari" },
    { id: 3, text: "Veb-saytlar" },
    { id: 4, text: "Start-up" },
    { id: 2, text: "Mobil ilovalar" },
  ];

  const setActiveTabHandler = (activeTab) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          tab: activeTab,
        },
      },
      undefined,
      {
        scroll: false,
      }
    );

    setActiveTab(activeTab);
  };

  return (
    <>
      <div className="w-full flex items-center gap-4 mb-10">
        {news.map((item, id) => {
          return (
            <Button
              text={item.text}
              onClick={() => setActiveTabHandler(item.id)}
              active={activetab === item.id ? "active" : ""}
            />
          );
        })}
      </div>
    </>
  );
}

export default OtherNews;
