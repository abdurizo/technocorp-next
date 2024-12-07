import styles from "./Card.module.css";
import classN from "classnames";

import Image from "next/image";

import NosirovAmirjon from "@/img/imgPerson/NosirovAmirjon.png";
import GreenEnvelope from "@/icon/greenEnvelope.svg";
import GreenPhone from "@/icon/greenPhone.svg";

function Card({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.person_info}>
        <div className={styles.Image_wrap}>
          <Image width={500} height={500} alt="person" src={card?.photo}  />  
        </div>
        <div className={styles.info}>
          <h3 className={classN(styles.full_name, styles.base)}>
            {card.fullname}
          </h3>

          <p className={classN(styles.position, styles.base)}>
            {card.position_text}
          </p>

          <div className={styles.reception}>
            <p className={classN(styles.position, styles.base)}>
              Qabul kuni va soati:{" "}
            </p>
            <p
              className={classN(
                styles.reception_time,
                styles.base,
                "capitalize"
              )}
            >
              {card.work_time}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.social_block}>
          <div className={styles.image_social}>
            <Image
              width={"auto"}
              height={"auto"}
              alt="person"
              src={GreenEnvelope}
            />
          </div>
          <div>
            <p className={classN(styles.position, styles.base)}>Email</p>
            <p className={classN(styles.reception_time, styles.base)}>
              {card.email}
            </p>
          </div>
        </div>
        <div className={styles.social_block}>
          <div className={styles.image_social}>
            <Image
              width={"auto"}
              height={"auto"}
              alt="person"
              src={GreenPhone}
            />
          </div>
          <div>
            <p className={classN(styles.position, styles.base)}>Telefon </p>
            <p className={classN(styles.reception_time, styles.base)}>
              +998 (55) 501-42-00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
