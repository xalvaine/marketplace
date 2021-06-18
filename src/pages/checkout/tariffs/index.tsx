import Tariffs from '@/views/pages/Tariffs'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useAuthorization } from '@/utils'

const TariffsPage = () => {
  const authorized = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )
  return authorized && <Tariffs />
}

export default TariffsPage
