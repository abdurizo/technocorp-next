import styles from './Programmers.module.css';
import classN from 'classnames';

import dynamic from 'next/dynamic';

import CardP from '@/components/CardProgrammer';
import СircularShadow from "@/components/СircularShadow";
// import Carousel from "@/components/CarouselProgrammer";
const Carousel = dynamic(() => import('@/components/CarouselProgrammer'), { ssr: false });

function Programmers() {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className={classN(styles.title, 'sectionTitle')}>BIZNING DASTURCHILAR</h2>
            <div className={styles.carousel}>
                <Carousel />
            </div>

            <p className='background_text'>DASTURCHILAR</p>
            <СircularShadow className={styles.circular} />
        </section>
    );
}

export default Programmers;