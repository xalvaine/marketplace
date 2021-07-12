import { List } from '@/components'
import { useCategories } from '@/hooks'
import { PATH } from '@/config'
import styles from './categories.module.scss'

const Categories = () => {
  const { data: categories } = useCategories()

  return (
    <section className={styles.wrapper}>
      <List className={styles.list}>
        {categories?.map((category) => (
          <List.Item
            key={category.id}
            className={styles.item}
            href={{ pathname: PATH.CATEGORY, query: { category: category.id } }}
          >
            {category.name}
          </List.Item>
        ))}
      </List>
    </section>
  )
}

export default Categories
