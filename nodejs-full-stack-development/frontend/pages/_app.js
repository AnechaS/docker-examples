import React from "react";
import Head from "next/head";
import { SWRConfig } from "swr";

import "../styles/globals.css";

const fetcher = (url) => {
  const baseURL = process.env.NEXT_PUBLIC_API_SERVER;
  return fetch(baseURL + url).then((res) => res.json());
};

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Next.js SWR Infinite Loading" />
        <meta name="keywords" content="Next.js, SWR Infinite" />
        <title>Posts</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </React.Fragment>
  );
}
