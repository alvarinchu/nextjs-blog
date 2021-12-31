import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Layout />

      <h1>First Post</h1>
      <Link href="/">
        <a>Back to home JS</a>
      </Link>
      <p>
        <a href="/">Back to home Server</a>
      </p>
    </>
  );
}
