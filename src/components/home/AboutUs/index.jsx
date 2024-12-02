import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./AboutUs.module.css";
import classN from "classnames";

import Play from "@/icon/play.svg";

import СircularShadow from "@/components/СircularShadow";
import { AnimatePresence, motion } from "framer-motion";
import { useObserver } from "@/hooks/use-observer";
const cardVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};
function AboutUs({ aboutUs }) {
  const { t } = useTranslation();
  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isVisible, ref } = useObserver();

  // Функция для открытия модального окна
  const openModal = () => setIsModalOpen(true);
  // Функция для закрытия модального окна
  const closeModal = () => setIsModalOpen(false);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains(styles.modal)) {
      closeModal();
    }
  };

  console.log("aboutUs", aboutUs);

  return (
    <>
      <AnimatePresence>
        <section className={classN(styles.wrap, "container")} ref={ref}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "exit"}
            className={styles.textSection}
          >
            <h2 className={classN(styles.title, "sectionTitle")}>
              {t('about_us')}
            </h2>
            <p className={styles.text}>
              {aboutUs.description}
            </p>

            <div className={styles.link}>
              <Link href={'/about'} className={styles.linkText}>{ t('detail')}</Link>
              <div onClick={openModal} className={styles.playIcon}>
                <span>
                  <Image
                    src={Play}
                    width={"auto"}
                    height={"auto"}
                    alt="icon play"
                  />
                </span>
              </div>
            </div>

            <p className={styles.text}>{aboutUs.short_description}</p>

          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "exit"}
            className={styles.imageSection}
          >
            <div className={styles.top_left}>
              <Image
                src={aboutUs.photo_1}
                width={1000}
                height={1000}
                alt="of"
              />
            </div>
            <div className={styles.bottom_right}>
              <Image
                src={aboutUs.photo_2}
                width={1000}
                height={1000}
                alt="of"
              />
            </div>
            <div className={styles.top_left}>
              <Image
                src={aboutUs.photo_3}
                width={1000}
                height={1000}
                alt="of"
              />
            </div>
            <div className={styles.bottom_right}>
              <Image
                src={aboutUs.photo_4}
                width={1000}
                height={1000}
                alt="of"
              />
            </div>
          </motion.div>

          {isModalOpen && (
            <div className={styles.modal} onClick={handleBackgroundClick}>
              <div className={styles.modalContent}>
                <button onClick={closeModal} className={styles.closeButton}>
                  X
                </button>
                <iframe
                  width="860"
                  height="560"
                  src="https://www.youtube.com/embed/-ACo9Zh3f9k?autoplay=1"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          <СircularShadow className={styles.circular_min} />
          <СircularShadow className={styles.circular} />
        </section>
      </AnimatePresence>
    </>
  );
}

export default AboutUs;
