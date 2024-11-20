import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "@/components/servise/Header";
import Video from "@/components/servise/Video";
import Programmers from "@/components/about/Programmers";
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
