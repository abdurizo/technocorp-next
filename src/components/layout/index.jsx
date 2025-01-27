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
      <Script src="https://chatapi.helpybo.com/media/chat_widgets/user_9_widget.js?v=1730915743?v=1731557696"></Script>
    </>
  );
}

export default index;
