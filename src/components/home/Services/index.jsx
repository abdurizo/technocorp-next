import styles from "./Services.module.css";
import classN from "classnames";

import Card from "../../Card";
import СircularShadow from "@/components/СircularShadow";
import { motion } from "framer-motion";
import { useObserver } from "@/hooks/use-observer";

const serviceList = [
  {
    gif: "/gif/Gif1.gif",
    image: "/gif/gif1.svg",
    title: "Texnik hujjat ishlab chiqish",
    desc: "texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...",
  },
  {
    gif: "/gif/Gif1.gif",
    image: "/gif/gif2.svg",
    title: "VEB DASTURLASH",
    desc: "texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...",
  },
  {
    gif: "/gif/Gif3.gif",
    image: "/gif/gif3.svg",
    title: "DASTURIY APPARAT QURILMALARINI DASTURLASH",
  },
  {
    gif: "/gif/Gif4.gif",
    image: "/gif/gif4.svg",
    title: "VR VA AR TEXNOLOGIYALARI 360 TUR",
  },
  {
    gif: "/gif/Gif5.gif",
    image: "/gif/gif5.svg",
    title: "MOBIL ILOVA LAR",
  },
  {
    gif: "/gif/Gif6.gif",
    image: "/gif/gif6.svg",
    title: "AXBOROT XAVFSIZLIGINI TA’MINLASH",
  },
  {
    gif: "/gif/Gif7.gif",
    image: "/gif/gif7.svg",
    title: "AKT VA AX AUDIT",
  },
];

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
function Services() {
  const { isVisible, ref } = useObserver({ threshold: 0.3 });

  return (
    <section className={classN(styles.wrap, "container")}>
      <h2 className="sectionTitle">XIZMATLAR</h2>
      <div className={styles.cards} ref={ref}>
        {serviceList.map(({ gif, image, title }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={isVisible ? "visible" : "exit"}
            variants={cardVariants}
          >
            <Card gif={gif} image={image} title={title} />
          </motion.div>
        ))}
      </div>
      <СircularShadow className={styles.circular_min} />
      <СircularShadow className={styles.circular} />
    </section>
  );
}

export default Services;
