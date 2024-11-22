import styles from './Header.module.css';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Img from '@/img/imgNews/im1.png';
import Arrow from '@/icon/long_arrow_right.svg'
import Eye from '@/icon/eye.svg';

import BreadCrumbs from '@/components/BreadCrumbs';

function Header() {

    const { query } = useRouter()
   
    console.log(query)

    return (
        <>
            <div className={styles.wrap}>
            <BreadCrumbs back={'Yangiliklar'} href={'/news'} />

                <div className={styles.date_wrap}>
                    <p className={styles.date_text}>07-May 2024-yil</p>
                    <div className={styles.date_text}>
                        <div className={styles.icon_eye}>
                            <Image
                                src={Eye}
                                width={'auto'}
                                height={'auto '}
                                alt="Development"
                                className={styles.icon}
                            />
                            <span>584</span>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className={styles.title}>7-may – O‘zbekiston Respublikasi axborot-kommunikatsiya texnologiyalari sohasi xodimlari kuni!</h2>
            <Image
                src={Img}
                width={'auto'}
                height={'auto   '}
                alt="Development"
                className={styles.image}
            />
        </>
    );
}

export default Header;