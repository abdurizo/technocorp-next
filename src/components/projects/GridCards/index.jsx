import styles from './GridCards.module.css';
import classN from 'classnames';

import Card from '../Card';

function GridCards(props) {
    return (
        <section className={ styles.wrap}>
            <Card/>
            <Card/>
            <Card/>
        </section>
    );
}

export default GridCards;