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

function Internalservise(props) {
    return (
        <div>
            
        </div>
    );
}

export default Internalservise;