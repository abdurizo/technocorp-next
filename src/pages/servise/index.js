import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import Video from "@/components/servise/VideoBlock";
import Services from "@/components/home/Services";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
    },
  };
}

function Servise() {
  return (
    <>
      <Services />
      <Video />
    </>
  );
}

export default Servise;
