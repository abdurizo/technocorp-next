import styles from "./AdoutUs.module.css";
import classN from "classnames";

import Image from "next/image";
import { useTranslation } from "next-i18next";

import СircularShadow from "@/components/СircularShadow";

function AboutUs({ aboutUs }) {
  const { t } = useTranslation();
  return (
    <>
      <header className={classN(styles.wrap, "container")}>
        <div className={styles.textSection}>
          <h2 className={classN(styles.title, "sectionTitle")}>
            {t("about_us")}
          </h2>
          <p className={styles.text}>{aboutUs.short_description}</p>

          <div className={styles.line}></div>

          <div className={styles.text}>
            <p>{aboutUs.description}</p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.top_left}>
            <Image
              src={aboutUs.photo_1}
              fill
              alt="of"
              className="object-cover"
            />
          </div>
          <div className={styles.bottom_right}>
            <Image
              src={aboutUs.photo_2}
              fill
              alt="of"
              className="object-cover"
            />
          </div>
          <div className={styles.top_left}>
            <Image
              src={aboutUs.photo_3}
              fill
              alt="of"
              className="object-cover"
            />
          </div>
          <div className={styles.bottom_right}>
            <Image
              src={aboutUs.photo_4}
              fill
              alt="of"
              className="object-cover"
            />
          </div>
        </div>
        <СircularShadow className={styles.circular_min} />
        <СircularShadow className={styles.circular} />
        <p className="background_text"> {t("about_us")}</p>
      </header>
    </>
  );
}

export default AboutUs;
