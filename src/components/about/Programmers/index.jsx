import styles from './Programmers.module.css';
import classN from 'classnames';

// import CarouselF from '@/components/Carousel';
import CardP from '@/components/CardProgrammer';

function Programmers() {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className={classN(styles.title, 'sectionTitle')}>BIZNING DASTURCHILAR</h2>

            <CardP />
            {/* <CarouselF /> */}

            <p className={styles.background_text}>BIZ HAQIMIZDA</p>
        </section>
    );
}

export default Programmers;