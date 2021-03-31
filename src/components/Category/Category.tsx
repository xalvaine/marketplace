import { Image, Input, Typography } from '@/components/common'
import { BxSearch } from '@/icons'
import Link from 'next/link'
import { mockSrc, PATH } from '@/config'
import styles from './category.module.scss'

const Category = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Input
          className={styles.search}
          leftIcon={BxSearch}
          size="large"
          placeholder="Поиск по товарам"
        />
        <Typography.Title level={3} className={styles.title}>
          Продукты питания
        </Typography.Title>
        <Typography.Text block disabled className={styles.count}>
          10 456 товаров
        </Typography.Text>

        <div className={styles.images}>
          <Link
            href={{
              pathname: PATH.GROUP,
              query: { category: `food`, group: `sweets` },
            }}
          >
            <Image src={mockSrc} label="Чай, кофе и какао" />
          </Link>
          <Image src={mockSrc} label="Чай, кофе и какао" />
          <Image src={mockSrc} label="Чай, кофе и какао" />
          <Image src={mockSrc} label="Чай, кофе и какао" />
          <Image src={mockSrc} label="Чай, кофе и какао" />
          <Image src={mockSrc} label="Чай, кофе и какао" />
          <Image src={mockSrc} label="Чай, кофе и какао" />
          <Image src={mockSrc} label="Чай, кофе и какао" />
          <Image src={mockSrc} label="Чай, кофе и какао" />
        </div>
      </div>
    </>
  )
}

export default Category
