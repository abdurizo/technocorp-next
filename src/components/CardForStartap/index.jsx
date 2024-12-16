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
      className={`${styles.wrap} ${styles.nohover_img}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handelCkck}
    >
      {state ? (
        <>
          <div className={styles.image}>
            <Image src={imageOne} fill alt="Slack" />
          </div>
          <p className={styles.text}>{text}</p>
          <div className={styles.sign}>!</div>
        </>
      ) : (
        <>
          <div
            className={styles.text_two}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div className={styles.sign}>x</div>
        </>
      )}
    </div>
  );
}

export default CardForStartap;
