import styles from './Services.module.css';
import classN from 'classnames';

import Card from '../../Card';
import СircularShadow from "@/components/СircularShadow";

function Services() {
    return (
        <section className={classN(styles.wrap, 'container')} >
            <h2 className="sectionTitle">XIZMATLAR</h2>
            <div className={styles.cards}>
                <Card
                    gif="/gif/Gif1.gif"
                    image="/gif/gif1.svg"
                    title={'Texnik hujjat ishlab chiqish'}
                    text={'Loyiha konsepsiyasini tuzish; Loyihani texnik talabini ishlab chiqish; Texnik topshiriq ishlab chiqish; Foydalanish qo‘llanmasi ishlab chiqish.'}
                />
                <Card
                    gif="/gif/Gif1.gif"
                    image="/gif/gif2.svg"
                    title={'vEB DASTURLASH'}
                    text={'Axborot tizimlari (ERM, CRM), veb-portallar, turli saytlar, mobil ilovalar, internet-do‘konlar, texnik integratsiya va Telegram botlar ishlab chiqish xizmatlarini taqdim etamiz.'}
                />
                <Card
                    gif="/gif/Gif3.gif"
                    image="/gif/gif3.svg"
                    title={'DASTURIY APPARAT QURILMALARINI DASTURLASH'}
                    text={'apparat qurilmalarining ishlashini boshqarish va optimallashtirish uchun maxsus dasturlarni ishlab chiqishni ta‘minlaydi.'}
                />
                <Card
                    gif="/gif/Gif4.gif"
                    image="/gif/gif4.svg"
                    title={'VR VA AR TEXNOLOGIYALARI 360 TUR'}
                    text={'"VR va AR texnologiyalari 360° tur" xizmati foydalanuvchilarga virtual va kengaytirilgan haqiqat yordamida 360 daraja ko‘rinishdagi interaktiv tajribalarni taqdim etadi.'}
                />
                <Card
                    gif="/gif/Gif5.gif"
                    image="/gif/gif5.svg"
                    title={'mOBIL ILOVA LAR'}
                    text={'Android va iOS smartfonlari uchun zamonaviy texnologiyalar asosida mobil ilovalar ishlab chiqarish xizmatini taklif etamiz — o‘z biznesingizni yangi bosqichga olib chiqing!'}
                />
                <Card
                    gif="/gif/Gif6.gif"
                    image="/gif/gif6.svg"
                    title={'AXBOROT XAVFSIZLIGINI TA’MINLASH'}
                    text={'Axborot xavfsizligi auditi, xavfsizlik siyosati va maxfiy ma‘lumotlarni himoya qilish hujjatlarini tayyorlash, shuningdek, zarur nizom va yo‘riqnomalarni ishlab chiqish xizmatlarini taklif etamiz.'}
                />
                <Card
                    gif="/gif/Gif7.gif"
                    image="/gif/gif7.svg"
                    title={'AKT VA AX AUDIT'}
                    text={'Tashkilot faoliyati, veb-sayt, va xizmatlarni axborot-kommunikatsiya texnologiyalari va axborot xavfsizligi talablariga muvofiqlik bo‘yicha audit va konsalting xizmatlarini taklif etamiz.'}
                />
            </div>
            <СircularShadow className={styles.circular_min} />
            <СircularShadow className={styles.circular} />
        </section>
    );
}

export default Services;