import styles from "./OurProjects.module.css";
import classN from "classnames";

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
import { useObserver } from "@/hooks/use-observer";

// const variantsAnimation = {
//   initial: {
//     y: 100,
//   },
//   visible: { y: 0 },
//   exit: { y: 100 },
//   transition: {
//     type: "spring",
//   },
// };

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
function OurProjects({ projects }) {
  const { isVisible, ref } = useObserver({ threshold: 0.3 });
  return (
    <section className={classN(styles.wrap, "container")}>
      <h2 className="sectionTitle mb-10">BIZNING LOYIHALAR</h2>
      <div className={"grid grid-cols-3 grid-rows-2 gap-4"} ref={ref}>
        {projects.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "exit"}
            className={classN(styles.item, item.prolonged && "row-span-2")}
          >
            <a href={item.link} target="_blank">
              <div className={styles.item_back}>
                <div className={styles.icon_wrap}>
                  <Image
                    src={item.organization.icon}
                    width={50}
                    height={50}
                    alt="Adliya"
                  />
                </div>
                <p>{item?.organization?.name}</p>
              </div>

              <Image
                className={classN(styles.image, "object-cover")}
                src={item.image}
                width={1000}
                height={1000}
                alt="of"
              />
            </a>
          </motion.div>
        ))}

        {/* <motion.div
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
        </motion.div> */}

        {/* <div className={classN(styles.item6, styles.item)}>
          <div className={styles.item_back}>
            <div className={styles.icon_wrap}>
              <Image
                src={KuchAdolat}
                width={"auto"}
                height={"auto"}
                alt="KuchAdolat"
              />
            </div>

            <p>Milliy tiklanish demokratik partiyasi</p>
          </div>
          <Image
            className={styles.image}
            src={MilliTiklanish}
            width={"auto"}
            height={"auto"}
            alt="of"
          />
        </div>

        <div className={classN(styles.item7, styles.item)}>
          <div className={styles.item_back}>
            <div className={styles.icon_wrap}>
              <Image
                src={IchkiIshlarIcon}
                width={"auto"}
                height={"auto"}
                alt="KuchAdolat"
              />
            </div>

            <p>O‘zbеkiston Rеspublikаsi Ichki ishlаr vаzirligi</p>
          </div>
          <Image
            className={styles.image}
            src={IchkiIshlarImg}
            width={"auto"}
            height={"auto"}
            alt="of"
          />
        </div> */}
      </div>
      <Btn />
    </section>
  );
}

export default OurProjects;
