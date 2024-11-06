import styles from './Services.module.css';
import classN from 'classnames';

import Card from '../../Card'

function Services() {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className="sectionTitle">XIZMATLAR</h2>
            <div className={styles.cards}>
                <Card
                    gif="/gif/Gif1.gif"
                    image="/gif/gif1.svg"
                    title={'Texnik hujjat ishlab chiqish'}
                    text={'Loyiha konsepsiyasini tuzish; Loyihani texnik talabini ishlab chiqish; Texnik topshiriq ishlab chiqish; Foydalanish qo‘  llanmasi ishlab chiqish.'}
                />
                <Card
                    gif="/gif/Gif1.gif"
                    image="/gif/gif2.svg"
                    title={'vEB DASTURLASH'}
                    text={'Axborot tizimlarini ( ERM, CRM ) ishlab chiqish; Veb - portallar ishlab chiqish; Turli veb- saytlar ( tashrif sayti, katalog sayti, qonunchilik talablariga muvofiq sayti, korporativ sayti va boshqalar) ishlab chiqish; Mobil ilova ishlab chiqish; Internet dokon ishlab chiqish; Tizimlarning texnik integratsiya ishlari; Telegram bot ishlab chiqish.'}
                />
                <Card
                    gif="/gif/Gif3.gif"
                    image="/gif/gif3.svg"
                    title={'DASTURIY APPARAT QURILMALARINIDASTURLASH'}
                    text={'texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...'}
                />
                <Card
                    gif="/gif/Gif4.gif"
                    image="/gif/gif4.svg"
                    title={'VR VA AR TEXNOLOGIYALARI360 TUR'}
                    text={'texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...'}
                />
                <Card
                    gif="/gif/Gif5.gif"
                    image="/gif/gif5.svg"
                    title={'mOBIL ILOVA LAR'}
                    text={'bu asosan Android va iOS tizimlarida ishlovchi smartfonlar uchun dasturiy ta‘minot ishlab chiqarish jarayoni. Mobil ilovalarni ishlab chiqishning zamonaviy texnologiyalari yordamida o‘z biznesingizni yangi bosqichga ko‘taring. Android va iOS smartfonlar uchun mobil ilova ishlab chiqish uchun buyurtma bering va biz bilan biznesingizni yangi imkoniyatlarini yarating.'}
                />
                <Card
                    gif="/gif/Gif6.gif"
                    image="/gif/gif6.svg"
                    title={'AXBOROT XAVFSIZLIGINI TA’MINLASH'}
                    text={' Axborotlashtirish obyektlarining axborot xavfsizligi talablariga muvofiqligini auditdan (ekspertizadan) o‘tkazish xizmati Axborot xavfsizligi sohasida normativ-texnik hujjatlarni ishlab chiqish va konsalting xizmatlari: - Axborot xavfsizligi siyosatini ishlab chiqishga ko’maklashish; - Konfidensial ma’lumotlar bilan ishlash bo’yicha hujjatlarni ishlab chiqishga ko’maklashish; - Axborot xavfsizligi sohasida nizom, yo’riqnomalar va boshqa zarur hujjatlar ishlab chiqish.'}
                />
                <Card
                    gif="/gif/Gif7.gif"
                    image="/gif/gif7.svg"
                    title={'AKT VA AX AUDIT'}
                    text={'Tashkilot faoliyatini axborot-kommunikatsiya texnologiyalari sohasidagi normativ-huquqiy hujjat talablariga muvofiqligi bo‘yicha auditdan o‘tkazish; Axborot tizimini texnik topshiriqda keltirilgan talablar, funksiya va vazifalarga muvofiqligi bo‘yicha auditdan o‘tkazish; Tashkilot rasmiy veb-saytini axborot-kommunikatsiya texnologiyalari sohasidagi normativ-huquqiy hujjat talablariga muvofiqligi bo‘yicha auditdan o‘tkazish; Tashkilot faoliyatini axborot xavfsizligi sohasidagi normativ-huquqiy hujjat talablariga muvofiqligi bo‘yicha auditdan o‘tkazish; Tashkilot tomonidan ko‘rsatilayotgan xizmatni raqamlashtirilganlik holati bo‘yicha auditdan o‘tkazish; Tashkilot elektron hujjat aylanish tizimini davlat standartlariga muvofiqligi bo‘yicha konsalting xizmati.'}
                />
            </div>

        </section>
    );
}

export default Services;