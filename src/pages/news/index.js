import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '@/components/news/Header';
import SectionNews from '@/components/news/SectionNews';


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
      locale: locale
    },
  };
}

function News(props) {
    return (
        <>
            <Header />
            <SectionNews/>
        </>
    );
}

export default News;