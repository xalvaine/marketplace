import { Link, Button, List, Typography, Breadcrumbs } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { useProducts } from '@/hooks'
import { useMediaQuery } from '@/utils'
import Products from '@/views/common/Products'
import { useRouter } from 'next/router'
import styles from './group.module.scss'

const Group = () => {
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
            text="Продукты питания"
          />
          <Breadcrumbs.Item text="Сладости" />
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
        Сладости
      </Typography.Title>
      <Typography.Text disabled className={styles.count}>
        1 024 товара
      </Typography.Text>
      <List className={styles.tabs}>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
      </List>
      <div className={styles.productsWrapper}>
        <div className={styles.filters}>Фильтры</div>
        <Products products={products} />
      </div>
    </div>
  )
}

export default Group
