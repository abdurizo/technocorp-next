import styles from "./Scroll.module.css";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";


import Award from "@/assets/icon/scrollIcon/award.svg";
import AwardW from "@/assets/icon/scrollIcon/awardW.svg";
import Codesandbox from "@/assets/icon/scrollIcon/codesandbox.svg";
import CodesandboxW from "@/assets/icon/scrollIcon/codesandboxW.svg";
import Command from "@/assets/icon/scrollIcon/command.svg";
import CommandW from "@/assets/icon/scrollIcon/commandW.svg";
import { useObserver } from "@/hooks/use-observer";

import { ScrollCard } from "./ScrollCard";


function Scroll() {
  const [isHovered1, setIsHovered1] = useState(false);

  const { t } = useTranslation();

  const content = [
    {
      forHoverImg: AwardW,
      img: Award,
      title: t('quality'),
      desc: t('quality_desc'),
    },
    {
      forHoverImg: CodesandboxW,
      img: Codesandbox,
      title: t('trust'),
      desc: t('trust_desc'),
    },
    {
      forHoverImg: CommandW,
      img: Command,
      title: t('innovation'),
      desc: t('innovation_desc'),
    },
  ];


  const { isVisible: sifatIsVisible, ref: sifatRef } = useObserver({
    threshold: 1,
  });

  useEffect(() => {
    if (sifatIsVisible) {
      setIsHovered1(true);
    } else {
      setIsHovered1(false);
    }
  }, [sifatIsVisible]);

  return (
    <>
      <div className={styles.wrap_1}>
        {content.map((item) => {
          return (
            <ScrollCard
              title={item.title}
              desc={item.desc}
              forHoverImg={item.forHoverImg}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
}

export default Scroll;
