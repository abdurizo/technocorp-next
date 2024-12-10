import styles from "./Card.module.css";
import classN from "classnames";

import Image from "next/image";

import ArrowRightCrcle from "@/icon/ArrowRightCircle.svg";
import Img from "@/img/imgNews/im1.png";

function Card({ project }) {
  return (
    <>
      <h2 className={styles.title}>{project.title}</h2>

      <div
        className={styles.apsolute}
        dangerouslySetInnerHTML={{ __html: project.description }}
      ></div>
      
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: project.description }}
      ></div>

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
    </>
  );
}

export default Card;
