import React from 'react'
import Link from 'next/link'
import styles from './layout.module.scss'
import { PUBLIC_PATH } from '../../config'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <header className={styles.header}>
        <ul>
          <li>
            <Link href={PUBLIC_PATH.HOME}>Главная</Link>
          </li>
          <li>
            <Link href={PUBLIC_PATH.MOSCOW}>Москва</Link>
          </li>
          <li>
            <Link href={PUBLIC_PATH.PRAGUE}>Прага</Link>
          </li>
          {1 === 2 - 1 ? (
            <li className={styles.right}>Войти</li>
          ) : (
            <li className={styles.right}>Профиль</li>
          )}
        </ul>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
