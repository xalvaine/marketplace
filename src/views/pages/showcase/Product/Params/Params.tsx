import { Typography } from '@/components'
import { Product } from '@/interfaces'
import classNames from 'classnames'
import React, { Dispatch } from 'react'
import styles from './params.module.scss'
import Variations from './Variations'
import AddToCart from './AddToCart'

interface Props {
  product: Product
  className?: string
  selectedVariant: number
  setSelectedVariant: Dispatch<number>
}

const Params = (props: Props) => {
  const { product, className, selectedVariant, setSelectedVariant } = props
  const currentVariant = product.variants.find(
    (variant) => variant.id === selectedVariant,
  )

  return (
    <div className={styles.wrapper}>
      <Typography.Title
        className={classNames(styles.title, className)}
        level={6}
        weight="semibold"
      >
        {product.name}
      </Typography.Title>
      <Variations
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
        variants={product.variants}
      />
      <div className={styles.price}>
        <Typography.Text
          className={
            currentVariant?.prices?.[1] ? styles.newPrice : styles.defaultPrice
          }
          weight="bold"
        >
          {currentVariant?.prices?.[0] &&
            `${parseFloat(currentVariant.prices[0].value)} ₽`}
        </Typography.Text>
        <Typography.Text
          strikethrough
          className={styles.oldPrice}
          weight="semibold"
        >
          {currentVariant?.prices?.[1] &&
            `${parseFloat(currentVariant.prices[1].value)} ₽`}
        </Typography.Text>
      </div>
      <AddToCart product={product} variantId={selectedVariant} />
    </div>
  )
}

export default Params
