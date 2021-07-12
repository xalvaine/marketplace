import { Link, Typography } from '@/components'
import { Category } from '@/interfaces'
import { PATH } from '@/config'
import styles from './content.module.scss'
import Brands from './Brands'

interface Props {
  category?: Category<Category<Category>>
  onSelect: () => void
}

const Content = (props: Props) => {
  const { category, onSelect } = props

  return (
    <div className={styles.wrapper}>
      <Link
        href={{ pathname: PATH.CATEGORY, query: { category: category?.id } }}
        onClick={onSelect}
      >
        <Typography.Title className={styles.title} level={5}>
          {category?.name}
        </Typography.Title>
      </Link>
      <ul className={styles.list}>
        {category?.categories.map((group) => (
          <li key={group.id} className={styles.item}>
            <Link
              href={{
                pathname: PATH.GROUP,
                query: { category: category?.id, group: group.id },
              }}
              onClick={onSelect}
            >
              <Typography.Title className={styles.subtitle} level={6}>
                {group.name}
              </Typography.Title>
            </Link>
            {group.categories.map((subCategory) => (
              <Link
                key={subCategory.id}
                href={{
                  pathname: PATH.SUBCATEGORY,
                  query: {
                    category: category?.id,
                    group: group.id,
                    subcategory: subCategory.id,
                  },
                }}
                onClick={onSelect}
              >
                <Typography.Text>{subCategory.name}</Typography.Text>
              </Link>
            ))}
          </li>
        ))}
      </ul>
      <Brands />
    </div>
  )
}

export default Content
