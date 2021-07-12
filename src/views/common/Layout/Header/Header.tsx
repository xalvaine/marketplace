import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from '@/utils'
import { BxBell, BxMenu, BxSearch } from '@/icons'
import { Badge, Button, Input, Link } from '@/components'
import { layout } from '@/reducers'
import { PATH } from '@/config'
import { RootState } from '@/pages/_app'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ReactComponent as Logo } from './assets/logo-small.svg'
import Additional from './Additional'
import Icons from './Icons'
import styles from './header.module.scss'
import Categories from './Categories'
import Catalog from './Catalog'

const Header = () => {
  const dispatch = useDispatch()
  const {
    showSearch,
    showCategories,
    showCatalog,
    simplifyLayout,
    expandDesktopHeader,
  } = useSelector((state: RootState) => state.layout)
  const { matches } = useMediaQuery(`(min-width: 1024px)`)
  const additionalRef = useRef<HTMLDivElement>(null)
  const expansionRef = useRef<HTMLDivElement>(null)
  const [shadowVisible, setShadowVisible] = useState(false)

  const handleScroll = () => {
    if (additionalRef.current) {
      setShadowVisible(window.scrollY > additionalRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [])

  useEffect(() => {
    handleScroll()
  }, [expandDesktopHeader])

  if (simplifyLayout) {
    return (
      <header className={styles.simpleHeader}>
        <Link href={PATH.CHECKOUT}>
          <Logo className={styles.logo} />
        </Link>
      </header>
    )
  }

  return (
    <>
      <Additional ref={additionalRef} />
      <div
        ref={expansionRef}
        className={classNames(
          styles.headerExpansion,
          expandDesktopHeader && styles.headerExpansionShown,
        )}
        id="header-extension-root"
      />
      <header
        className={classNames(
          shadowVisible ? styles.headerShadowed : styles.header,
          expandDesktopHeader && styles.headerHidden,
        )}
      >
        <Badge dot className={styles.bellBadge} color="#1890ff" count={1}>
          <BxBell className={styles.icon} />
        </Badge>
        <Link
          href={PATH.HOME}
          onClick={() => dispatch(layout.setShowCatalog(false))}
        >
          <Logo className={styles.logo} />
        </Link>
        <Button
          className={styles.button}
          icon={BxMenu}
          onClick={() => dispatch(layout.setShowCatalog(!showCatalog))}
        >
          Каталог
        </Button>
        <Input
          className={styles.search}
          hidden={!matches && !showSearch}
          leftIcon={!matches ? BxSearch : undefined}
          placeholder="Поиск по товарам"
          search={matches}
        />
        <Icons />
      </header>
      {matches && <Catalog />}
      {(matches || !!showCategories) && <Categories />}
    </>
  )
}

export default Header
