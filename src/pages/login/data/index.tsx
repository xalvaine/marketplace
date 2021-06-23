import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import Data from '@/views/pages/authorization/Data'
import { useAuthorization } from '@/utils'

const DataPage = () => {
  const { pending } = useAuthorization()
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )

  if (pending) return null
  return <Data />
}

export default DataPage
