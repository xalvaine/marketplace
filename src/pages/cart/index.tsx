import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import { useEffect } from 'react'
import Cart from '@/views/pages/showcase/Cart'

const CartPage = () => {
  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({})))

  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>
      <Cart />
    </>
  )
}

export default CartPage
