import styles from './CardProgrammer.module.css';

import Image from 'next/image';

import KhodjabekovaSh from '@/img/imgProgrammer/KhodjabekovaShakhnoza.jpg';

function CardProgrammer({image,name,profession}) {
    return (
        <div className={styles.card}>
            <div className={styles.image_wrap}>
                <Image
                    src={image}
                    width={376}
                    height={452}
                    alt="Development"
                    className={styles.image}
                />
            </div>
            <div className={styles.about_programmer}>
                <p className={styles.name}>{name }</p>
                <p className={styles.profession}>{profession }</p>
            </div>
            
        </div>
    );
}

export default CardProgrammer;