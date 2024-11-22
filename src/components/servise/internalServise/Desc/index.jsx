import styles from './Desc.module.css';

function Desc(props) {
    return (
        <>
            <h2 className={styles.title}>Texnik hujjat ishlab chiqish</h2>
            <p className={styles.desc}>
                Texnik hujjat ishlab chiqish xizmati turli loyiha va mahsulotlar uchun zarur bo'lgan hujjatlarni tayyorlash jarayonidir.
                Texnik hujjat ishlab chiqish xizmati murakkab texnologik jarayonlarni oson va tushunarli tarzda hujjatlashtirish orqali
                loyihaning muvaffaqiyatli amalga oshirilishiga hissa qo'shadi.
            </p>
        </>
    );
}

export default Desc;