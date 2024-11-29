import styles from "./AdoutUs.module.css";
import classN from "classnames";

import Image from "next/image";

import СircularShadow from "@/components/СircularShadow";

function AboutUs({ aboutUs }) {
  return (
    <>
      <header className={classN(styles.wrap, "container")}>
        <div className={styles.textSection}>
          <h2 className={classN(styles.title, "sectionTitle")}>
            BIZ HAQIMIZDA
          </h2>
          <p className={styles.text}>{aboutUs.short_description}</p>

          <div className={styles.line}></div>

          <div className={styles.text}>
            <p> Markazning asosiy vazifalari:</p>

            <p>
              {/* texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek,
              axborot portallari va veb-resurslarni rivojlantirish va
              jadallashtirish masalalarida texnik ko‘mak berish; davlat
              organlari va boshqa tashkilotlar faoliyatining ochiqligini
              ta’minlash maqsadida “raqamli va axborot jamiyati”ni
              shakllantirish, shuningdek, texnik infratuzilmani
              rivojlantirishning muhim masalalari bo‘yicha tahliliy
              materiallarni tayyorlash; axborot tizimlari va axborot
              resurslarini yaratish, ular o‘rtasida xavfsiz ma’lumot
              almashinuvini ta’minlash, tashqi xosting maydonchalari bilan
              integratsiya masalalari bo‘yicha konsalting xizmatlari
              ko‘rsatishni tashkil etish; */}

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
        <p className="background_text">BIZ HAQIMIZDA</p>
      </header>
    </>
  );
}

export default AboutUs;
