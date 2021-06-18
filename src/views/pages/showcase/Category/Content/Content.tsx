import { Link, Typography } from '@/components'
import { declareNumber } from '@/utils'
import { mockSrc, PATH } from '@/config'
import Image from '@/views/pages/showcase/Category/Image'
import { Catalog } from '@/interfaces'
import styles from './content.module.scss'

interface Props {
  catalog: Catalog<Catalog>
}

const Content = (props: Props) => {
  const { catalog } = props

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.title} level={4}>
        {catalog.name}
      </Typography.Title>
      <Typography.Text disabled className={styles.count}>
        {catalog.catalogs.length}{' '}
        {declareNumber(catalog.catalogs.length, [`товар`, `товара`, `товаров`])}
      </Typography.Text>

      <div className={styles.images}>
        {catalog.catalogs.map((subCatalog) => (
          <Link
            key={subCatalog.id}
            href={{
              pathname: PATH.GROUP,
              query: { category: catalog.id, group: subCatalog.id },
            }}
          >
            <Image
              label={subCatalog.name}
              src={subCatalog.default_image || mockSrc}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Content
