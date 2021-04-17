import { Typography, Tag } from '@/components'
import styles from './variations.module.scss'

const Variations = () => {
  return (
    <div className={styles.wrapper}>
      <Typography.Text className={styles.text}>Вес товара:</Typography.Text>
      <Tag.Group>
        <Tag checked>325</Tag>
        <Tag>650</Tag>
        <Tag disabled>1000</Tag>
      </Tag.Group>
    </div>
  )
}

export default Variations
