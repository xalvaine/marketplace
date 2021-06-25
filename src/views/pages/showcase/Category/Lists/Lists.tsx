import { Category as CategoryType } from '@/interfaces'
import { Link, Typography } from '@/components'
import { PATH } from '@/config'
import styles from './lists.module.scss'

interface Props {
  category: CategoryType<CategoryType>
}

const Lists = (props: Props) => {
  const { category } = props
  return (
    <ul className={styles.wrapper}>
      {category.categories.map((subCategory) => (
        <li key={subCategory.id} className={styles.item}>
          <Link
            href={{
              pathname: PATH.GROUP,
              query: { category: category.id, group: subCategory.id },
            }}
          >
            <Typography.Title className={styles.title} level={6}>
              {subCategory.name}
            </Typography.Title>
          </Link>
          {/*{subCatalog.catalogs.map((subSubCatalog) => (*/}
          {/*  <Typography.Text>{subSubCatalog.name}</Typography.Text>*/}
          {/*))}*/}
        </li>
      ))}
    </ul>
  )
}

export default Lists
