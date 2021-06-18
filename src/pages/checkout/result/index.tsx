import Result from '@/views/pages/Result'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useAuthorization } from '@/utils'

const ResultPage = () => {
  const authorized = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )
  return authorized && <Result />
}

export default ResultPage
