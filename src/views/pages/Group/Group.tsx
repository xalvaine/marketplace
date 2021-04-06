import { Link, Button, Input, Tabs, Typography } from '@/components'

import { BxArrowBack, BxSearch } from '@/icons'
import { PATH } from '@/config'
import { useProducts } from '@/hooks'
import Products from '@/views/common/Products'
import styles from './group.module.scss'

const Group = () => {
  const { data: products } = useProducts()

  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.search}
        leftIcon={BxSearch}
        placeholder="Поиск по товарам"
        size="large"
      />
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
      <Typography.Title className={styles.title} level={3}>
        Сладости
      </Typography.Title>
      <Typography.Text block disabled className={styles.count}>
        1 024 товара
      </Typography.Text>
      <Tabs className={styles.tabs}>
        <Tabs.Tab>Подкаталог</Tabs.Tab>
        <Tabs.Tab>Подкаталог</Tabs.Tab>
        <Tabs.Tab>Подкаталог</Tabs.Tab>
        <Tabs.Tab>Подкаталог</Tabs.Tab>
        <Tabs.Tab>Подкаталог</Tabs.Tab>
        <Tabs.Tab>Подкаталог</Tabs.Tab>
      </Tabs>
      <Products products={products} />
    </div>
  )
}

export default Group
