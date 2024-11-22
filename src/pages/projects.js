import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import dynamic from 'next/dynamic';

import Header from '@/components/projects/Header';
const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false });
import GridCards from '@/components/projects/GridCards';


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
      locale: locale
    },
  };
}

function Projects(props) {
  return (
    <div className='container'>
      <Header />
      <GridCards />
      <Carousel />
    </div>
  );
}

export default Projects;