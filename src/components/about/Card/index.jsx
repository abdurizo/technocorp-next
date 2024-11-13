import styles from './Card.module.css';

function Card({ count, text }) {
    return (
        <>
            <section className='container'> 
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <p className={styles.count}>+68</p>
                        <p className={styles.text}>Xodimlar</p>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.count}>+14</p>
                        <p className={styles.text}>Muvaffaqiyatli loyihalar</p>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.count}>+14</p>
                        <p className={styles.text}>Xursand mijozlarimiz</p>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.count}>+2</p>
                        <p className={styles.text}>Ish tajribasi</p>
                    </div>
                </div>
            </section>


        </>

    );
}

export default Card;