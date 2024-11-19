import styles from './SectionNews.module.css';

import Card from '../CardNew';

import Img from '@/img/imgNews/im1.png';

function SectionNews() {
    return (
        <section className={styles.container}>
            <div className={styles.cards}>
                <Card image={ Img} />
                <Card image={ Img} />
            </div>
        </section>
    );
}

export default SectionNews;