import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Language.module.css";
import classNames from "classnames";

import GlobeEarthIcon from "@/icon/globe-earth.svg";

function Language({ toggle, handelAddClass }) {
  const { i18n, t } = useTranslation();
  const router = useRouter(); 
  const { locale, pathname } = router;
  // const [toggle, setToggle] = useState(false);
  const [activeLocale, setActiveLocale] = useState(locale);
  const [clientLanguage, setClientLanguage] = useState(null);

  // const handelAddClass = () => {
  //   setToggle(!toggle);
  // };
  const handelAddClassLocation = (newLocale) => {
    setActiveLocale(newLocale);
  };
  const handelExecutionFunction = (newLocale) => {
    handelAddClass();
    handelAddClassLocation(newLocale);
    router.push(pathname, pathname, { locale: newLocale });
  };

  useEffect(() => {
    setClientLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    setActiveLocale(locale); // Обновление языка при изменении маршрута
  }, [locale]);

  return (
    <div className={styles.language_wrap}>
      <div className={`${styles.language} ${toggle ? styles.uncover : ""}`}>
        {activeLocale !== "uz" && (
          <span
            onClick={() => handelExecutionFunction("uz")}
            className={activeLocale === "uz" ? styles.active : styles.noactive}
          >
            UZ
          </span>
        )}

        {activeLocale !== "ru" && (
          <span
            onClick={() => handelExecutionFunction("ru")}
            className={activeLocale === "ru" ? styles.active : styles.noactive}
          >
            RU
          </span>
        )}

        {activeLocale !== "en" && (
          <span
            onClick={() => handelExecutionFunction("en")}
            className={activeLocale === "en" ? styles.active : styles.noactive}
          >
            EN
          </span>
        )}
      </div>
      <div className={styles.wrap_icon} onClick={handelAddClass}>
        <span className={styles.content}>
          {clientLanguage === "uz"
            ? "UZ"
            : clientLanguage === "ru"
            ? "RU"
            : "EN"}
        </span>
        <Image
          src={GlobeEarthIcon}
          width={"auto"}
          height={"auto"}
          alt="icon glasses"
          className={styles.icon}
        />
      </div>
    </div>
  );
}

export default Language;
