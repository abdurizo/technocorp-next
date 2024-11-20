import React, { useEffect, useRef } from "react";
import styles from "./Card.module.css";
import {
  useMotionValue,
  motion,
  animate,
  useTransform,
  useInView,
} from "framer-motion";

function Card({ count, text }) {
  const countEmployee = useMotionValue(0);
  const ref = useRef();
  const isInView = useInView(ref);
  const rounded = useTransform(
    countEmployee,
    (latest) => `+${Math.round(latest)}`
  );

  useEffect(() => {
    if (isInView) {
      const animation = animate(countEmployee, count, { duration: 5 });

      return animation.stop;
    }

    return;
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={styles.card}
      >
        <motion.p className={styles.count}>{rounded}</motion.p>
        <p className={styles.text}>{text}</p>
      </motion.div>
      {/* <div className={styles.card}>
            <p className={styles.count}>+14</p>
            <p className={styles.text}>Muvaffaqiyatli loyihalar</p>
          </div>
          <div className={styles.card}>
            <p className={styles.count}>+14</p>
            <p className={styles.text}>Xursand mijozlarimiz</p>
          </div>
          <div className={styles.card}>
            <p className={styles.count}>+2</p>
            <p className={styles.text}>Ish tajribasi</p>
          </div> */}
    </>
  );
}

export default Card;
