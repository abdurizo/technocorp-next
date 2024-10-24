import styles from './Card.module.css';

import Image from 'next/image';

import Development from '@/assets/icon/veb.svg';
// import Development from '@/assets/icon/Development.svg';

function Card() {
    return (
        <div className={styles.wrap}>
            <div className={styles.title_wrap}>
                <h3 className={styles.title}>Texnik hujjat ishlab chiqish</h3>
                <div>
                <Image
                  src={Development}
                  width={'auto'}
                  height={'auto'}
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