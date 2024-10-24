import Head from 'next/head';

import NavBar from './NavBar';


function index({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default index
