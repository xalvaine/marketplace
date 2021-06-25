import Checkout from '@/views/pages/checkout/Checkout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout, authorization } from '@/reducers'
import { useAuthorization } from '@/utils'

const CheckoutPage = () => {
  const { authorized, pending } = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )

  useEffect(
    () => void (authorized && dispatch(authorization.setRegistered(true))),
  )

  if (pending) return null
  return <Checkout />
}

export default CheckoutPage
