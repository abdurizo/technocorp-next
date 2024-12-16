import styles from "./CardNew.module.css";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import Eye from "@/icon/eye.svg";
import RightGreen from "@/icon/right_green.svg";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
const formatData = (date) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replace(",", "-yil");

  return formattedDate;
};

function CardProgrammer({
  image,
  href,
  profession,
  id,
  desc,
  published_date,
  views,
}) {
  const date = new Date(published_date);
  const { t } = useTranslation();
  const [sanitizedDesc, setSanitizedDesc] = useState("");

  useEffect(() => {
    // Ensure DOMPurify runs only on the client
    const cleanDesc = DOMPurify.sanitize(desc || "");
    setSanitizedDesc(cleanDesc);
  }, [desc]);
  return (
    <div className={styles.card}>
      <div className={styles.image_wrap}>
        <Image src={image} width={600} height={335} alt="Development" />
      </div>
      <h3 className={styles.title}>{href}</h3>

      <div className={styles.content}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: sanitizedDesc }}
        ></div>
        <div className={styles.footer}>
          <div className={styles.date_wrap}>
            <p className={styles.date_text}>{formatData(date)}</p>
            <div className={styles.date_text}>
              <div className={styles.icon_eye}>
                <Image
                  src={Eye}
                  width={"auto"}
                  height={"auto "}
                  alt="Development"
                  className={styles.icon}
                />
                <span>{views}</span>
              </div>
            </div>
          </div>

          <Link href={`/news/${id}?name=${href}`} className={styles.button}>
            <span>{t("detail")}</span>
            <Image
              src={RightGreen}
              width={"auto"}
              height={"auto "}
              alt="Development"
              className={styles.button_icon}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProgrammer;
