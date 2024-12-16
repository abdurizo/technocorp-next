import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import styles from "./SiteView.module.css";
import classN from "classnames";

import GlassesIcon from "@/icon/glasses.svg";

function SiteView() {
  const [addFr, setAddFr] = useState(false);

  const addFrHandler = () => {
    setAddFr((p) => !p);
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      function (event) {
        if (!event.target.closest(".site_view_block")) {
          setAddFr(false);
        }
      },
      false
    );
  }, []);

  const siteViewHandler = (id) => {
    document.getElementsByTagName("html")[0].style.filter = `${
      id === 1
        ? "none"
        : id === 2
        ? "grayscale(100%)"
        : "grayscale(100%) invert(100%)"
    }`;
  };
  return (
    <div className={`${styles.site_view_block} site_view_block`}>
      <Image
        src={GlassesIcon}
        fill
        alt="icon glasses"
        onClick={addFrHandler}
        className={styles.icon}
      />
      <div
        className={`${styles.additional_features}  ${
          addFr ? styles.d_block : styles.d_none
        } ${addFr}`}
      >
        <p>Sayt ko'rinishi</p>
        <div className={`${styles.site_view}`}>
          <span onClick={() => siteViewHandler(1)}>A</span>
          <span onClick={() => siteViewHandler(2)}>A</span>
          <span onClick={() => siteViewHandler(3)}>A</span>
        </div>
      </div>
    </div>
  );
}

export default SiteView;
