import styles from "./Card.module.css";
import classN from "classnames";

import Image from "next/image";
import { useTranslation } from "next-i18next";

import NosirovAmirjon from "@/img/imgPerson/NosirovAmirjon.png";
import GreenEnvelope from "@/icon/greenEnvelope.svg";
import GreenPhone from "@/icon/greenPhone.svg";
const formatUzbekPhoneNumber = (phoneNumber) => {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Regex to match Uzbek phone numbers
  const regex = /^998?(\d{2})(\d{3})(\d{2})(\d{2})$/;

  if (regex.test(cleaned)) {
    return cleaned.replace(regex, "+998 ($1) $2-$3-$4");
  } else {
    return "Invalid phone number";
  }
};
function Card({ card }) {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={styles.person_info}>
        <div className={styles.Image_wrap}>
          <Image fill alt="person" src={card?.photo} />
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
              {t('date_and_time')}:
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
              {formatUzbekPhoneNumber(card.phone)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
