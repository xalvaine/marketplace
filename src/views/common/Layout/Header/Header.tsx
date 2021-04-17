import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from '@/utils'
import { BxBell, BxMenu, BxSearch } from '@/icons'
import { Badge, Button, Input, Link } from '@/components'
import { layout } from '@/reducers'
import { PATH } from '@/config'
import { RootState } from '@/pages/_app'
import Additional from './Additional'
import Logo from './assets/logo-small.svg'
import Icons from './Icons'
import styles from './header.module.scss'
import Categories from './Categories'
import Catalog from './Catalog'

const Header = () => {
  const dispatch = useDispatch()
  const { showSearch, showCategories, showCatalog } = useSelector(
    (state: RootState) => state.layout,
  )
  const isDesktop = useMediaQuery(`(min-width: 1024px)`)

  return (
    <>
      <Additional />
      <header className={styles.header}>
        <Badge dot className={styles.bellBadge} color="#1890ff" count={1}>
          <BxBell className={styles.icon} />
          <p />
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
          size="large"
          type="primary"
          onClick={() => dispatch(layout.setShowCatalog(!showCatalog))}
        >
          Каталог
        </Button>
        <Input
          className={styles.search}
          hidden={!isDesktop && !showSearch}
          leftIcon={!isDesktop ? BxSearch : undefined}
          placeholder="Поиск по товарам"
          search={isDesktop}
          size="large"
        />
        <Icons />
      </header>
      {isDesktop && <Catalog />}
      {(isDesktop || !!showCategories) && <Categories />}
    </>
  )
}

export default Header
