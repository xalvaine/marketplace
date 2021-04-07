import { Image, Typography, Link } from '@/components'
import { PATH, mockSrc } from '@/config'
import styles from './category.module.scss'

const Category = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Typography.Title className={styles.title} level={3}>
          Продукты питания
        </Typography.Title>
        <Typography.Text disabled className={styles.count}>
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
