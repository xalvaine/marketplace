import Link from 'next/link'
import { Image, Input } from '@/components'
import { BxSearch } from '@/icons'
import { mockSrc, PATH } from '@/config'

import styles from './catalog.module.scss'

const Catalog = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.search}
        leftIcon={BxSearch}
        size="large"
        placeholder="Поиск по товарам"
      />
      <div className={styles.images}>
        <Link href={{ pathname: PATH.CATEGORY, query: { category: `food` } }}>
          <Image src={mockSrc} label="Продукты питания" />
        </Link>
        <Image src={mockSrc} label="Продукты питания" />
        <Image src={mockSrc} label="Продукты питания" />
        <Image src={mockSrc} label="Продукты питания" />
        <Image src={mockSrc} label="Продукты питания" />
        <Image src={mockSrc} label="Продукты питания" />
        <Image src={mockSrc} label="Продукты питания" />
        <Image src={mockSrc} label="Продукты питания" />
        <Image src={mockSrc} label="Продукты питания" />
      </div>
    </div>
  )
}

export default Catalog
