import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Group from '@/views/pages/Group'
import { layout } from '@/reducers'

// interface Props {
//   catalog: Catalog
// }
//
// export const getStaticProps: GetStaticProps<Props> = async (context) => {
//   console.log(context)
//   if (!context.params?.group) return { revalidate: 60, notFound: true }
//   const catalog = await getCatalog(context.params.group as string)
//   console.log(catalog)
//   return { props: { catalog }, revalidate: 60 }
// }
//
// export const getStaticPaths: GetStaticPaths = async () => {
//   return { paths: [], fallback: `blocking` }
// }

const GroupPage = () => {
  // const { catalog } = props
  const dispatch = useDispatch()

  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))

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
