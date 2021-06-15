import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Catalog as CatalogType } from '@/interfaces'
import Catalog from '@/views/pages/Catalog'
import { useDispatch } from 'react-redux'
import { layout } from '@/reducers'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@/utils'
import { PATH } from '@/config'
import { showcaseAPI } from '@/api'

interface Props {
  catalogs: CatalogType[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { data } = await showcaseAPI.get(`/catalogs`)
    return { props: { catalogs: data.items }, revalidate: 60 }
  } catch (error) {
    console.error(error)
    return { props: { catalogs: [] }, revalidate: 60 }
  }
}

const CatalogPage = (props: Props) => {
  const { catalogs } = props
  const dispatch = useDispatch()
  const router = useRouter()
  const { matches } = useMediaQuery(`(min-width: 1024px)`)

  useEffect(() => void dispatch(layout.setLayoutParams({ showSearch: true })))
  useEffect(() => void (matches && router.push(PATH.HOME)), [matches, router])

  return (
    <>
      <Head>
        <title>Каталог</title>
      </Head>
      <Catalog catalogs={catalogs} />
    </>
  )
}

export default CatalogPage
