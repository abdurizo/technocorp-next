import styles from "./Card.module.css";

import Image from "next/image";

import ArrowRightCrcle from "@/icon/ArrowRightCircle.svg";
import Img from "@/img/imgNews/im1.png";

function  Card({ project }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.text}>{project.description}</p>

      <div className={styles.image}>
        <Image src={project.image} width={500} height={1000} alt="Img" />
      </div>

      <div className={styles.arrow}>
        <Image
          src={ArrowRightCrcle}
          width={"auto"}
          height={"auto"}
          alt="Img"
          className={styles.icon}
        />
      </div>
    </div>
  );
}

export default Card;
