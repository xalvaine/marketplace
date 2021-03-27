import React from 'react'

import styles from './layout.module.scss'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
