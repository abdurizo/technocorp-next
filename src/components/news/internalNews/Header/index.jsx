import styles from "./Header.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

import Img from "@/img/imgNews/im1.png";
import Arrow from "@/icon/long_arrow_right.svg";
import Eye from "@/icon/eye.svg";

import BreadCrumbs from "@/components/BreadCrumbs";
const formatData = (date) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replace(",", "-yil");

  return formattedDate;
};
function Header({ newsDetail }) {
  const { query } = useRouter();

  const date = new Date(newsDetail.published_date);

  return (
    <>
      <div className={styles.wrap}>
        <BreadCrumbs back={"Yangiliklar"} href={"/news"} />

        <div className={styles.date_wrap}>
          <p className={styles.date_text}>{formatData(date)}</p>
          <div className={styles.date_text}>
            <div className={styles.icon_eye}>
              <Image
                src={Eye}
                width={"auto"}
                height={"auto "}
                alt="Development"
                className={styles.icon}
              />
              <span>{newsDetail.views}</span>
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.title}>{newsDetail.title}</h2>
      <Image
        src={newsDetail.image.src}
        width={1000}
        height={1000}
        alt="Development"
        className={styles.image}
      />
    </>
  );
}

export default Header;
