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
                        <p className={styles.text_1}> texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...</p>
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
                        <p className={styles.text_1}> texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...</p>
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
                        <p className={styles.text_1}> texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Scroll;