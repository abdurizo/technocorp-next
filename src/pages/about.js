import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from "@/styles/styles.module.css";

import AboutUs from '@/components/about/AboutUs';
import Card from '@/components/about/Card';
import Programmers from '@/components/about/Programmers';

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ... (await serverSideTranslations(locale, ['common',])),
        locale: locale
      },
    };
  }

function About() {
    return (
        <div className={styles.background_about}>
            <AboutUs />
        <Card />
        <Programmers/>
        </div>
    );
}

export default About;