import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BreadCrumbs from "@/components/BreadCrumbs";
import Form from "@/components/Form";
import Video from "@/components/servise/VideoBlock";
import Desc from "@/components/servise/internalServise/Desc";
import { axiosT } from "@/api/axios";

export async function getServerSideProps({ locale, query }) {
  const data = await axiosT.get(`/service/detail/${query.internalservise}`);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
      detailId: data.data,
    },
  };
}

function InternalServise(props) {
  console.log(props.detailId);
  return (
    <div className="container">
      <BreadCrumbs back={"Xizmatlar"} href={"/servise"} />
      <Video />
      <Desc />
      <Form />
    </div>
  );
}

export default InternalServise;
