import styles from "./Header.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

<<<<<<< HEAD
import Img from '@/img/imgNews/im1.png';
// import Arrow from '@/icon/long_arrow_right.svg'
import Eye from '@/icon/eye.svg';
=======
import Img from "@/img/imgNews/im1.png";
import Arrow from "@/icon/long_arrow_right.svg";
import Eye from "@/icon/eye.svg";
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8

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

<<<<<<< HEAD
    // const { query } = useRouter()    
    // console.log(query)
=======
  const date = new Date(newsDetail.published_date);
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8

  return (
    <>
      <div className={styles.wrap}>
        <BreadCrumbs back={"Yangiliklar"} href={"/news"} />

<<<<<<< HEAD
                <div className={styles.date_wrap}>
                    <p className={styles.date_text}>07-May 2024-yil</p>
                    <div className={styles.date_text}>
                        <div className={styles.icon_eye}>
                            <Image
                                src={Eye}
                                width={'auto'}
                                height={'auto '}
                                alt="Development"
                                className={styles.icon}
                            />
                            <span>584</span>
                        </div>
                    </div>
                </div>
            </div>ФФ
            <h2 className={styles.title}>7-may – O‘zbekiston Respublikasi axborot-kommunikatsiya texnologiyalari sohasi xodimlari kuni!</h2>
            <Image
                src={Img}
                width={'auto'}
                height={'auto   '}
=======
        <div className={styles.date_wrap}>
          <p className={styles.date_text}>{formatData(date)}</p>
          <div className={styles.date_text}>
            <div className={styles.icon_eye}>
              <Image
                src={Eye}
                width={"auto"}
                height={"auto "}
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8
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
