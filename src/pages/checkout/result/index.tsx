import Result from '@/views/pages/checkout/Result'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useAuthorization } from '@/utils'

const ResultPage = () => {
  const { pending } = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )
  if (pending) return null
  return <Result />
}

export default ResultPage
