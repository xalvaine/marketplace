import { Link } from '@/components'
import { Button, Input, Tabs, Typography } from '@/components'
import { BxArrowBack, BxSearch } from '@/icons'
import { PATH } from '@/config'
import { useProducts } from '@/hooks'
import styles from './group.module.scss'
import Items from '@/views/common/Products'

const Group = () => {
  const { data: products } = useProducts()

  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.search}
        leftIcon={BxSearch}
        size="large"
        placeholder="Поиск по товарам"
      />
      <Link
        href={{
          pathname: PATH.CATEGORY,
          query: { category: `food` },
        }}
      >
        <Button type="link" icon={BxArrowBack}>
          Продукты питания
        </Button>
      </Link>
      <Typography.Title level={3} className={styles.title}>
        Сладости
      </Typography.Title>
      <Typography.Text block disabled className={styles.count}>
        1 024 товара
      </Typography.Text>
      <Tabs className={styles.tabs}>
        <Tabs.Tab>Aasdasd</Tabs.Tab>
        <Tabs.Tab>Aasdasd</Tabs.Tab>
        <Tabs.Tab>Aasdasd</Tabs.Tab>
        <Tabs.Tab>Aasdasd</Tabs.Tab>
        <Tabs.Tab>Aasdasd</Tabs.Tab>
        <Tabs.Tab>Aasdasd</Tabs.Tab>
      </Tabs>
      <Items products={products} />
    </div>
  )
}

export default Group
