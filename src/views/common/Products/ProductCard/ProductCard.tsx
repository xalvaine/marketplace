import { Products } from '@/interfaces'
import { Button, Link, Slider, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import classNames from 'classnames'
import styles from './product-card.module.scss'

interface Props {
  product: Products[0]
  className?: string
}

const ProductCard = (props: Props) => {
  const { product, className } = props

  return (
    <Link
      className={classNames(styles.product, className)}
      href={{
        pathname: PATH.PRODUCT,
        query: {
          product: product.id,
          category: `food`,
          group: `sweets`,
        },
      }}
    >
      <div className={styles.imageWrapper}>
        <Slider className={styles.slider}>
          <Slider.Slide image={product.images[0]?.url || mockSrc} />
        </Slider>
      </div>
      <div className={styles.prices}>
        <Typography.Text className={styles.newPrice} weight="bold">
          575 ₽
        </Typography.Text>
        <Typography.Text strikethrough className={styles.oldPrice}>
          790 ₽
        </Typography.Text>
      </div>
      <Typography.Text className={styles.name}>{product.name}</Typography.Text>
      <Button className={styles.button} type="primary">
        В корзину
      </Button>
    </Link>
  )
}

export default ProductCard
