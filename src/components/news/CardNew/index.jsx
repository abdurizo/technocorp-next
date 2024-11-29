import styles from "./CardNew.module.css";

import Image from "next/image";
import Link from "next/link";

import Eye from "@/icon/eye.svg";
import RightGreen from "@/icon/right_green.svg";
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

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_wrap}>
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="Development"
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{href}</h3>

        <div className={styles.content}>
          <p className={styles.text}>{desc}</p>

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

            <Link
              href={{
                pathname: "/news/" + id,
                query: {
                  name: href,
                },
              }}
              className={styles.button}
            >
              <span>Batafsil</span>
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
    </>
  );
}

export default CardProgrammer;
