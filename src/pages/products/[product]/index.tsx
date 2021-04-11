import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import api from '@/api'
import Product from '@/views/pages/Product'
import { Product as ProductType } from '@/interfaces'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import Layout from '@/views/common/Layout'
import { useEffect } from 'react'

interface Props {
  product: ProductType
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: `blocking`,
})

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (!context.params) return { notFound: true }
  const { product } = context.params
  const { data } = await api.get(`/products/${product}`)

  return {
    revalidate: 60,
    props: { product: data.items[0] },
  }
}

const ProductPage = (props: Props) => {
  const { product } = props
  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({})))

  return (
    <Layout>
      <Head>
        <title>Арахисовая паста</title>
      </Head>
      <Product product={product} />
    </Layout>
  )
}

export default ProductPage
