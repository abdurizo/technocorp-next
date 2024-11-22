import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import BreadCrumbs from '@/components/BreadCrumbs';
import Form from '@/components/Form';
import Video from '@/components/servise/VideoBlock';
import Desc from '@/components/servise/internalServise/Desc';


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
      locale: locale
    },
  };
}

function InternalServise(props) {
  return (
    <div className='container'>
      <BreadCrumbs back={'Xizmatlar'} href={'/servise'} />
      <Video />
      <Desc />
      <Form/>
    </div>
  );
}

export default InternalServise;