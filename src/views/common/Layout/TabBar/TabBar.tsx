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
    key: PATH.HOME,
    name: `Главная`,
    notificationsCount: 0,
  },
  {
    icon: BxMenu,
    key: PATH.CATALOG,
    name: `Каталог`,
    notificationsCount: 0,
  },
  {
    icon: BxHeart,
    key: PATH.FAVOURITES,
    name: `Избранное`,
    notificationsCount: 9,
  },
  {
    icon: BxShoppingBag,
    key: PATH.CART,
    name: `Корзина`,
    notificationsCount: 99,
  },
]

const TabBar = () => {
  const { pathname } = useRouter()
  const [page, setPage] = useState<string>()

  useEffect(
    () => tabs.forEach((tab) => pathname.includes(tab.key) && setPage(tab.key)),
    [pathname],
  )

  return (
    <ul className={styles.wrapper}>
      {tabs.map((tab) => (
        <Link key={tab.key} href={tab.key}>
          <li className={page === tab.key ? styles.itemSelected : styles.item}>
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
