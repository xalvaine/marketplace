import Tariffs from '@/views/pages/checkout/Tariffs'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useAuthorization } from '@/utils'

const TariffsPage = () => {
  const { pending } = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )
  if (pending) return null
  return <Tariffs />
}

export default TariffsPage
