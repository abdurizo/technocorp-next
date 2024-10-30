import styles from './Services.module.css';
import classN from 'classnames';

import Card from '../../Card'

function Services() {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className="sectionTitle">XIZMATLAR</h2>
            <div className={styles.cards}>
                <Card gif="/gif/Gif1.gif" image="/gif/gif1.svg"/>
                <Card gif="/gif/Gif1.gif" image="/gif/gif2.svg"/>
                <Card gif="/gif/Gif3.gif" image="/gif/gif3.svg"/>
                <Card gif="/gif/Gif4.gif" image="/gif/gif4.svg"/>
                <Card gif="/gif/Gif5.gif" image="/gif/gif5.svg"/>
                <Card gif="/gif/Gif6.gif" image="/gif/gif6.svg"/>
                <Card gif="/gif/Gif7.gif" image="/gif/gif7.svg"/>
            </div>

        </section>
    );
}

export default Services;