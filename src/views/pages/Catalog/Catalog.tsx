import { Link, Image } from '@/components'
import { PATH, mockSrc } from '@/config'
import { CatalogItem } from '@/interfaces'
import styles from './catalog.module.scss'

interface Props {
  catalog: CatalogItem[]
}

const Catalog = (props: Props) => {
  const { catalog } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        {catalog?.map((item) => (
          <Link
            key={item.id}
            href={{ pathname: PATH.CATEGORY, query: { category: item.slug } }}
          >
            <Image label={item.name} src={mockSrc} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Catalog
