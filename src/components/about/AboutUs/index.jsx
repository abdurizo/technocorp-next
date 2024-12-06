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
            {t('about_us')}
          </h2>
          <p className={styles.text}>{aboutUs.short_description}</p>

          <div className={styles.line}></div>

          <div className={styles.text}>
            <p> Markazning asosiy vazifalari:</p>

            <p>
              {aboutUs.description}
            </p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.top_left}>
            <Image src={aboutUs.photo_1} width={1000} height={1000} alt="of" />
          </div>
          <div className={styles.bottom_right}>
            <Image src={aboutUs.photo_2} width={1000} height={1000} alt="of" />
          </div>
          <div className={styles.top_left}>
            <Image src={aboutUs.photo_3} width={1000} height={1000} alt="of" />
          </div>
          <div className={styles.bottom_right}>
            <Image src={aboutUs.photo_4} width={1000} height={1000} alt="of" />
          </div>
        </div>
        <СircularShadow className={styles.circular_min} />
        <СircularShadow className={styles.circular} />
        <p className="background_t  ext"> {t('about_us')}</p>
      </header>
    </>
  );
}

export default AboutUs;
