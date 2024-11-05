import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';


function index({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default index
