import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import Header from '@/components/servise/Header';
import Video from '@/components/servise/Video';
import Programmers from '@/components/about/Programmers';


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
      locale: locale
    },
  };
}

function Servise() {
    return (
        <>
        <Header />
        <Video/>
        </>
    );
}

export default Servise;