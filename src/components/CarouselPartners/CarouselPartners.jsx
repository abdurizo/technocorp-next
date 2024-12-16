import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import styles from "./CarouselPartners.module.css";

import { useEffect, useState } from "react";
import { axiosT } from "@/api/axios";

function Carousel() {
  const [partnersList, setPartnersList] = useState([]);

  useEffect(() => {
    axiosT
      .get("/partner")
      .then(({ data }) => {
        setPartnersList(
          data.map((item) => ({
            ...item,
            icon: item.icon.replace("https://", "http://"),
          }))
        );
      })
      .catch((er) => {});
  }, []);

  return (
    <section className="carousel_section">
      <Marquee autoFill={true} pauseOnHover={true}>
        {partnersList.map((item) => {
          return (
            <Link target={"_blank"} href={item.link}>
              <div className="carousel_wrap h-[100px]">
                <Image
                  src={item.icon}
                  width={600}
                  height={600}
                  alt="adliya"
                  className={styles.image}
                />
              </div>
            </Link>
          );
        })}
      </Marquee>
    </section>
  );
}

export default Carousel;
