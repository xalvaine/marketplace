import React from 'react'
import Header from './Header'
import TabBar from './TabBar'
import Footer from './Footer'
import TabBarExpansion from './TabBar/TabBarExpansion'
import styles from './layout.module.scss'

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
      <Footer />
    </>
  )
}

Layout.TabBarExpansion = TabBarExpansion
export default Layout
