import styles from "./Programmers.module.css";
import classN from "classnames";

import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import CardP from "@/components/CardProgrammer";
import СircularShadow from "@/components/СircularShadow";
// import Carousel from "@/components/CarouselProgrammer";
const Carousel = dynamic(() => import("@/components/CarouselProgrammer"), {
  ssr: false,
});

function Programmers({ developers,title,background_text }) {
  const { t } = useTranslation();
  return (
    <section className={classN(styles.wrap, "container")}>
      <h2 className={classN(styles.title, "sectionTitle")}>{title} </h2>
      <div className={styles.carousel}>
        <Carousel developers={developers} />
      </div>

      <p className="background_text">{ background_text}</p>
      <СircularShadow className={styles.circular} />
    </section>
  );
}

export default Programmers;
