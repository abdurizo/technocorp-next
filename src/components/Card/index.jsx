import { useState } from "react";
import Link from "next/link";

import styles from "./Card.module.css";

import Image from "next/image";

function Card({ gif, image, title, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.title_wrap}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.image}>
          <Image
            src={isHovered ? gif : image}
            width={500}
            height={500}
            alt="Development"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.sup_text}>
        <p className={styles.text}>{text}</p>

        <div className={styles.wrap_but}>
          <Link className={styles.but} href={"#!"}>
            BATAFSIL
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
