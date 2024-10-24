import styles from './Services.module.css';
import classN from 'classnames';

import Card from '../../Card'

function Services() {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className="sectionTitle">XIZMATLAR</h2>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </section>
    );
}

export default Services;