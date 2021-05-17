import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { layout } from '@/reducers'
import { useMediaQuery } from '@/utils'
import RussianPost from '@/views/pages/RussianPost'

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
  return <RussianPost />
}

export default CourierPage
