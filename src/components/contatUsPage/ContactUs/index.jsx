import classN from 'classnames';
import styles from './ContactUs.module.css'

import { useTranslation } from "next-i18next";

import Form from '@/components/Form';
import СircularShadow from "@/components/СircularShadow";

function Contact(props) {
    const { t } = useTranslation();
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className={classN(styles.title, 'sectionTitle')}>{ t('contact_us')}</h2>
            <Form type={2}/>
            <p className='background_text'>{ t('bc_contact_us')}</p>
            <СircularShadow className={styles.circular_min} />
            <СircularShadow className={styles.circular} />
        </section>
    );
}

export default Contact;