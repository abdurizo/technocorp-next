import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Header() {
  const router = useRouter();
  const { locale } = router;

  const [videoSrc, setVideoSrc] = useState("/video/bannerUz.mp4");

  useEffect(() => {
    switch (locale) {
      case "uz":
        setVideoSrc("/video/uz.webm");
        break;
      case "ru":
        setVideoSrc("/video/ru.webm");
        break;
      default:
        setVideoSrc("/video/en.webm");
        break;
    }
  }, [locale]);

  return (
    <header className={styles.intro}>
      <div className={styles.video}>
        <video
          key={videoSrc} // force re-render when videoSrc changes
          autoPlay
          muted
          loop
          className={styles.video_media}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </header>
  );
}

export default Header;
