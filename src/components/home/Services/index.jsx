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
                />
                <Card
                    gif="/gif/Gif1.gif"
                    image="/gif/gif2.svg"
                    title={'vEB DASTURLASH'}
                    
                />
                <Card
                    gif="/gif/Gif3.gif"
                    image="/gif/gif3.svg"
                    title={'DASTURIY APPARAT QURILMALARINI DASTURLASH'}
                    
                />
                <Card
                    gif="/gif/Gif4.gif"
                    image="/gif/gif4.svg"
                    title={'VR VA AR TEXNOLOGIYALARI 360 TUR'}
                    
                />
                <Card
                    gif="/gif/Gif5.gif"
                    image="/gif/gif5.svg"
                    title={'mOBIL ILOVA LAR'}
                    
                />
                <Card
                    gif="/gif/Gif6.gif"
                    image="/gif/gif6.svg"
                    title={'AXBOROT XAVFSIZLIGINI TA’MINLASH'}
                    
                />
                <Card
                    gif="/gif/Gif7.gif"
                    image="/gif/gif7.svg"
                    title={'AKT VA AX AUDIT'}
                
                />
            </div>
            <СircularShadow className={styles.circular_min} />
            <СircularShadow className={styles.circular} />
        </section>
    );
}

export default Services;