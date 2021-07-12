import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Group from '@/views/pages/showcase/Group'
import { Category } from '@/interfaces'
import { layout } from '@/reducers'
import { GetStaticPaths, GetStaticProps } from 'next'
import { showcaseAPI } from '@/api'

interface Props {
  group: Category<Category>
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (!context.params?.category) return { revalidate: 60, notFound: true }
  try {
    const { data } = await showcaseAPI.get(
      `/categories/${context.params.group}`,
    )
    return { props: { group: data.items[0] }, revalidate: 60 }
  } catch (error) {
    console.error(error)
    return { notFound: true, revalidate: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: `blocking` }
}

const GroupPage = (props: Props) => {
  const { group } = props
  const dispatch = useDispatch()

  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))

  return (
    <>
      <Head>
        <title>Сладости</title>
      </Head>
      <Group group={group} />
    </>
  )
}

export default GroupPage
