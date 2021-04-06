import { Image, Input, Typography, Link } from '@/components'
import { BxSearch } from '@/icons'

import { PATH, mockSrc } from '@/config'
import styles from './category.module.scss'

const Category = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Input
          className={styles.search}
          leftIcon={BxSearch}
          placeholder="Поиск по товарам"
          size="large"
        />
        <Typography.Title className={styles.title} level={3}>
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
            <Image label="Чай, кофе и какао" src={mockSrc} />
          </Link>
          <Image label="Чай, кофе и какао" src={mockSrc} />
          <Image label="Чай, кофе и какао" src={mockSrc} />
          <Image label="Чай, кофе и какао" src={mockSrc} />
          <Image label="Чай, кофе и какао" src={mockSrc} />
          <Image label="Чай, кофе и какао" src={mockSrc} />
          <Image label="Чай, кофе и какао" src={mockSrc} />
          <Image label="Чай, кофе и какао" src={mockSrc} />
          <Image label="Чай, кофе и какао" src={mockSrc} />
        </div>
      </div>
    </>
  )
}

export default Category
