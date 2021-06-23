import { Typography } from '@/components'
import { Product } from '@/interfaces'
import classNames from 'classnames'
import React from 'react'
import styles from './params.module.scss'
import Variations from './Variations'
import AddToCart from './AddToCart'

interface Props {
  product: Product
  className?: string
}

const Params = (props: Props) => {
  const { product, className } = props
  console.log(product)
  return (
    <div className={styles.wrapper}>
      <Typography.Title
        className={classNames(styles.title, className)}
        level={6}
        weight="semibold"
      >
        {product.name}
      </Typography.Title>
      <Variations variants={product.variants} />
      <div className={styles.price}>
        <Typography.Text
          className={
            product.variants[0].prices?.[1]
              ? styles.newPrice
              : styles.defaultPrice
          }
          weight="bold"
        >
          {product.variants[0].prices?.[0] &&
            `${parseFloat(product.variants[0].prices[0].value)} ₽`}
        </Typography.Text>
        <Typography.Text
          strikethrough
          className={styles.oldPrice}
          weight="semibold"
        >
          {product.variants[0].prices?.[1] &&
            `${parseFloat(product.variants[0].prices[1]?.value)} ₽`}
        </Typography.Text>
      </div>
      <AddToCart product={product} />
    </div>
  )
}

export default Params
