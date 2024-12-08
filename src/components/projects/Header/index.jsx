import classN from "classnames";
import styles from "./Header.module.css";

import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";

import СircularShadow from "@/components/СircularShadow";
import Filter from '@/components/filterCaroucel/Button';
// const Filter = dynamic(() => import("@/components/filterCaroucel/Carousel"), {
//   ssr: false,
// });


function Header(props) {
  const { t } = useTranslation();
  const [activetab, setActiveTab] = useState(undefined);
  const router = useRouter();
  const news = [
    { id: undefined, text: t('all') },
    { id: 1, text: t('information_systems') },
    { id: 3, text: t('website') },
    { id: 4, text: "Start-up" },
    { id: 2, text: t('mobile_applications') },
    { id: 5, text: t('mobile_applications') },
  ];
  const setActiveTabHandler = (activeTab) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          tab: activeTab,
        },
      },
      undefined,
      {
        scroll: false,
      }
    );

    setActiveTab(activeTab);
  };

  return (
    <header className={classN(styles.wrap)}>

      <h2 className={classN("sectionTitle")}>{t('projects_page')} </h2>
      <div className="w-full flex items-center gap-4 mb-10">
        {
          news.map((item, id) => {
            return (
              <Filter
                key={id}
                text={item.text}
                onClick={() => setActiveTabHandler(item.id)}
                active={activetab === item.id ? "active" : ""}
              />
            )
          })
        }
      </div>

      {/* <Filter news={props.news} /> */}

      <СircularShadow className={styles.circular} />
      <p className="background_text">{t("projects_page")}</p>
    </header>
  );
}

export default Header;
