import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import Data from '@/views/pages/Data'
import { useAuthorization } from '@/utils'

const DataPage = () => {
  const authorized = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )

  if (!authorized) return null
  return <Data />
}

export default DataPage
