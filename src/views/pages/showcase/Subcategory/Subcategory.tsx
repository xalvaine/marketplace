import { Link, Button, Typography, Breadcrumbs } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { useProducts } from '@/hooks'
import { declareNumber, useMediaQuery } from '@/utils'
import Products from '@/views/common/Products'
import { useRouter } from 'next/router'
import { Category } from '@/interfaces'
import Filters from '@/views/common/Filters'
import styles from './subcategory.module.scss'

interface Props {
  subcategory: Category<Category>
}

const Subcategory = (props: Props) => {
  const { subcategory } = props
  const router = useRouter()
  const { data: products } = useProducts({
    category_id: router.query.subcategory as string,
  })
  const { matches } = useMediaQuery(`(min-width: 1024px)`)

  return (
    <div className={styles.wrapper}>
      {matches ? (
        <Breadcrumbs className={styles.breadcrumbs}>
          <Breadcrumbs.Item
            href={{
              pathname: PATH.CATEGORY,
              query: {
                category: router.query.category,
              },
            }}
            text={`Категория с id ${router.query.category}`}
          />
          <Breadcrumbs.Item
            href={{
              pathname: PATH.GROUP,
              query: {
                category: router.query.category,
                group: router.query.group,
              },
            }}
            text={`Группа с id ${router.query.group}`}
          />
          <Breadcrumbs.Item text={subcategory.name} />
        </Breadcrumbs>
      ) : (
        <Link
          href={{
            pathname: PATH.CATEGORY,
            query: { category: router.query.category },
          }}
        >
          <Button icon={BxArrowBack} type="link">
            Продукты питания
          </Button>
        </Link>
      )}

      <Typography.Title className={styles.title} level={4}>
        {subcategory.name}
      </Typography.Title>
      <Typography.Text disabled className={styles.count}>
        {products?.total}
        {` `}
        {products &&
          declareNumber(products?.total, [`товар`, `товара`, `товаров`])}
      </Typography.Text>
      <div className={styles.productsWrapper}>
        <div className={styles.filters}>
          <Filters />
        </div>
        <Products products={products?.items} />
      </div>
    </div>
  )
}

export default Subcategory
