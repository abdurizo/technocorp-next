<<<<<<< HEAD
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { axiosT } from "@/api/axios";
=======
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8

import BreadCrumbs from "@/components/BreadCrumbs";
import Form from "@/components/Form";
import Video from "@/components/servise/VideoBlock";
import Desc from "@/components/servise/internalServise/Desc";
import { axiosT } from "@/api/axios";

export async function getServerSideProps({ locale, query }) {
  const data = await axiosT.get(`/service/detail/${query.internalservise}`);

<<<<<<< HEAD

export async function getServerSideProps({ locale, query }) {

  const data = await axiosT.get(`/service/detail/${query.internalservise}`);
  

  return {
    props: {
      ... (await serverSideTranslations(locale, ['common',])),
=======
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8
      locale: locale,
      detailId: data.data,
    },
  };
}

function InternalServise(props) {
<<<<<<< HEAD
  console.log(props.detailId, "Prop");
=======
  console.log(props.detailId);
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8
  return (
    <div className="container">
      <BreadCrumbs back={"Xizmatlar"} href={"/servise"} />
      <Video />
      <Desc />
<<<<<<< HEAD
      <Form type={1} id={props.detailId.id } />
=======
      <Form />
>>>>>>> 5d1917cd3badd75e31b6897e8b46a5e83ce3c8f8
    </div>
  );
}

export default InternalServise;
