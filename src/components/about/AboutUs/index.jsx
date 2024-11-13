import styles from './AdoutUs.module.css';
import classN from 'classnames';

import Image from 'next/image';

import Of1 from '@/img/Of1.jpg';
import Of2 from '@/img/Of2.jpg';
import Of3 from '@/img/Of3.jpg';

import СircularShadow from "@/components/СircularShadow";


function AboutUs(props) {
    return (
        <>
            <section className={classN(styles.wrap, 'container')}>
                <div className={styles.textSection}>
                    <h2 className={classN(styles.title, 'sectionTitle')}>BIZ HAQIMIZDA</h2>
                    <p className={styles.text}>
                        "Axborot texnologiyalari va axborot resurslarini rivojlantirish markazi" MCHJ
                        O‘zbekiston Respublikasi Prezidentining 2019-yil 14-sentabrdagi
                        "Axborot texnologiyalari va kommunikatsiyalarning yangi avlodini yaratish
                        orqali ulardan foydalanish imkoniyatlarini yanada kengaytirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida"
                        PQ-4452-son qaroriga muvofiq tashkil etilgan.
                    </p>

                    <div className={styles.line}></div>

                    <div className={styles.text}>
                        <p> Markazning asosiy vazifalari:</p>

                        <p>texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish;
                            davlat organlari va boshqa tashkilotlar faoliyatining ochiqligini ta’minlash maqsadida “raqamli va axborot jamiyati”ni shakllantirish, shuningdek, texnik infratuzilmani rivojlantirishning muhim masalalari bo‘yicha tahliliy materiallarni tayyorlash;
                            axborot tizimlari va axborot resurslarini yaratish, ular o‘rtasida xavfsiz ma’lumot almashinuvini ta’minlash, tashqi xosting maydonchalari bilan integratsiya masalalari bo‘yicha konsalting xizmatlari ko‘rsatishni tashkil etish;</p>

                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.top_left}> <Image src={Of1} width={'auto'} height={'auto'} alt="of" /></div>
                    <div className={styles.bottom_right}><Image src={Of2} width={'auto'} height={'auto'} alt="of" /></div>
                    <div className={styles.top_left}><Image src={Of3} width={'auto'} height={'auto'} alt="of" /></div>
                    <div className={styles.bottom_right}><Image src={Of1} width={'auto'} height={'auto'} alt="of" /></div>
                </div>
                <СircularShadow className={styles.circular_min} />
                <СircularShadow className={styles.circular} />
                <p className={styles.background_text}>BIZ HAQIMIZDA</p>
               
            </section>
        </>
    );
}

export default AboutUs;