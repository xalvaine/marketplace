import Head from 'next/head'
import Group from '@/views/pages/Group'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'

const GroupPage = () => {
  const dispatch = useDispatch()
  dispatch(layout.setShowSearch(true))
  return (
    <>
      <Head>
        <title>Сладости</title>
      </Head>
      <Group />
    </>
  )
}

export default GroupPage
