import classN from "classnames";
import styles from "./Header.module.css";

import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import СircularShadow from "@/components/СircularShadow";
import { getAllNewsCategory } from "@/api/pagesApis/news";
import { useEffect, useState } from "react";

const Filter = dynamic(() => import("@/components/filterCaroucel/Carousel"), {
  ssr: false,
});

function Header(props) {
  const { t } = useTranslation();
  const [newsCategories, setNewsCategories] = useState([]);
  useEffect(() => {
    getAllNewsCategory()
      .then((data) => {
        setNewsCategories(data.map((item) => ({ ...item, text: item.name })));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classN(styles.wrap, "container")}>
      <h2 className={classN("sectionTitle")}>{t("news")} </h2>
      <Filter news={newsCategories} />
      <СircularShadow className={styles.circular} />
      <p className="background_text">{t("news")}</p>
    </div>
  );
}

export default Header;
