import Head from 'next/head'
import Category from '@/views/pages/Category'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'

const CategoryPage = () => {
  const dispatch = useDispatch()
  dispatch(layout.setShowSearch(true))
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
