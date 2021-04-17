import { useEffect, useRef, useState } from 'react'
import { Button, Typography } from '@/components'
import Layout from '@/views/common/Layout'
import { BxHeart } from '@/icons'
import styles from './add-to-cart.module.scss'

const AddToCart = () => {
  const [visible, setVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleScroll = () => {
    if (buttonRef.current) {
      setVisible(
        buttonRef.current.getBoundingClientRect().top +
          buttonRef.current.offsetHeight <
          0,
      )
    }
  }

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <Button ref={buttonRef} size="large" type="primary">
          Добавить в корзину
        </Button>
        <BxHeart className={styles.heart} />
      </div>
      <Layout.TabBarExpansion visible={visible}>
        <div className={styles.fixedWrapper}>
          <Button size="large" type="primary">
            Добавить в корзину
          </Button>
          <Typography.Text className={styles.price} weight="bold">
            347 ₽
          </Typography.Text>
        </div>
      </Layout.TabBarExpansion>
    </>
  )
}

export default AddToCart
