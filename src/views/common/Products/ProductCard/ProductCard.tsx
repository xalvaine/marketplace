import { Products } from '@/interfaces'
import { Button, Link, Slider, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import classNames from 'classnames'
import { usePostCart } from '@/hooks/showcase/useCart'
import React from 'react'
import { useRouter } from 'next/router'
import styles from './product-card.module.scss'

interface Props {
  product: Products[0]
  className?: string
}

const ProductCard = (props: Props) => {
  const { query } = useRouter()
  const { product, className } = props
  const { mutateAsync: mutateCart } = usePostCart()

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
          category: query.category,
          group: query.group,
          subcategory: query.subcategory,
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
        <Typography.Text
          className={
            product.variants[0].prices?.[1] ? styles.newPrice : styles.price
          }
          weight="bold"
        >
          {product.variants[0].prices?.[0] &&
            `${parseFloat(product.variants[0].prices[0].value)} ₽`}
        </Typography.Text>
        <Typography.Text strikethrough className={styles.oldPrice}>
          {product.variants[0].prices?.[1] &&
            `${parseFloat(product.variants[0].prices[1].value)} ₽`}
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
