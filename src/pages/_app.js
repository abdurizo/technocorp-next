import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "@/components/LoadingBar/LoadingBar";
import { getAllServicesList } from "@/api/pagesApis/service";
const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

function App({ Component, pageProps }) {
  const router = useRouter();

  const isBrowser = typeof window !== "undefined";
  return (
    <Layout>
      <LoadingBar />
      {/* <AnimatePresence mode="wait"> */}
      {/* {isBrowser ? (
          <motion.div
            key={router.route}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <Component {...pageProps} />
          </motion.div>
        ) : (
          <Component {...pageProps} />
        )} */}
      {/* <motion.div
          key={router.route}
          initial="hidden"
          animate={"visible"}
          exit={"exit"}
          variants={variants}
        >
          <Component {...pageProps} />;
        </motion.div> */}
      {/* </AnimatePresence> */}

      {isBrowser ? (
        <motion.div
          key={router.route}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}

export default appWithTranslation(App);
