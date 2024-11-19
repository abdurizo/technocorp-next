import styles from './Header.module.css';

import Image from 'next/image';

import Img from '@/img/imgNews/im1.png';

function Header(props) {
    return (
        <header>
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