import styles from './Video.module.css';
import classN from 'classnames';

function Video(props) {
    return (
        <section className={ classN( styles.container)}>
            <div className={styles.wrap}>
                <p className='swiper_title'>Technocorp sifat, ishonch va innovatsiya</p>
                <iframe
                    width="100%"
                    height="700"
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