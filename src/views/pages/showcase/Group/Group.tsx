import { Link, Button, List, Typography, Breadcrumbs } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { useProducts } from '@/hooks'
import { declareNumber, useMediaQuery } from '@/utils'
import Products from '@/views/common/Products'
import { useRouter } from 'next/router'
import { Category } from '@/interfaces'
import styles from './group.module.scss'

interface Props {
  group: Category<Category>
}

const Group = (props: Props) => {
  const { group } = props
  const router = useRouter()
  const { data: products } = useProducts({
    category_id: router.query.group as string,
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
          <Breadcrumbs.Item text={group.name} />
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
        {group.name}
      </Typography.Title>
      <Typography.Text disabled className={styles.count}>
        {products?.total}
        {` `}
        {products &&
          declareNumber(products?.total, [`товар`, `товара`, `товаров`])}
      </Typography.Text>
      <List className={styles.tabs} type={matches ? `tile` : `text`}>
        {group.categories.map((subCategory) => (
          <List.Item
            key={subCategory.id}
            href={{
              pathname: PATH.SUBCATEGORY,
              query: {
                category: router.query.category,
                group: router.query.group,
                subcategory: subCategory.id,
              },
            }}
          >
            {subCategory.name}
          </List.Item>
        ))}
      </List>
      <div className={styles.productsWrapper}>
        <div className={styles.filters}>Фильтры</div>
        <Products products={products?.items} />
      </div>
    </div>
  )
}

export default Group
