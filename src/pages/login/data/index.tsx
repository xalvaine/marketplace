import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import Data from '@/views/pages/Data'

const DataPage = () => {
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )
  return <Data />
}

export default DataPage
