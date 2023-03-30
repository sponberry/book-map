import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

// getServerSide props is called at request time, context contains specific params
// use it only if needing to pre-render a page where data MUST be fetched at request time
// result cannot be cached by a CDN without extra configuration
// if SEO not important can use client-side rendering to fetch extra data and populate pre-rendered bits eg layout
// recommended hook for this is SWR: https://swr.vercel.app/

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} />
      </Head>
      <h1>First Post</h1>
      <Link href="/">Back to home</Link>
    </Layout>
  );
}
