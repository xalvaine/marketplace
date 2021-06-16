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
        {category?.categories.map((subCategory) => (
          <li key={subCategory.id} className={styles.item}>
            <Link
              href={{
                pathname: PATH.GROUP,
                query: { category: category?.id, group: subCategory.id },
              }}
              onClick={onSelect}
            >
              <Typography.Title className={styles.subtitle} level={6}>
                {subCategory.name}
              </Typography.Title>
            </Link>
            {subCategory.categories.map((group) => (
              <Link
                key={group.id}
                href={{
                  pathname: PATH.GROUP,
                  query: { category: category?.id, group: group.id },
                }}
                onClick={onSelect}
              >
                <Typography.Text>{group.name}</Typography.Text>
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
