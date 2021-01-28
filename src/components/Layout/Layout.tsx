import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAuth, logout } from 'reducers/auth'
import Link from 'next/link'
import { PUBLIC_PATH, PRIVATE_PATH } from 'config'
import { RootState } from 'pages/_app'
import styles from './layout.module.scss'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  const { isLoggedIn } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

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
          {isLoggedIn ? (
            <>
              <li style={{ marginLeft: `auto` }}>
                <Link href={PRIVATE_PATH.PROFILE}>
                  <a>Профиль</a>
                </Link>
              </li>
              <li onClick={() => dispatch(logout())}>
                <a>Выйти</a>
              </li>
            </>
          ) : (
            <li
              style={{ marginLeft: `auto` }}
              onClick={() => dispatch(postAuth())}
            >
              <a>Войти</a>
            </li>
          )}
        </ul>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
