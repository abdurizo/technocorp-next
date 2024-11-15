import styles from './Structure.module.css'

import Card from '../Card';

function Structure(props) {
    return (
        <header className='container'>
            <div className={styles.director}>
                <Card />
            </div>
            <Card />
        </header>
    );
}

export default Structure;