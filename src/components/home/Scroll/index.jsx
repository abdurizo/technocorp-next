import styles from './Scroll.module.css';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Award from '@/assets/icon/scrollIcon/award.svg';
import AwardW from '@/assets/icon/scrollIcon/awardW.svg';
import Codesandbox from '@/assets/icon/scrollIcon/codesandbox.svg';
import CodesandboxW from '@/assets/icon/scrollIcon/codesandboxW.svg';
import Command from '@/assets/icon/scrollIcon/command.svg';
import CommandW from '@/assets/icon/scrollIcon/commandW.svg';

function Scroll() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    return (
        <>
            <div className={styles.wrap_1}>
                <div className={styles.block}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <div className={styles.icon_wrap}>
                        <div className={styles.icon_image}>
                            <Image src={isHovered1 ? AwardW : Award} width={'auto'} height={'auto'} alt="Award" className={styles.icon} />
                        </div>
                        <p className={styles.icon_text}>SIFAT</p>
                    </div>
                    <div className={styles.line_wrap_1}>
                        <div className={styles.line_1}></div>
                        <div className={styles.circle_1}></div>
                    </div>
                    <div className={styles.text_wrap_1}>
                        <p className={styles.text_1}>har bir xizmat yoki mahsulotda mukammallikni ta'minlash, mijozlar talablariga to'liq javob berish va doimiy ravishda takomillashtirishga intilishdir. Technocorp sifatni eng yuqori darajaga qo'yib, har bir loyiha va yechimda ishonchli va barqaror natijalarga erishishga intiladi. Sifat — bu kompaniyaning muvaffaqiyatining asosi.</p>
                    </div>
                </div>


                <div className={styles.block}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <div className={styles.icon_wrap}>
                        <div className={styles.icon_image}>
                            <Image src={isHovered2 ? CommandW : Command} width={'auto'} height={'auto'} alt="Award" />
                        </div>
                        <p className={styles.icon_text}>Ishonch</p>
                    </div>
                    <div className={styles.line_wrap_1}>
                        <div className={styles.line_1}></div>
                        <div className={styles.circle_1}></div>
                    </div>
                    <div className={styles.text_wrap_1}>
                        <p className={styles.text_1}>mijozlar, hamkorlar va xodimlar o'rtasida mustahkam aloqalarni yaratish, o'z vaqtida va sifatli xizmat ko'rsatish orqali ishning to'g'ri bajarilishiga ishonch hosil qilishdir. Technocorp o'zining ishonchli va o'zaro hurmatga asoslangan yondashuvi bilan, barcha tomonlar uchun doimiy ravishda yuqori darajadagi xizmatlarni taqdim etadi.    </p>
                    </div>
                </div>

                <div className={styles.block}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <div className={styles.icon_wrap}>
                        <div className={styles.icon_image}>
                            <Image src={isHovered3 ? CodesandboxW : Codesandbox} width={'auto'} height={'auto'} alt="Award" />
                        </div>
                        <p className={styles.icon_text}>innovatsiya</p>
                    </div>
                    <div className={styles.line_wrap_1}>
                        <div className={styles.line_1}></div>
                        <div className={styles.circle_1}></div>
                    </div>
                    <div className={styles.text_wrap_1}>
                        <p className={styles.text_1}>yangiliklar yaratish va texnologiyalarni doimiy ravishda rivojlantirish orqali bozorni yangi va ilg'or yechimlar bilan to'ldirishdir. Technocorp innovatsiyalarni hayotga tadbiq etish orqali o'z mijozlariga samarali va raqobatbardosh texnologik yechimlar taklif etadi. Innovatsiya kompaniyaning uzoq muddatli muvaffaqiyatini ta'minlovchi asosiy kuchdir.</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Scroll;