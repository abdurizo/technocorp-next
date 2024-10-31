import styles from './CardForStartap.module.css';

import { useState } from 'react';
import Image from 'next/image';

import Slack from '@/icon/startapIcon/slack.svg';
import Slack2 from '@/icon/startapIcon/slack2.svg';

function CardForStartap() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${styles.wrap} ${isHovered ? styles.hover_img : styles.nohover_img}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.image}>
                <Image src={isHovered ? Slack2 : Slack} width={'auto'} height={'auto'} alt="Slack" />
            </div>
            <p className={styles.text}> PRIVATE SCHOOL ASSISTANT</p>
        </div>
    );
}

export default CardForStartap;