import { Catalog } from '@/interfaces'
import Content from './Content'
import Lists from './Lists'
import styles from './category.module.scss'

interface Props {
  catalog: Catalog<Catalog>
}

const Category = (props: Props) => {
  const { catalog } = props

  return (
    <div className={styles.wrapper}>
      <Lists catalog={catalog} />
      <Content catalog={catalog} />
    </div>
  )
}

export default Category
