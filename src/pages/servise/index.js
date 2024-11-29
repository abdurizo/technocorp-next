import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Video from "@/components/servise/VideoBlock";
import Services from "@/components/home/Services";
import { getAllServicesList } from "@/api/pagesApis/service";

export async function getServerSideProps({ locale }) {
  const serviceList = await getAllServicesList(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),  
      locale: locale,
      serviceList,
    },
  };
}

function Servise({ serviceList }) {
  return (
    <>
      <Services services={serviceList} />
      <Video />
    </>
  );
}

export default Servise;
