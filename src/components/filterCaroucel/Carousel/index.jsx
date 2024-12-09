import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/router";

function OtherNews({ news }) {
  const [activetab, setActiveTab] = useState(undefined);
  const router = useRouter();

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
      <div className="grid grid-cols-1 justify-center items-center gap-4  sm:grid-cols-3">
        {news?.map((item, id) => {
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
