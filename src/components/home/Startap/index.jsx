import styles from "./Startap.module.css";
import { useTranslation } from "next-i18next";

import Btn from "@/components/ui/Btn/Btn";
import CardForStartap from "../../CardForStartap";

function Startap({ startups }) {
  console.log(startups, "startups");
  const { t } = useTranslation();
  return (
    <section className="container">
      <h2 className="sectionTitle">{t("start_up_projects")}</h2>
      <div className={styles.grid_content}>
        {startups.map((item, index) => (
          <CardForStartap
            key={index}
            imageOne={item.image}
            imageTwo={item.image}
            text={item.title}
            textTwo={item.description}
          />
        ))}
      </div>
      <Btn text={t("detail")} href="/projects" />
    </section>
  );
}

export default Startap;
