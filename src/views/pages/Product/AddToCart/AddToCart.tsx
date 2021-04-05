import { Button, Typography } from '@/components'
import styles from './add-to-cart.module.scss'
import Layout from '@/views/common/Layout'
import { useEffect, useState } from 'react'

const AddToCart = () => {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    setVisible(!!document.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [])

  return (
    <Layout.TabBarExpansion visible={visible}>
      <div className={styles.wrapper}>
        <Button type="primary" size="large">
          Добавить в корзину
        </Button>
        <Typography.Text className={styles.price} weight="bold">
          347 ₽
        </Typography.Text>
      </div>
    </Layout.TabBarExpansion>
  )
}

export default AddToCart
