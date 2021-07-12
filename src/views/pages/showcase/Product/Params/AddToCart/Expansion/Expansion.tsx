import { Button, Typography } from '@/components'
import { Product } from '@/interfaces'
import { mockSrc } from '@/config'
import React from 'react'
import styles from './expansion.module.scss'

interface Props {
  handleAddToCart: () => void
  product: Product
  variantId: number
}

const Expansion = (props: Props) => {
  const { handleAddToCart, product, variantId } = props

  const currentVariant = product.variants.find(
    (variant) => variant.id === variantId,
  )

  return (
    <div className={styles.wrapper}>
      <img
        alt=""
        className={styles.image}
        src={product.images[0]?.url || mockSrc}
      />
      <Typography.Title className={styles.title} level={6}>
        {product.name}
      </Typography.Title>
      <div className={styles.priceDesktop}>
        <Typography.Text
          strikethrough
          className={styles.oldPrice}
          weight="semibold"
        >
          {currentVariant?.prices?.[1] &&
            `${parseFloat(currentVariant.prices[1].value)} ₽`}
        </Typography.Text>
        <Typography.Text
          className={
            currentVariant?.prices?.[1] ? styles.newPrice : styles.defaultPrice
          }
          weight="bold"
        >
          {currentVariant?.prices?.[0] &&
            `${parseFloat(currentVariant.prices[0].value)} ₽`}
        </Typography.Text>
      </div>
      <Button size="large" onClick={handleAddToCart}>
        Добавить в корзину
      </Button>
      <Typography.Text className={styles.priceMobile} weight="bold">
        {currentVariant?.prices?.[0] &&
          `${parseFloat(currentVariant.prices[0].value)} ₽`}
      </Typography.Text>
    </div>
  )
}

export default Expansion
