import { Button, Link, Breadcrumbs } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { useMediaQuery } from '@/utils'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './bread.module.scss'

interface Query {
  category?: string
  group?: string
}

const getURLObject = (query: Query) => {
  const { category, group } = query
  if (category && group) {
    return { pathname: PATH.GROUP, query: { category, group } }
  }
  if (category) {
    return { pathname: PATH.CATEGORY, query: { category } }
  }
  return { pathname: PATH.CATALOG }
}

interface Props {
  className?: string
}

const Bread = (props: Props) => {
  const { className } = props
  const { query } = useRouter()
  const { matches } = useMediaQuery(`(min-width: 1024px)`)

  return (
    <div className={classNames(styles.back, className)}>
      {matches ? (
        <Breadcrumbs>
          <Breadcrumbs.Item
            href={{
              pathname: PATH.CATEGORY,
              query: {
                category: query.category,
              },
            }}
            text="Продукты питания"
          />
          <Breadcrumbs.Item
            href={{
              pathname: PATH.GROUP,
              query: {
                category: query.category,
                group: query.group,
              },
            }}
            text="Сладости"
          />
        </Breadcrumbs>
      ) : (
        <Link href={getURLObject(query) as URL}>
          <Button icon={BxArrowBack} type="link">
            Назад в каталог
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Bread
