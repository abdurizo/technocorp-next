import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import styles from "./Card.module.css";

import Image from "next/image";

function Card({ gif, image, title, desc, href, id }) {
  console.log("gif", gif);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.title_wrap}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.image}>
          <img
            src={isHovered ? gif : image}
            fill
            alt="Development"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.sup_text}>
        <p className={styles.text}>{desc}</p>

        <div className={styles.wrap_but}>
          <Link
            className={styles.but}
            href={{
              pathname: "/servise/" + id,
            }}
          >
            {t("detail")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
