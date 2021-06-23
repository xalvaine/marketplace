import { Typography, Tag } from '@/components'
import { Variant } from '@/interfaces'
import styles from './variations.module.scss'

interface Props {
  variants: Variant[]
}

const Variations = (props: Props) => {
  const { variants } = props
  return (
    <div className={styles.wrapper}>
      <Typography.Text className={styles.text}>Вес товара:</Typography.Text>
      <Tag.Group>
        {variants.map((variant, index) => (
          <Tag key={variant.id} checked={!index}>
            {variant.weight}
          </Tag>
        ))}
      </Tag.Group>
    </div>
  )
}

export default Variations
