import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '@/components/home/Header';
import Carousel from '@/components/Carousel/Carousel';
import AboutUs from '@/components/home/AboutUs';
import OurProjects from '@/components/home/OurProjects'


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
      locale: locale
    },
  };
}

export default function Home({ locale }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header locale={locale} />
      <Carousel />
      <div className="conainer">
        <AboutUs />
        <OurProjects />
      </div>

    </>
  );
}
