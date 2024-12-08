import classN from "classnames";
import styles from "./Header.module.css";

import dynamic from 'next/dynamic';
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";

import СircularShadow from "@/components/СircularShadow";
// const Filter = dynamic(() => import('@/components/filterCaroucel/Carousel'), { ssr: false });
import Filter from '@/components/filterCaroucel/Button';


function Header(props) {
    const { t } = useTranslation();
    const [activetab, setActiveTab] = useState(undefined);
    const router = useRouter();
    const news = [
        { id: undefined, text: t('all') },
        { id: 1, text: t('center_news')},
        { id: 2, text: t('center_blog') },
        { id: 3, text: t('fight_against_corruption') },
    ];
    const setActiveTabHandler = (activeTab) => {
        router.push(
            {
                pathname: router.pathname,
                query: {
                    tab: activeTab,
                },
            },
            undefined,
            {
                scroll: false,
            }
        );

        setActiveTab(activeTab);
    };


    return (
        <div className={classN(styles.wrap, 'container')}>

            <h2 className={classN('sectionTitle')}>{t('news')} </h2>
            <div className="w-full flex items-center gap-4 mb-10">
                {
                    news.map((item, id) => {
                        return (
                            <Filter
                                key={id}
                                text={item.text}
                                onClick={() => setActiveTabHandler(item.id)}
                                active={activetab === item.id ? "active" : ""}
                            />
                        )
                    })
                }
            </div>
            <СircularShadow className={styles.circular} />
            <p className='background_text'>{t('news')}</p>
        </div>
    );
}

export default Header;