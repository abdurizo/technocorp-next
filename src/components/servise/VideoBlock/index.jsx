import styles from './Video.module.css';
import classN from 'classnames';

import { useTranslation } from "next-i18next";  

function Video(props) {
    const { t } = useTranslation("common");
    return (
        <section className={ classN( styles.container)}>
            <div className={styles.wrap}>
                <p className='swiper_title'>{ t('title_carousel')}</p>
                <iframe
                    width="auto"
                    height="auto"
                    src="https://www.youtube.com/embed/-ACo9Zh3f9k?start=7"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default Video;