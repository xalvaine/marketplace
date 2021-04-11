import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Group from '@/views/pages/Group'
import { layout } from '@/reducers'
import Layout from '@/views/common/Layout'

const GroupPage = () => {
  const dispatch = useDispatch()

  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))

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
