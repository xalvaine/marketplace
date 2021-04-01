import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from '@/components'

import styles from './tab-bar.module.scss'
import { BxHeart, BxHomeAlt, BxMenu, BxShoppingBag } from '@/icons'
import { Typography, Badge } from '@/components'
import { PATH } from '@/config'

const tabs = [
  {
    icon: BxHomeAlt,
    keys: [PATH.HOME],
    path: PATH.HOME,
    name: `Главная`,
    notificationsCount: 0,
  },
  {
    icon: BxMenu,
    keys: [PATH.CATALOG, PATH._PRODUCTS],
    path: PATH.CATALOG,
    name: `Каталог`,
    notificationsCount: 0,
  },
  {
    icon: BxHeart,
    keys: [PATH.FAVOURITES],
    path: PATH.FAVOURITES,
    name: `Избранное`,
    notificationsCount: 9,
  },
  {
    icon: BxShoppingBag,
    keys: [PATH.CART],
    path: PATH.CART,
    name: `Корзина`,
    notificationsCount: 99,
  },
]

const TabBar = () => {
  const { pathname } = useRouter()
  const [page, setPage] = useState<string>()

  useEffect(
    () =>
      tabs.forEach(
        (tab) =>
          tab.keys.filter((key) => pathname.includes(key)).length &&
          setPage(tab.path),
      ),
    [pathname],
  )

  return (
    <ul className={styles.wrapper}>
      {tabs.map((tab) => (
        <Link key={tab.path} href={tab.path}>
          <li className={page === tab.path ? styles.itemSelected : styles.item}>
            <Badge count={tab.notificationsCount} size="small" theme="selected">
              <tab.icon className={styles.icon} />
            </Badge>
            <Typography.Text secondary disabled className={styles.text}>
              {tab.name}
            </Typography.Text>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default TabBar
