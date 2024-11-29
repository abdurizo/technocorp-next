import styles from './ContactUs.module.css';

import Form from '@/components/Form'

function ContactUs() {
    return (
        <section className='container'>
            <h2 className='sectionTitle'>BIZ BILAN BOG‘LANING</h2>
            <Form type={2}/>
        </section>
    );
}

export default ContactUs;