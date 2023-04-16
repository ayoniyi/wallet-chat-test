import type { NextPage } from "next";
import Head from "next/head";
import Home from "./Home/Home";

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>buylist</title>
        <meta name="description" content="escrow everything..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIcon.svg" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
};
export default Landing;
