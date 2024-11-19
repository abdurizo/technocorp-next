import styles from './Information.module.css';

function Information(props) {
    return (
        <section className={styles.section}>
            <p className={styles.text}>
                Python dasturlash tiliga bo'lgan talab yildan yilga oshib kelmoqda. CodingDojo portalining tadqiqotlariga ko'ra, 2020— yilda aynan Python tilida dasturlovchi mutaxassislarga eng ko'p talab bo'lgan.
            </p>
            <p className={styles.text}>
                Python Artificial Intelligence (Sun'iy intellekt) va Data Science (Ulkan ma'lumotlar bilan ishlash) sohalarining tili hisoblanadi. Bugungi kunda keng ommalashib borayotgan sun'iy intellekt asosida ishlovchi dasturlarning aksari Pythonda yozilgan. Bu sohalardagi mutaxassislar bugungi kunda eng noyob va qimmatbaho kadrlar hisoblanadi.
            </p>
            <p className={styles.text}>
                Keng qamrovli va universal til. Python dasturlari deyarli barcha operativ tizimlarda va platformalarda ishlaydi.
            </p>
            <div className={styles.wrap}>
                <p className={styles.text}>
                    O'rganish uchun ham, tushunish uchun ham juda qulay va sodda kod.
                </p>
                <p className={styles.text}>
                    Keng qamrovli va universal til. Python dasturlari deyarli barcha operativ tizimlarda va platformalarda ishlaydi.
                </p>
                <p className={styles.text}>
                    Keng qamrovli va universal til. Python dasturlari deyarli barcha operativ tizimlarda va platformalarda ishlaydi.
                </p>
                
            </div>
        </section>
    );
}

export default Information;