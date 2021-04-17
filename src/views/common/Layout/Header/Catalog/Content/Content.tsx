import { Link, Typography } from '@/components'
import { Catalog } from '@/interfaces'
import { PATH } from '@/config'
import styles from './content.module.scss'
import Brands from './Brands'

interface Props {
  catalog?: Catalog<Catalog>
  onSelect: () => void
}

const Content = (props: Props) => {
  const { catalog, onSelect } = props

  return (
    <div className={styles.wrapper}>
      <Link
        href={{ pathname: PATH.CATEGORY, query: { category: catalog?.id } }}
        onClick={onSelect}
      >
        <Typography.Title className={styles.title} level={5}>
          {catalog?.name}
        </Typography.Title>
      </Link>
      <ul className={styles.list}>
        {catalog?.catalogs.map((subCatalog) => (
          <li key={subCatalog.id} className={styles.item}>
            <Link
              href={{
                pathname: PATH.GROUP,
                query: { category: catalog?.id, group: subCatalog.id },
              }}
              onClick={onSelect}
            >
              <Typography.Title className={styles.subtitle} level={6}>
                {subCatalog.name}
              </Typography.Title>
            </Link>
            <Typography.Text>Не подкатегория</Typography.Text>
          </li>
        ))}
      </ul>
      <Brands />
    </div>
  )
}

export default Content
