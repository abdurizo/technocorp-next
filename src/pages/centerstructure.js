import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Structure from '@/components/centerStructure/Structure';
import Programmers from '@/components/about/Programmers';

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ... (await serverSideTranslations(locale, ['common',])),
        locale: locale
      },
    };
  }

function CenterStructure() {
    return (
        <>
             <Structure />
             <Programmers />
        </>
    );
}

export default CenterStructure;