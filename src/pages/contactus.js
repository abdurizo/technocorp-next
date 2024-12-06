import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Toaster } from 'react-hot-toast';

import Contact from "@/components/contatUsPage/ContactUs";
import { axiosT } from "@/api/axios";
import { useEffect } from "react";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
    },
  };
}

function Contactus(props) {
  return (
    <>
      <Contact />
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
    </>
  );
}

export default Contactus;
