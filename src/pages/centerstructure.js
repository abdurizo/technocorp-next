import React from "react";
import { useTranslation } from "next-i18next";

import Structure from "@/components/centerStructure/Structure";
import Programmers from "@/components/about/Programmers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCenterStructure, getDevelopers } from "@/api/pagesApis/employees";

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
function CenterStructure({ developers, centerStructure }) {
  const { t } = useTranslation();
  return (
    <>
      <Structure centerStructure={centerStructure} />
      <Programmers
        title={t("additional_departments")}
        background_text={t("departments")}
        developers={centerStructure.filter((card) => card.position === 3)}
      />
    </>
  );
}

export default CenterStructure;
