import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  // if need to match all routes after posts/name/othername etc look up catch-all routes https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
  const paths = getAllPostIds();
  return {
    paths,
    // fallback false any paths not returned result in 404
    fallback: false,
    // fallback true changes behaviour: https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
    // fallback blocking caches for future requests
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
