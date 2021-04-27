import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/pages/_app'
import Header from './Header'
import TabBar from './TabBar'
import Footer from './Footer'
import TabBarExpansion from './TabBar/TabBarExpansion'
import styles from './layout.module.scss'

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  const { children } = props
  const { hideLayout, simplifyLayout } = useSelector(
    (state: RootState) => state.layout,
  )

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

Layout.TabBarExpansion = TabBarExpansion
export default Layout
