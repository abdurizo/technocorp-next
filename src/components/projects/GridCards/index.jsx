import styles from "./GridCards.module.css";
import classN from "classnames";

import Card from "../Card";
import { useObserver } from "@/hooks/use-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};
function GridCards({ projects }) {
  const { isVisible, ref } = useObserver({ threshold: 0.1 });

  return (
    <section className={styles.wrap} ref={ref}>
      {projects.results.map((project, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={isVisible ? "visible" : "exit"}
          variants={cardVariants}
        >
          <Card project={project} />
        </motion.div>
      ))}
    </section>
  );
}

export default GridCards;
