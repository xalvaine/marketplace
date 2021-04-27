import Courier from '@/views/pages/Courier'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'

const CourierPage = () => {
  const dispatch = useDispatch()
  useEffect(() => void dispatch(layout.setLayoutParams({ hideLayout: true })))
  return <Courier />
}

export default CourierPage
