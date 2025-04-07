import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />

        <script
          src="https://chatapi.helpybo.com/media/chat_widgets/user_9_widget.js?v=1730915743?v=1731557696"
          strategy="lazyOnload"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
