/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cancer Interactive Data Story</title>
        <meta name="title" content="Cancer Interactive Data Story" />
        <meta
          name="description"
          content="Interactive exploration of cancer site incidence and deaths including demographic distributions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cancer-blending101.vercel.app/"
        />
        <meta property="og:title" content="Cancer Interactive Data Story" />
        <meta
          property="og:description"
          content="Interactive exploration of cancer site incidence and deaths including demographic distributions."
        />
        <meta
          property="og:image"
          content="https://www.poily.com/cancer-thumbnail.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://cancer-blending101.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Cancer Interactive Data Story"
        />
        <meta
          property="twitter:description"
          content="Interactive exploration of cancer site incidence and deaths including demographic distributions."
        />
        <meta
          property="twitter:image"
          content="https://www.poily.com/cancer-thumbnail.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="img/polly-coming-soon-fab-icon.png"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
