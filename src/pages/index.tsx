import Head from 'next/head'
import Layout from '@/components/Layout'
import { useEffect } from 'react'
import { PUBLIC_PATH } from '@/config'
import { useRouter } from 'next/router'

const IndexPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(PUBLIC_PATH.PRODUCTS).then()
  }, [])

  return (
    <>
      <Head>
        <title>Redirecting</title>
      </Head>
      <Layout>Redirecting</Layout>
    </>
  )
}

export default IndexPage
