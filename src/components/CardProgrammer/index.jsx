import styles from "./CardProgrammer.module.css";

import Image from "next/image";

import KhodjabekovaSh from "@/img/imgProgrammer/KhodjabekovaShakhnoza.jpg";

function CardProgrammer({ image, name, profession }) {
  return (
    <div className={styles.card}>
      <div className={styles.image_wrap}>
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="Development"
          className={"object-cover"}
        />
      </div>
      <div className={styles.about_programmer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.profession}>{profession}</p>
      </div>
    </div>
  );
}

export default CardProgrammer;
