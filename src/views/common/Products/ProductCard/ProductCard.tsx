import { Products } from '@/interfaces'
import styles from './product-card.module.scss'
import { Button, Slider, Typography } from '@/components'
import { mockSrc } from '@/config'

interface Props {
  product: Products[0]
}

const ProductCard = (props: Props) => {
  const { product } = props

  return (
    <>
      <div className={styles.product}>
        <div className={styles.imageWrapper}>
          <Slider className={styles.slider}>
            <Slider.Slide image={product.images[0]?.url || mockSrc} />
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
