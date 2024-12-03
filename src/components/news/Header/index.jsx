import classN from "classnames";
import styles from "./Header.module.css";

import dynamic from 'next/dynamic';
import { useTranslation } from "next-i18next";

import СircularShadow from "@/components/СircularShadow";
const Filter = dynamic(() => import('@/components/filterCaroucel/Carousel'), { ssr: false });


function Header(props) {
    const { t } = useTranslation();
    return (
        <div className={classN(styles.wrap, 'container')}>

            <h2 className={classN('sectionTitle')}>{t('news')} </h2>
            <Filter />
            <СircularShadow className={styles.circular} />
            <p className='background_text'>{ t('news')}</p>
        </div>
    );
}

export default Header;