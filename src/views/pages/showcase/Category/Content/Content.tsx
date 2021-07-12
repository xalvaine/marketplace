import { Link, Typography } from '@/components'
import { declareNumber } from '@/utils'
import { mockSrc, PATH } from '@/config'
import Image from '@/views/pages/showcase/Category/Image'
import { Category as CategoryType } from '@/interfaces'
import styles from './content.module.scss'

interface Props {
  category: CategoryType<CategoryType>
}

const Content = (props: Props) => {
  const { category } = props

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={4}>
        {category.name}
      </Typography.Title>
      <Typography.Text disabled className={styles.count}>
        {category.categories.length}
        {` `}
        {declareNumber(category.categories.length, [
          `товар`,
          `товара`,
          `товаров`,
        ])}
      </Typography.Text>

      <div className={styles.images}>
        {category.categories.map((subCategory) => (
          <Link
            key={subCategory.id}
            href={{
              pathname: PATH.GROUP,
              query: { category: category.id, group: subCategory.id },
            }}
          >
            <Image label={subCategory.name} src={mockSrc} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Content
