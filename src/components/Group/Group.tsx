import Link from 'next/link'
import { Button, Tabs, Tag, Typography } from '@/components/common'
import { BxArrowBack } from '@/icons'
import styles from './group.module.scss'
import { PATH } from '@/config'

const Group = () => {
  return (
    <div>
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
      <Tabs>
        <Tabs.Tab>asdjkna</Tabs.Tab>
      </Tabs>
      <Tag>askdjn</Tag>
    </div>
  )
}

export default Group
