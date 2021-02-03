import Head from 'next/head'
import Layout from 'components/Layout'
import Home from 'components/Home'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default IndexPage
