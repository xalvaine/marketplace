import { useSelector } from 'react-redux'
import { useMediaQuery } from '@/utils'
import { BxBell, BxSearch, BxMenu } from '@/icons'
import { Badge, Button, Input, Link } from '@/components'
import { PATH } from '@/config'
import { RootState } from '@/pages/_app'
import { useEffect, useState } from 'react'
import Additional from './Additional'
import Logo from './assets/logo-small.svg'
import styles from './header.module.scss'
import Icons from './Icons'

const Header = () => {
  const { showSearch } = useSelector((state: RootState) => state.layout)
  const isDesktop = useMediaQuery(`(min-width: 1024px)`)
  const [showInput, setShowInput] = useState(false)

  useEffect(() => {
    setShowInput(!isDesktop && !showSearch)
  }, [isDesktop, showSearch])

  return (
    <>
      <Additional />
      <header className={styles.header}>
        <Badge dot className={styles.bellBadge} color="#1890ff" count={1}>
          <BxBell className={styles.icon} />
          <p />
        </Badge>
        <Link href={PATH.HOME}>
          <Logo className={styles.logo} />
        </Link>
        <Link className={styles.catalogLink} href={PATH.CATALOG}>
          <Button icon={BxMenu} size="large" type="primary">
            Каталог
          </Button>
        </Link>
        <Input
          className={styles.search}
          hidden={showInput}
          leftIcon={BxSearch}
          placeholder="Поиск по товарам"
          search={isDesktop}
          size="large"
        />
        <Icons />
      </header>
    </>
  )
}

export default Header
