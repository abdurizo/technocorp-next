
import styles from './Startap.module.css';
import classN from 'classnames';

import Card from '../../CardForStartap'

function Startap() {
    return (
        <section className='container'>
            <h2 className="sectionTitle">Startap loyihalar</h2>
            <div className={styles.grid_content}>
                <Card />
            </div>

        </section>
    );
}

export default Startap;