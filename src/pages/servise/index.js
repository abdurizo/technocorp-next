import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Video from "@/components/servise/VideoBlock";
import Services from "@/components/home/Services";
import { getAllServicesList } from "@/api/pagesApis/service";
import Head from "next/head";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("services_title")}</title>
      </Head>
      <div className="server_wrap">
        <Services services={serviceList} />
      </div>

      <Video videoSrc={"https://www.youtube.com/watch?v=R2BAX0ZtA0c"} />
    </>
  );
}

export default Servise;
