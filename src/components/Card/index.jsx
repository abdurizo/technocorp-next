import { useState } from 'react';

import styles from './Card.module.css';

import Image from 'next/image';

// import Development from '@/assets/icon/veb.svg';
// import Gif1 from '@/assets/img/Gif1.gif';


function Card() {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className={styles.wrap}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div className={styles.title_wrap}>
                <h3 className={styles.title}>Texnik hujjat ishlab chiqish</h3>
                <div className={styles.image}>

                    <Image
                        src={isHovered ?"/gif/Gif1.gif" : "/gif/gif1.svg" }
                        width={500}
                        height={500}
                        alt="Development"
                        className={styles.image}

                    />
                </div>
            </div>
            <p className={styles.text}>texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...</p>
        </div>
    );
}

export default Card;