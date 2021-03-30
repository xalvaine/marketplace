import { Image, Input } from '@/components/common'
import { BxSearch } from '@/icons'
import { mockSrc } from '@/config'

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
        <Image src={mockSrc} label="Продукты питания" />
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
