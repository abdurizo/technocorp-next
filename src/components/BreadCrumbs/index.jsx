import styles from "./BreadCrumbs.module.css";

import Image from "next/image";
import Link from "next/link";
import classN from "classnames";
import { useRouter } from "next/router";

import Arrow from "@/icon/long_arrow_right.svg";

function BreadCrumbs({ back, href }) {
  const { query } = useRouter();
  console.log(query);

  return (
    <div className={styles.nav}>
      <Link href={href} className={styles.link}>
        {back}
      </Link>
      <Image
        src={Arrow}
        width={"auto"}
        height={"auto   "}
        alt="Development"
        className={styles.icon}
      />
      <span className={classN(styles.color, styles.link)}>
        {query.internalservise || query.name || "Loading..."}
      </span>
    </div>
  );
}

export default BreadCrumbs;
