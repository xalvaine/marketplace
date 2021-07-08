import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import Header from './Header'
import TabBar from './TabBar'
import Footer from './Footer'
import TabBarExpansion from './TabBar/TabBarExpansion'
import HeaderExpansion from './Header/HeaderExpansion'
import styles from './layout.module.scss'

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  const { children } = props
  const { hideLayout, simplifyLayout, hideBodyOverflow } = useSelector(
    (state: RootState) => state.layout,
  )

  useEffect(() => {
    if (hideBodyOverflow) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth
      document.body.style.overflow = `hidden`
      document.body.style.width = `calc(100% - ${scrollbarWidth}px)`
    } else {
      document.body.style.overflow = ``
      document.body.style.width = ``
    }
  }, [hideBodyOverflow])

  if (hideLayout && children) return children as JSX.Element
  if (hideLayout && !children) return null
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      {!simplifyLayout && (
        <>
          <TabBar />
          <Footer />
        </>
      )}
    </>
  )
}

Layout.HeaderExpansion = HeaderExpansion
Layout.TabBarExpansion = TabBarExpansion
export default Layout
