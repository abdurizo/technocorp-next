import classN from 'classnames';
import styles from './ContactUs.module.css'

import Form from '@/components/Form';
import СircularShadow from "@/components/СircularShadow";

function Contact(props) {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className={classN(styles.title, 'sectionTitle')}>BIZ BILAN BOG‘LANING</h2>
            <Form />
            <p className='background_text'>BIZ HAQIMIZDA</p>
            <СircularShadow className={styles.circular_min} />
            <СircularShadow className={styles.circular} />
        </section>
    );
}

export default Contact;