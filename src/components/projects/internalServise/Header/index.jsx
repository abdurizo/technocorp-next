import styles from './Header.module.css';

import Image from 'next/image';
import Link from 'next/link';
import classN from 'classnames';
import { useRouter } from 'next/router';

import Img from '@/img/imgNews/im1.png';
import Arrow from '@/icon/long_arrow_right.svg'
import Eye from '@/icon/eye.svg';

function Header(props) {

    const { query } = useRouter()

    return (
        <header>
            <div className={styles.wrap}>
                <div className={styles.nav}>
                    <Link href={'/news'} className={styles.link}>Yangiliklar</Link>
                    <Image
                        src={Arrow}
                        width={'auto'}
                        height={'auto   '}
                        alt="Development"
                        className={styles.icon}
                    />
                    <Link href={'#'} className={classN(styles.color, styles.link)}>{query.internalnews || 'Loading...'}</Link>
                </div>

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
        </header>
    );
}

export default Header;