import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './tab-bar.module.scss'
import { BxHeart, BxHomeAlt, BxMenu, BxShoppingBag } from '@/icons'
import { Typography, Badge } from '@/components/common'

const tabs = [
  {
    icon: BxHomeAlt,
    key: ``,
    name: `Главная`,
    notificationsCount: 0,
  },
  {
    icon: BxMenu,
    key: `catalog`,
    name: `Каталог`,
    notificationsCount: 0,
  },
  {
    icon: BxHeart,
    key: `favorites`,
    name: `Избранное`,
    notificationsCount: 9,
  },
  {
    icon: BxShoppingBag,
    key: `cart`,
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
        <Link key={tab.key} href={`/${tab.key}`}>
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
