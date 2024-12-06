
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { axiosT } from "@/api/axios";
import { Toaster } from 'react-hot-toast';


import BreadCrumbs from "@/components/BreadCrumbs";
import Form from "@/components/Form";
import Video from "@/components/servise/VideoBlock";
import Desc from "@/components/servise/internalServise/Desc";
// import { axiosT } from "@/api/axios";

// export async function getServerSideProps({ locale, query }) {
// const data = await axiosT.get(`/service/detail/${query.internalservise}`);

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

    console.log(props.detailId, "Prop");

    // console.log(props.detailId);

    return (
      <div className="container">
        <BreadCrumbs back={"Xizmatlar"} href={"/servise"} />
        <Video />
        <Desc />

        <Form type={1} id={props.detailId.id} />
        <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
            fontFamily: "Roboto-Medium",
            fontSize:"1.8rem",
          },
        }}
      />
      </div>
    );
  }

  export default InternalServise;
