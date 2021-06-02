import Checkout from '@/views/pages/Checkout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )

  return <Checkout />
}

export default CheckoutPage
