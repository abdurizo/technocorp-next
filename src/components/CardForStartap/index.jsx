import styles from './CardForStartap.module.css';

import { useState } from 'react';
import Image from 'next/image';

import Slack from '@/icon/startapIcon/slack.svg';
import Slack2 from '@/icon/startapIcon/slack2.svg';

function CardForStartap({imageOne,imageTwo}) {
    const [isHovered, setIsHovered] = useState(false);
    const [state, setState] = useState(true);

    const handelCkck = () => {
        setState(!state)
        console.log("work")
    }

    return (
        <div className={`${styles.wrap} ${isHovered ? styles.hover_img : styles.nohover_img}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handelCkck}
        >
            {state ?
                (<>
                    <div className={styles.image}>
                        <Image src={isHovered ? imageTwo : imageOne} width={'auto'} height={'auto'} alt="Slack" />
                    </div>
                    <p className={styles.text}> PRIVATE SCHOOL ASSISTANT</p>
                    <div className={styles.sign}>!</div>
                </>

                ) :
                (<>
                     <p className={styles.text_two}> Oʼqishga kirish uchun onlayn ariza berish, shaxsiy kabinet ochish, xususiy
                        taʼlim muassasalari boʼyicha umumiy maʼlumot berish.</p>
                        <div className={styles.sign}>x</div>
                </>
                   
                )

            }



        </div>
    );
}

export default CardForStartap;