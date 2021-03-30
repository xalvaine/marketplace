import { Product } from '@/interfaces'
import styles from './product-card.module.scss'
import { Button, Slider, Typography } from '@/components/common'

const src = `https://camo.githubusercontent.com/09e55b5e6a65a3ba9e38ed4de0f96ddd8ad46ba5c57b3e94d05222e0f127402a/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67`

interface Props {
  product: Product
}

const ProductCard = (props: Props) => {
  const { product } = props

  return (
    <>
      <div className={styles.product}>
        <div className={styles.imageWrapper}>
          <Slider className={styles.slider}>
            <Slider.Slide image={product.images[0]?.url || src} />
          </Slider>
        </div>
        <div className={styles.prices}>
          <Typography.Text weight="bold" className={styles.newPrice}>
            575 ₽
          </Typography.Text>
          <Typography.Text strikethrough className={styles.oldPrice}>
            790 ₽
          </Typography.Text>
        </div>
        <Typography.Text block className={styles.name}>
          {product.name}
        </Typography.Text>
        <Button type="primary" className={styles.button}>
          В корзину
        </Button>
      </div>
    </>
  )
}

export default ProductCard
