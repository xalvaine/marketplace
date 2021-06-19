import { Link } from '@/components'
import { PATH, mockSrc } from '@/config'
import { Category } from '@/interfaces'
import Image from './Image'
import styles from './catalog.module.scss'

interface Props {
  categories: Category<Category<Category>>[]
}

const Catalog = (props: Props) => {
  const { categories } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={{ pathname: PATH.CATEGORY, query: { category: category.id } }}
          >
            <Image label={category.name} src={mockSrc} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Catalog
