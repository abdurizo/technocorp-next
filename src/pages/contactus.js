import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Contact from '@/components/contatUsPage/ContactUs'

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ... (await serverSideTranslations(locale, ['common',])),
        locale: locale
      },
    };
  }

function Contactus(props) {
    return (
        <>
            <Contact/>
        </>
    );
}

export default Contactus;