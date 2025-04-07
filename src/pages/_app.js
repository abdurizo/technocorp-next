import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("../../ChatWidget"), {
  ssr: false,
});
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
    <>
      <Layout>
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
          <div>
            <Component {...pageProps} />
          </div>
        )}
      </Layout>
      {/* <ChatWidget /> */}
      {/* 
      <Script
        src="https://chatapi.helpybo.com/media/chat_widgets/user_9_widget.js?v=1730915743"
        strategy="lazyOnload" // Load the widget script after the page is fully loaded
        onLoad={() => console.log("Chat widget script loaded!")}
        onError={() => console.error("Failed to load the chat widget script.")}
      /> */}
    </>
  );
}

export default appWithTranslation(App);
