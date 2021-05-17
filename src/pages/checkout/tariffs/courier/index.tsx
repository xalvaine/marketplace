import Courier from '@/views/pages/Courier'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useMediaQuery } from '@/utils'

const CourierPage = () => {
  const dispatch = useDispatch()
  const { matches, rendered } = useMediaQuery(`(min-width: 1024px)`)
  useEffect(() => {
    if (!rendered) return
    dispatch(
      layout.setLayoutParams({
        hideLayout: !matches,
        simplifyLayout: matches,
      }),
    )
  }, [dispatch, matches, rendered])

  return <Courier />
}

export default CourierPage
