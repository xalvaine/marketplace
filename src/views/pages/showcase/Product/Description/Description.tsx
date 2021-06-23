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

  return (
    <div className={classNames(styles.wrapper, className)}>
      {product.attributes?.map((attribute) => (
        <div key={attribute.code} className={styles.block}>
          <Typography.Title className={styles.descriptionTitle} level={5}>
            {attribute.title}
          </Typography.Title>
          <Typography.Text className={styles.descriptionText}>
            {attribute.value}
          </Typography.Text>
        </div>
      ))}
    </div>
  )
}

export default Description
