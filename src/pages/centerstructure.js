import React from "react";

import Structure from "@/components/centerStructure/Structure";
import Programmers from "@/components/about/Programmers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCenterStructure, getDevelopers } from "@/api/pagesApis/employees";

function CenterStructure({ developers, centerStructure }) {
  return (
    <>
      <Structure centerStructure={centerStructure} />
      <Programmers developers={developers} />
    </>
  );
}

export default CenterStructure;

export async function getServerSideProps({ locale }) {
  const developers = await getDevelopers(locale);
  const centerStructure = await getCenterStructure(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      developers,
      centerStructure,
    },
  };
}
