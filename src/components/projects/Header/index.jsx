import classN from "classnames";
import styles from "./Header.module.css";

import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import СircularShadow from "@/components/СircularShadow";
const Filter = dynamic(() => import("@/components/filterCaroucel/Carousel"), {
  ssr: false,
});

function Header(props) {
  const { t } = useTranslation();
  return (
    <header className={classN(styles.wrap)}>
      <h2 className={classN("sectionTitle")}>{t("projects_page")} </h2>
      <Filter news={props.news} />
      <СircularShadow className={styles.circular} />
      <p className="background_text">{t("projects_page")}</p>
    </header>
  );
}

export default Header;
