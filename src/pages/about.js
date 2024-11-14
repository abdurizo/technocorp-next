import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import dynamic from 'next/dynamic';

import styles from "@/styles/styles.module.css";

import AboutUs from '@/components/about/AboutUs';
import Card from '@/components/about/Card';
import Programmers from '@/components/about/Programmers';
// import Carousel from '@/components/CarouselProgrammer';
// const Carousel = dynamic(() => import('@/components/CarouselProgrammer'), { ssr: false });

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
      <Programmers />
      {/* <Carousel/> */}
    </div>
  );
}

export default About;