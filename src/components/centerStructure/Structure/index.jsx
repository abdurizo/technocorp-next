import styles from './Structure.module.css';
import classN from 'classnames';

import Card from '../Card';
import СircularShadow from "@/components/СircularShadow";

function Structure(props) {
    return (
        <>
            <header className={classN('container', styles.wrap)}>
                <h2 className={classN('sectionTitle', styles.title)}>Markaz TUZILMASI</h2>
                <div className={styles.wrpa_director}>
                    
                </div>

                <div className={styles.director}>
                        <Card />
                    </div>

                <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <СircularShadow className={styles.circular_min} />
                <СircularShadow className={styles.circular} />
            </header>
            <p className={styles.background_text}>MarkazTUZILMASI</p>
        </>

    );
}

export default Structure;