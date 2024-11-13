import styles from './CardProgrammer.module.css';

import Image from 'next/image';

import KhodjabekovaSh from '@/img/imgProgrammer/KhodjabekovaShakhnoza.jpg'

function CardProgrammer() {
    return (
        <div className={styles.card}>
            <div className={styles.image_wrap}>
                <Image
                    src={KhodjabekovaSh}
                    width={376}
                    height={452}
                    alt="Development"
                    className={styles.image}
                />
            </div>
            <div className={styles.about_programmer}>
                <p className={styles.name}>Khodjabekova Shakhnoza Baxodirovna</p>
                <p className={styles.profession}>Back-end developer</p>
            </div>
            
        </div>
    );
}

export default CardProgrammer;