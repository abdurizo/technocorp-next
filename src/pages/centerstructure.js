import React from "react";

import Structure from "@/components/centerStructure/Structure";
import Programmers from "@/components/about/Programmers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function CenterStructure(props) {
  return (
    <>
      <Structure />
      <Programmers />
    </>
  );
}

export default CenterStructure;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
    },
  };
}
