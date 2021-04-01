import Head from 'next/head'
import Category from '@/views/Category'

const CategoryPage = () => {
  return (
    <>
      <Head>
        <title>Продукты питания</title>
      </Head>
      <Category />
    </>
  )
}

export default CategoryPage
