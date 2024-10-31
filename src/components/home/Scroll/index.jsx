import styles from './Scroll.module.css';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Award from '@/assets/icon/scrollIcon/award.svg';
import Codesandbox from '@/assets/icon/scrollIcon/codesandbox.svg';
import Command from '@/assets/icon/scrollIcon/command.svg';

function Scroll() {

    return (
        <>
            {/* <div className={styles.wrap}>
                <div className={styles.image_wrap}>
                    <div className={styles.image_content}>
                        <div className={styles.image}>
                            <Image src={Award} width={'auto'} height={'auto'} alt="Award" />
                        </div>
                        <p className={styles.image_text}>SIFAT</p>
                    </div>
                    <div className={styles.image_content}>
                        <div className={styles.image}>
                            <Image src={Command} width={'auto'} height={'auto'} alt="Command" />
                        </div>
                        <p className={styles.image_text}>Ishonch</p>
                    </div>
                    <div className={styles.image_content}>
                        <div className={styles.image}>
                            <Image src={Codesandbox} width={'auto'} height={'auto'} alt="Codesandbox" />
                        </div>
                        <p className={styles.image_text}>innovatsiya</p>
                    </div>
                </div>

                <div className={styles.line_wrap}>
                    <div className={styles.line}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.line}></div>
                    <div className={styles.circle}></div
                    ><div className={styles.line}></div>
                    <div className={styles.circle}></div>
                </div>

                <div className={styles.text_wrap}>
                    <p className={styles.text}>
                        texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...
                    </p>
                    <p className={styles.text}>
                        texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...
                    </p>
                    <p className={styles.text}>
                        texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...
                    </p>

                </div>
            </div> */}

            <div className={styles.wrap_1}>
                <div className={styles.block}>
                    <div className={styles.icon_wrap}>
                        <div className={styles.icon_image}>
                            <Image src={Award} width={'auto'} height={'auto'} alt="Award" />
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

                <div className={styles.block}>
                    <div className={styles.icon_wrap}>
                        <div className={styles.icon_image}>
                            <Image src={Command} width={'auto'} height={'auto'} alt="Award" />
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
                
                <div className={styles.block}>
                    <div className={styles.icon_wrap}>
                        <div className={styles.icon_image}>
                            <Image src={Codesandbox} width={'auto'} height={'auto'} alt="Award" />
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