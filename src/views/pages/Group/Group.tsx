import { Link, Button, List, Typography } from '@/components'
import { BxArrowBack } from '@/icons'
import { PATH } from '@/config'
import { useProducts } from '@/hooks'
import Products from '@/views/common/Products'
import styles from './group.module.scss'

const Group = () => {
  const { data: products } = useProducts()

  return (
    <div className={styles.wrapper}>
      <Link
        href={{
          pathname: PATH.CATEGORY,
          query: { category: `food` },
        }}
      >
        <Button icon={BxArrowBack} type="link">
          Продукты питания
        </Button>
      </Link>
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
      <Products products={products} />
    </div>
  )
}

export default Group
