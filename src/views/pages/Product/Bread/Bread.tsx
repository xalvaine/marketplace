import { Button, Link, Breadcrumbs } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { Product } from '@/interfaces'
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
  product: Product
}

const Bread = (props: Props) => {
  const { className, product } = props
  const { query } = useRouter()
  const isDesktop = useMediaQuery(`(min-width: 1024px)`)

  return (
    <div className={classNames(styles.back, className)}>
      {isDesktop ? (
        <Breadcrumbs>
          <Breadcrumbs.Item
            href={{
              pathname: PATH.CATEGORY,
              query: {
                category: `food`,
              },
            }}
            text="Продукты питания"
          />
          <Breadcrumbs.Item
            href={{
              pathname: PATH.GROUP,
              query: {
                category: `food`,
                group: `sweets`,
              },
            }}
            text="Сладости"
          />
          <Breadcrumbs.Item text={product.name} />
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