import styles from './Card.module.css';

import Image from 'next/image';
import Link from 'next/link';

import ArrowRightCrcle from '@/icon/ArrowRightCircle.svg';
import Img from '@/img/imgNews/im1.png';

function Card() {
    return (
        <Link href={'#'} className={styles.wrap} target={'_blank'}>

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
        </Link>
    );
}

export default Card;