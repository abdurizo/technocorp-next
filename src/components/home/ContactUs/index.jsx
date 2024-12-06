import styles from './ContactUs.module.css';
import { useTranslation } from "next-i18next";

import Form from '@/components/Form'

function ContactUs() {
    const { t } = useTranslation();
    return (
        <section className='container'>
            <h2 className='sectionTitle'>{ t('contact_us')} </h2>
            <Form type={2}/>
        </section>
    );
}

export default ContactUs;