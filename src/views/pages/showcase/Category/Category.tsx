import { Category as CategoryType } from '@/interfaces'
import Content from './Content'
import Lists from './Lists'
import styles from './category.module.scss'

interface Props {
  category: CategoryType<CategoryType>
}

const Category = (props: Props) => {
  const { category } = props

  return (
    <div className={styles.wrapper}>
      <Lists category={category} />
      <Content category={category} />
    </div>
  )
}

export default Category
