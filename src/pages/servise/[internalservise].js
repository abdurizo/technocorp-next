import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { axiosT } from "@/api/axios";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "next-i18next";

import BreadCrumbs from "@/components/BreadCrumbs";
import Form from "@/components/Form";
import Video from "@/components/servise/VideoBlock";
import Desc from "@/components/servise/internalServise/Desc";

// import { axiosT } from "@/api/axios";

// export async function getServerSideProps({ locale, query }) {
// const data = await axiosT.get(`/service/detail/${query.internalservise}`);

export async function getServerSideProps({ locale, query }) {
  const data = await axiosT.get(`/service/detail/${query.internalservise}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      locale: locale,
      detailId: data.data,
    },
  };
}

function InternalServise({ detailId }) {
  const { t } = useTranslation();
  console.log(detailId);
  return (
    <div
      className="container"
      style={{
        marginTop: "15rem",
      }}
    >
      <BreadCrumbs back={t("services")} href={"/servise"} />
      <div className="mb-8"></div>
      <Desc title={detailId.title} desc={detailId.description} />
      <Video videoSrc={detailId.video} />

      <Form type={1} id={detailId.id} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            fontFamily: "Roboto-Medium",
            fontSize: "1.8rem",
          },
        }}
      />
    </div>
  );
}

export default InternalServise;
