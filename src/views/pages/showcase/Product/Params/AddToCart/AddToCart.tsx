import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '@/components'
import Layout from '@/views/common/Layout'
import { BxHeart } from '@/icons'
import { usePostCart } from '@/hooks/showcase/useCart'
import { Product } from '@/interfaces'
import { useMediaQuery } from '@/utils'
import { layout } from '@/reducers'
import { useDispatch } from 'react-redux'
import styles from './add-to-cart.module.scss'
import Expansion from './Expansion'

interface Props {
  product: Product
  variantId: number
}

const AddToCart = (props: Props) => {
  const { product, variantId } = props
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { mutateAsync: mutateCart } = usePostCart()
  const { matches } = useMediaQuery(`(min-width: 1024px)`)

  const handleScroll = useCallback(() => {
    if (buttonRef.current) {
      const expand =
        buttonRef.current.getBoundingClientRect().top +
          buttonRef.current.offsetHeight <
        0
      setVisible(expand)
      dispatch(layout.setExpandDesktopHeader(expand))
    }
  }, [dispatch])

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [handleScroll])

  useEffect(
    () => () => void dispatch(layout.setExpandDesktopHeader(false)),
    [dispatch],
  )

  const handleAddToCart = async () => {
    await mutateCart({
      product_id: variantId,
      quantity: 1,
      name: product.name,
      price: null,
    })
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Button ref={buttonRef} size="large" onClick={handleAddToCart}>
          Добавить в корзину
        </Button>
        <BxHeart className={styles.heart} />
      </div>
      {matches ? (
        <Layout.HeaderExpansion>
          <Expansion
            handleAddToCart={handleAddToCart}
            product={product}
            variantId={variantId}
          />
        </Layout.HeaderExpansion>
      ) : (
        <Layout.TabBarExpansion visible={visible}>
          <Expansion
            handleAddToCart={handleAddToCart}
            product={product}
            variantId={variantId}
          />
        </Layout.TabBarExpansion>
      )}
    </>
  )
}

export default AddToCart
