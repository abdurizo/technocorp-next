import styles from "./Video.module.css";
import classN from "classnames";

import { useTranslation } from "next-i18next";

function Video({ videoSrc }) {
  const { t } = useTranslation("common");

  const getEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);

      if (urlObj.hostname === "youtu.be") {
        return `https://www.youtube.com/embed/${urlObj.pathname.slice(1)}`;
      }
      if (urlObj.hostname.includes("youtube.com")) {
        const videoId = urlObj.searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url;
    } catch (error) {
      return ""; // Return empty if URL is invalid
    }
  };

  console.log("hostVideo", getEmbedUrl(videoSrc));
  return (
    <section className={classN(styles.container)}>
      <div className={styles.wrap}>
        <p className="swiper_title">{t("title_carousel")}</p>
        <iframe
          width="auto"
          height="auto"
          src={videoSrc?.includes("/embed/") ? videoSrc : getEmbedUrl(videoSrc)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Video;
