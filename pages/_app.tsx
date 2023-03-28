import "swiper/css";

import "@/styles/main.scss";
import "@/styles/font.css";

import type { AppProps } from "next/app";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import client from "@/graphql";
import { ApolloProvider } from "@apollo/client";
import CategoryProvider from "@/context/CategoryProvider";
import { SwiperProvider } from "@/context/SwiperProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CategoryProvider>
        <SwiperProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SwiperProvider>
      </CategoryProvider>
    </ApolloProvider>
  );
}
