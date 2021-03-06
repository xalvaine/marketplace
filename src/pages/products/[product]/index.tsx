import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { showcaseAPI } from '@/api'
import Product from '@/views/pages/showcase/Product'
import { Product as ProductType } from '@/interfaces'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
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
  const { data } = await showcaseAPI.get(`/products/${product}`)

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
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Product product={product} />
    </>
  )
}

export default ProductPage
