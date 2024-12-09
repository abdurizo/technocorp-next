import styles from "./CardForStartap.module.css";

import { useState } from "react";
import Image from "next/image";

function CardForStartap({ imageOne, imageTwo, text, textTwo }) {
  const [isHovered, setIsHovered] = useState(false);
  const [state, setState] = useState(true);

  const handelCkck = () => {
    setState(!state);
  };

  return (
    <div
      className={`${styles.wrap} ${
        isHovered ? styles.hover_img : styles.nohover_img
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handelCkck}
    >
      {state ? (
        <>
          <div className={styles.image}>
            <Image
              src={isHovered ? imageTwo : imageOne}
              width={180}
              height={180}
              alt="Slack"
            />
          </div>
          <p className={styles.text}> {text}</p>
          <div className={styles.sign}>!</div>
        </>
      ) : (
        <>
          <p className={styles.text_two}>{textTwo}</p>
          <div className={styles.sign}>x</div>
        </>
      )}
    </div>
  );
}

export default CardForStartap;
