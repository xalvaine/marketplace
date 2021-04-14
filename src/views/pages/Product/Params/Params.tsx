import { Typography } from '@/components'
import { Product } from '@/interfaces'
import classNames from 'classnames'
import styles from './params.module.scss'

interface Props {
  product: Product
  className?: string
}

const Params = (props: Props) => {
  const { product, className } = props

  return (
    <>
      <Typography.Title
        className={classNames(styles.name, className)}
        level={6}
        weight="semibold"
      >
        {product.name}
      </Typography.Title>
    </>
  )
}

export default Params
