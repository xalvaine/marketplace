import { Products } from '@/interfaces'
import { Button, Link, Slider, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import classNames from 'classnames'
import { useCartPost } from '@/hooks/showcase/useCart'
import React from 'react'
import styles from './product-card.module.scss'

interface Props {
  product: Products[0]
  className?: string
}

const ProductCard = (props: Props) => {
  const { product, className } = props
  const { mutateAsync: mutateCart } = useCartPost()

  const handleAddToCart = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    await mutateCart({
      product_id: product.variants[0]?.id,
      quantity: 1,
      name: product.name,
      price: null,
    })
  }

  return (
    <Link
      className={classNames(styles.product, className)}
      href={{
        pathname: PATH.PRODUCT,
        query: {
          product: product.id,
          category: 4,
          group: 6,
        },
      }}
      prefetch={false}
    >
      <div className={styles.imageWrapper}>
        <Slider className={styles.slider}>
          <Slider.Slide
            className={styles.slide}
            image={product.images[0]?.url || mockSrc}
          />
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
      <Button className={styles.button} onClick={handleAddToCart}>
        В корзину
      </Button>
    </Link>
  )
}

export default ProductCard
