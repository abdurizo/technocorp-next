import styles from "./Structure.module.css";
import classN from "classnames";

import { useTranslation } from "next-i18next";

import Card from "../Card";
import СircularShadow from "@/components/СircularShadow";

function Structure({ centerStructure }) {
  const { t } = useTranslation();

  console.log(centerStructure, "centerStructure");


  return (
    <>
      <p className={styles.background_text}>{ t('structure_center_together')}</p>


      <header className={classN("container", styles.wrap)}>
        <h2 className={classN("sectionTitle", styles.title)}>
          {t('structure_center')}
        </h2>

        <div className="relative">
          <div className={classN(styles.director, "mb-10 relative z-10")}>
            <Card card={centerStructure[0]} />
          </div>

          <div className="border border-[#6F6F6F] border-b-0 h-[20rem] w-[80%] absolute  -bottom-[33%] right-0 left-[9%]"></div>
        </div>

        <div className={styles.grid}>
          {centerStructure
            .slice(1)
            .filter((card) => card.position !== 3)
            .map((card) => (
              <Card key={card.id} card={card} />
            ))}
        </div>
        <СircularShadow className={styles.circular_min} />
        <СircularShadow className={styles.circular} />
      </header>
    </>
  );
}

export default Structure;
