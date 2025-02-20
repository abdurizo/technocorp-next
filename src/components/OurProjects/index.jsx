import styles from "./OurProjects.module.css";
import classN from "classnames";

import Image from "next/image";

import { motion } from "framer-motion";

import Btn from "@/components/ui/Btn/Btn";
import { useObserver } from "@/hooks/use-observer";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("common");

  console.log("projects", projects);

  return (
    <section className={classN(styles.wrap, "container")}>
      <h2 className="sectionTitle mb-10">{t("our_projects")}</h2>
      <div
        className={"grid grid-cols-2  sm:grid-cols-3 grid-rows-2 gap-4"}
        ref={ref}
      >
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
                    // width={50}
                    // height={50}

                    fill
                    alt="Adliya"
                  />
                </div>
                <p>{item?.organization?.name}</p>
              </div>

              <Image
                className={classN(styles.image, "object-cover")}
                src={item.image}
                fill
                alt="of"
              />
            </a>
          </motion.div>
        ))}
      </div>
      <Btn text={t("detail")} href="/projects" />
    </section>
  );
}

export default OurProjects;
