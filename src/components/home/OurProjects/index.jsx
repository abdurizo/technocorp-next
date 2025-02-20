import styles from "./OurProjects.module.css";
import classN from "classnames";

import { useTranslation } from "next-i18next";

import Image from "next/image";
import AdliyaVaz from "@/img/imgProject/adliyaVaz.jpeg";
import TransportXizmat from "@/img/imgProject/transportXizmat.jpeg";
import Arxiv from "@/img/imgProject/arxiv.jpg";
import Yollar from "@/img/imgProject/yollar.jpg";
import UztransgazImg from "@/img/imgProject/uztransgaz.jpg";
import IchkiIshlarImg from "@/img/imgProject/ichkiIshlar.jpg";
import MilliTiklanish from "@/img/imgProject/milliTiklanish.png";

import KuchAdolat from "@/img/KuchAdolat.png";
import Adliya from "@/img/adliya.png";
import ToshT from "@/img/toshT.png";
import Ozarxiv from "@/img/ozarxiv.png";
import Yoll from "@/img/yoll.png";
import UztransgazIcon from "@/img/uztransgaz.png";
import IchkiIshlarIcon from "@/img/ichki_ishlar.png";
import { motion } from "framer-motion";

import Btn from "@/components/ui/Btn/Btn";

const variantsAnimation = {
  initial: {
    y: 100,
  },
  whileInView: { y: 0 },
  viewviewport: { amount: 1 },
  transition: {
    type: "spring",
  },
};

function OurProjects() {
  const { t } = useTranslation();
  return (
    <section className={classN(styles.wrap, "container")}>
      {/* <h2 className="sectionTitle mb-10">{ t('our_projects')}</h2> */}
      <div className={styles.grid_container}>
        <motion.div
          {...variantsAnimation}
          className={classN(styles.item1, styles.item)}
        >
          <div className={styles.item_back}>
            <div className={styles.icon_wrap}>
              <Image src={Adliya} width={"auto"} height={"auto"} alt="Adliya" />
            </div>
            <p>O‘zbekiston Respublikasi Adliya vazirligi</p>
          </div>

          <Image
            className={styles.image}
            src={AdliyaVaz}
            width={"auto"}
            height={"auto"}
            alt="of"
          />
        </motion.div>

        <motion.div
          {...variantsAnimation}
          className={classN(styles.item2, styles.item)}
        >
          <div className={styles.item_back}>
            <div className={styles.icon_wrap}>
              <Image src={ToshT} width={"auto"} height={"auto"} alt="ToshT" />
            </div>
            <p>Toshshahartransxizmat</p>
          </div>

          <Image
            className={styles.image}
            src={TransportXizmat}
            width={"auto"}
            height={"auto"}
            alt="of"
          />
        </motion.div>

        <motion.div
          {...variantsAnimation}
          className={classN(styles.item3, styles.item)}
        >
          <div className={styles.item_back}>
            <div className={styles.icon_wrap}>
              <Image
                src={Ozarxiv}
                width={"auto"}
                height={"auto"}
                alt="Ozarxiv"
              />
            </div>
            <p>“O‘zarxiv” agentligi</p>
          </div>

          <Image
            className={styles.image}
            src={Arxiv}
            width={"auto"}
            height={"auto"}
            alt="of"
          />
        </motion.div>

        <motion.div
          {...variantsAnimation}
          className={classN(styles.item4, styles.item)}
        >
          <div className={styles.item_back}>
            <div className={styles.icon_wrap}>
              <Image
                src={Yoll}
                width={"auto"}
                height={"auto"}
                alt="KuchAdolat"
              />
            </div>
            <p>AVTOMOBIL YO‘LLARI QO‘MITASI</p>
          </div>

          <Image
            className={styles.image}
            src={Yollar}
            width={"auto"}
            height={"auto"}
            alt="of"
          />
        </motion.div>

        <motion.div
          {...variantsAnimation}
          className={classN(styles.item5, styles.item)}
        >
          <div className={styles.item_back}>
            <div className={styles.icon_wrap}>
              <Image
                src={UztransgazIcon}
                width={"auto"}
                height={"auto"}
                alt="UztransgazIcon"
              />
            </div>

            <p>"O‘ztransgaz" AJ </p>
          </div>
          <Image
            className={styles.image}
            src={UztransgazImg}
            width={"auto"}
            height={"auto"}
            alt="of"
          />
        </motion.div>
        
      </div>
      <Btn text={t('detail')} href="/projects"/>
    </section>
  );
}

export default OurProjects;
