import styles from "./Services.module.css";
import classN from "classnames";

import Card from "../../CardForServis";
import СircularShadow from "@/components/СircularShadow";
import { motion } from "framer-motion";
import { useObserver } from "@/hooks/use-observer";
import { useTranslation } from "next-i18next";

const serviceList = [
  {
    id: "1",
    href: "Texnik hujjat",
    gif: "/gif/Gif1.gif",
    image: "/gif/gif1.svg",
    title: "Texnik hujjat ishlab chiqish",
    desc: "texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...",
  },
  {
    id: "2",
    gif: "/gif/Gif1.gif",
    image: "/gif/gif2.svg",
    title: "VEB DASTURLASH",
  },
  {
    id: "3",
    gif: "/gif/Gif3.gif",
    image: "/gif/gif3.svg",
    title: "DASTURIY APPARAT QURILMALARINI DASTURLASH",
  },
  {
    id: "4",
    gif: "/gif/Gif4.gif",
    image: "/gif/gif4.svg",
    title: "VR VA AR TEXNOLOGIYALARI 360 TUR",
  },
  {
    id: "5",
    gif: "/gif/Gif5.gif",
    image: "/gif/gif5.svg",
    title: "MOBIL ILOVA LAR",
  },
  {
    id: "6",
    gif: "/gif/Gif6.gif",
    image: "/gif/gif6.svg",
    title: "AXBOROT XAVFSIZLIGINI TA’MINLASH",
  },
  {
    id: "7",
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
function Services({ services }) {
  const { isVisible, ref } = useObserver({ threshold: 0.3 });
  const { t } = useTranslation();

  return (
    <section className={classN(styles.wrap, "container")}>
      <h2 className="sectionTitle">{ t('services_title')}</h2>
      <div className={styles.cards} ref={ref}>
        {services.map(({ gif, image, title, href, id }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={isVisible ? "visible" : "exit"}
            variants={cardVariants}
          >
            <Card gif={gif} image={image} title={title} href={href} id={id} />
          </motion.div>
        ))}
      </div>
      <СircularShadow className={styles.circular_min} />
      <СircularShadow className={styles.circular} />
    </section>
  );
}

export default Services;
