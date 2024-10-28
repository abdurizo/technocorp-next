import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { useRouter } from 'next/router';  

function Header({ }) {

  const router = useRouter();
  const { locale } = router;

  const [videoSrc, setVideoSrc] = useState('/video/bannerUz.mp4');

  useEffect(() => {
    switch (locale) {
      case 'uz':
        setVideoSrc('/video/bannerUz.mp4');
        break;
      case 'ru':
        setVideoSrc('/video/FullHD.webm');
        break;
      default:
        setVideoSrc('/video/bannerEn.mp4');
        break;
    }
  }, [locale]);

  return (
    <div className={styles.intro}>
      <div className={styles.video}>
        <video
          key={videoSrc} // force re-render when videoSrc changes
          autoPlay
          muted
          loop
          className={styles.video_media}
        >
          <source
            src={videoSrc}
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  )
}

export default Header
