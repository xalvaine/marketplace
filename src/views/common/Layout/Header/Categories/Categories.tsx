import { Link, List } from '@/components'
import { useCategories } from '@/hooks'
import { PATH } from '@/config'
import styles from './categories.module.scss'

const Categories = () => {
  const { data: categories } = useCategories()

  return (
    <section className={styles.wrapper}>
      <List className={styles.list}>
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={{ pathname: PATH.CATEGORY, query: { category: category.id } }}
          >
            <List.Item>{category.name}</List.Item>
          </Link>
        ))}
      </List>
    </section>
  )
}

export default Categories
