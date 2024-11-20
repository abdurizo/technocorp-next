import styles from "./Scroll.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useObserver } from "@/hooks/use-observer";
import cn from "classnames";

export function ScrollCard({ title, desc, img, forHoverImg }) {
  const [isHovered1, setIsHovered1] = useState(false);
  const { isVisible: sifatIsVisible, ref: sifatRef } = useObserver({
    threshold: 1,
    rootMargin: "10px 0px 0px 0px",
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
      <div
        ref={sifatRef}
        className={styles.block}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div className={styles.icon_wrap}>
          <div className={styles.icon_image}>
            <Image
              src={isHovered1 ? forHoverImg : img}
              width={"auto"}
              height={"auto"}
              alt="Award"
              className={styles.icon}
            />
          </div>
          <p
            className={cn(
              styles.icon_text,
              isHovered1 ? "text-white" : "text-[#424242]"
            )}
          >
            {title}
          </p>
        </div>
        <div className={styles.line_wrap_1}>
          <div
            className={cn(styles.line_1, isHovered1 ? styles.lineHover : "")}
          ></div>
          <div
            className={cn(
              styles.circle_1,
              isHovered1 ? styles.circleHover : ""
            )}
          ></div>
        </div>
        <div className={styles.text_wrap_1}>
          <p className={cn(styles.text_1, isHovered1 ? styles.text1Hover : "")}>
            {desc}
          </p>
        </div>
      </div>
    </>
  );
}
