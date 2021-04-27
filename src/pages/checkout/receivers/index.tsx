import Receivers from '@/views/pages/Receivers'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'

const ReceiversPage = () => {
  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({ hideLayout: true })))
  return <Receivers />
}

export default ReceiversPage
