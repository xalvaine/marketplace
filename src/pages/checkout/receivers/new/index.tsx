import Receiver from '@/views/pages/Receiver'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'

const ReceiverPage = () => {
  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({ hideLayout: true })))
  return <Receiver />
}

export default ReceiverPage
