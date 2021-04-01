import { Link } from '@/components'
import { Image, Input } from '@/components'
import { BxSearch } from '@/icons'
import { mockSrc, PATH } from '@/config'
import styles from './catalog.module.scss'
import { CatalogItem } from '@/interfaces'

interface Props {
  catalog: CatalogItem[]
}

const Catalog = (props: Props) => {
  const { catalog } = props

  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.search}
        leftIcon={BxSearch}
        size="large"
        placeholder="Поиск по товарам"
      />
      <div className={styles.images}>
        {catalog?.map((item) => (
          <Link
            key={item.id}
            href={{ pathname: PATH.CATEGORY, query: { category: item.slug } }}
          >
            <Image src={mockSrc} label={item.name} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Catalog
