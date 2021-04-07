import Head from 'next/head'
import Group from '@/views/pages/Group'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import Layout from '@/views/common/Layout'

const GroupPage = () => {
  const dispatch = useDispatch()
  dispatch(layout.setShowSearch(true))
  return (
    <Layout>
      <Head>
        <title>Сладости</title>
      </Head>
      <Group />
    </Layout>
  )
}

export default GroupPage
