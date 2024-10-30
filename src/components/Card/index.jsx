import { useState } from 'react';
import Link from 'next/link';

import styles from './Card.module.css';

import Image from 'next/image';


function Card({ gif, image }) {
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
                        src={isHovered ? gif : image}
                        width={500}
                        height={500}
                        alt="Development"
                        className={styles.image}

                    />
                </div>
            </div>
            <div className={styles.button}>
            <p className={styles.text}>texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...</p>
            
                <div className={styles.wrap_but}>
                    
                </div>
                <Link className={styles.but} href={"#!"}>BATAFSIL</Link>
            </div>



        </div>
    );
}

export default Card;