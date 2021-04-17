import { Typography, Link } from '@/components'
import { PATH, mockSrc } from '@/config'
import { Catalog } from '@/interfaces'
import { declareNumber } from '@/utils'
import Image from './Image'
import styles from './category.module.scss'

interface Props {
  catalog: Catalog<Catalog>
}

const Category = (props: Props) => {
  const { catalog } = props

  return (
    <>
      <div className={styles.wrapper}>
        <Typography.Title className={styles.title} level={4}>
          {catalog.name}
        </Typography.Title>
        <Typography.Text disabled className={styles.count}>
          {catalog.catalogs.length}{' '}
          {declareNumber(catalog.catalogs.length, [
            `товар`,
            `товара`,
            `товаров`,
          ])}
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
    </>
  )
}

export default Category
