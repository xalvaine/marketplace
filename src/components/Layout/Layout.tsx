import styles from './layout.module.scss'
import Header from './Header'
import TabBar from './TabBar'

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

export default Layout
