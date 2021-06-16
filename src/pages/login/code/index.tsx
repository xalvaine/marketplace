import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import Code from '@/views/pages/Code'

const CodePage = () => {
  const dispatch = useDispatch()
  useEffect(
    () => void dispatch(layout.setLayoutParams({ simplifyLayout: true })),
  )
  return <Code />
}

export default CodePage
