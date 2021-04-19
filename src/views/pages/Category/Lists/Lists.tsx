import { Catalog } from '@/interfaces'
import { Link, Typography } from '@/components'
import { PATH } from '@/config'
import styles from './lists.module.scss'

interface Props {
  catalog: Catalog<Catalog>
}

const Lists = (props: Props) => {
  const { catalog } = props
  return (
    <ul className={styles.wrapper}>
      {catalog.catalogs.map((subCatalog) => (
        <li key={subCatalog.id} className={styles.item}>
          <Link
            href={{
              pathname: PATH.GROUP,
              query: { category: catalog.id, group: subCatalog.id },
            }}
          >
            <Typography.Title className={styles.title} level={6}>
              {subCatalog.name}
            </Typography.Title>
          </Link>
          {/*{subCatalog.catalogs.map((subSubCatalog) => (*/}
          {/*  <Typography.Text>{subSubCatalog.name}</Typography.Text>*/}
          {/*))}*/}
        </li>
      ))}
    </ul>
  )
}

export default Lists
