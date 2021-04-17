import { Link } from '@/components'
import { PATH, mockSrc } from '@/config'
import { Catalog as CatalogType } from '@/interfaces'
import Image from './Image'
import styles from './catalog.module.scss'

interface Props {
  catalogs: CatalogType[]
}

const Catalog = (props: Props) => {
  const { catalogs } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        {catalogs?.map((item) => (
          <Link
            key={item.id}
            href={{ pathname: PATH.CATEGORY, query: { category: item.id } }}
          >
            <Image label={item.name} src={item.default_image || mockSrc} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Catalog
