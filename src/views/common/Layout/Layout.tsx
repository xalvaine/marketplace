import styles from './layout.module.scss'
import Header from './Header'
import TabBar from './TabBar'
import TabBarExpansion from './TabBar/TabBarExpansion'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <TabBar />
    </>
  )
}

Layout.TabBarExpansion = TabBarExpansion
export default Layout
