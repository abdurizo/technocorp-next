import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from './Language.module.css'
import classNames from 'classnames'

import GlobeEarthIcon from '@/icon/globe-earth.svg';

function Language() {
    const { i18n, t } = useTranslation();
    const router = useRouter();
    const { locale, pathname } = router;
    const [toggle, setToggle] = useState(false);
    const [activeLocale, setActiveLocale] = useState(locale);
    const handelAddClass = () => {
        setToggle(!toggle)
    };
    const handelAddClassLocation = (newLocale) => {
        setActiveLocale(newLocale);
    }
    const handelExecutionFunction = (newLocale) => {
        handelAddClass();
        handelAddClassLocation(newLocale);
    }
    return (
        <div
            className={styles.language_wrap}
        >
            <div className={`${styles.language} ${toggle ? styles.uncover : ''}`}>

                <Link href={pathname} locale="uz" onClick={() => handelExecutionFunction('uz')} className={`${activeLocale === "uz" ? styles.active : styles.noactive}`}>UZ</Link>

                <Link href={pathname} locale="ru" onClick={() => handelExecutionFunction('ru')} className={`${activeLocale === "ru" ? styles.active : styles.noactive}`}>RU</Link>
                <Link href={pathname} locale="en" onClick={() => handelExecutionFunction('en')} className={`${activeLocale === "en" ? styles.active : styles.noactive}`}>EN</Link>
            </div>
            <div className={styles.wrap_icon} onClick={handelAddClass}>
                <Image src={GlobeEarthIcon}
                    width={'auto'}
                    height={'auto'}
                    alt="icon glasses"
                />
            </div>

        </div>
    )
}

export default Language
