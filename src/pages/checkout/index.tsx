import Checkout from '@/views/pages/Checkout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useAuthorization } from '@/utils'

const CheckoutPage = () => {
  const authorized = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )

  if (!authorized) return null
  return <Checkout />
}

export default CheckoutPage
