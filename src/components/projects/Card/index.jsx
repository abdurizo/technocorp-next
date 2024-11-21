import styles from './Card.module.css';

import Image from 'next/image';

import ArrowRightCrcle from '@/icon/ArrowRightCircle.svg';
import Img from '@/img/imgNews/im1.png';

function Card() {
    return (
        <div className={styles.wrap}>

            <h2 className={styles.title}>uspenskiyschool</h2>
            <p className={styles.text}>Rossiyadagi nufuzli xususiy maktab-
                lardan hisoblanadi</p>

            <div className={styles.image}>
                <Image
                    src={Img}
                    width={'auto'}
                    height={'auto   '}
                    alt="Img"
                />
            </div>

            <div className={styles.arrow}>
                <Image
                    src={ArrowRightCrcle}
                    width={'auto'}
                    height={'auto   '}
                    alt="Img"
                    className={styles.icon}
                />
            </div>
        </div>
    );
}

export default Card;