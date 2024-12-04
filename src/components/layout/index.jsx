import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";
import ContactUs from "../ContactUs";

function index({ children }) {
  return (
    <>
      {/* <NavBar /> */}
      <ContactUs />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default index;
