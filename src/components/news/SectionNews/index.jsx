import styles from './SectionNews.module.css';

import Card from '../CardNew';

import Img from '@/img/imgNews/im1.png';

function SectionNews() {

    const news = [
        { id: '123', title: '7-may – O‘zbekistonюю ' },
        { id: '456', title: 'May' },
        { id: '466', title: '8-dekabr' },
    ];


    return (
        <section className={styles.container}>
            <div className={styles.cards}>

                {
                    news.map((item) => (
                        <Card
                            key={item.id}
                            image={Img}
                            href={item.title}
                            id={item.id}
                        />
                    ))
                }

            </div>
        </section>
    );
}

export default SectionNews;