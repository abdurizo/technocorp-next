import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';



import Header from '@/components/news/internalNews/Header';
import Information from '@/components/news/internalNews/Information';
// import OtherNews from '@/components/news/internalNews/OtherNews';
const OtherNews = dynamic(() => import('@/components/news/internalNews/OtherNews'), { ssr: false });

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
      locale: locale
    },
  };
}

function Internalnews() {
 
  return (
    <div className='container'>
      <Header />
      <Information />
      <OtherNews />
    </div>
  );
}

export default Internalnews;