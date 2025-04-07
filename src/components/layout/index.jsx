import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";
import ContactUs from "../ContactUs";
import LoadingBar from "../LoadingBar/LoadingBar";
import Script from "next/script";

function index({ children }) {
  return (
    <>
      <LoadingBar />

      <NavBar />
      <ContactUs />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default index;
