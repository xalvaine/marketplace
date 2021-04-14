import { Typography } from '@/components'
import { Product } from '@/interfaces'
import classNames from 'classnames'
import styles from './description.module.scss'

interface Props {
  product: Product
  className?: string
}

const Description = (props: Props) => {
  const { product, className } = props
  console.log(product)

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.description}>
        <Typography.Title className={styles.descriptionTitle} level={5}>
          Описание
        </Typography.Title>
        <Typography.Text className={styles.descriptionText}>
          {product.description || `Описание отсутствует`}
        </Typography.Text>
      </div>
    </div>
  )
}

export default Description
