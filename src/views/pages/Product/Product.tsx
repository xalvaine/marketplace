import { useRouter } from 'next/router'
import { Button, Link, Slider, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import { BxArrowBack } from '@/icons'
import { Product as ProductType } from '@/interfaces'
import AddToCart from './AddToCart'
import styles from './product.module.scss'

interface Query {
  category?: string
  group?: string
}

const getURLObject = (query: Query) => {
  const { category, group } = query
  if (category && group) {
    return { pathname: PATH.GROUP, query: { category, group } }
  }
  if (category) {
    return { pathname: PATH.CATEGORY, query: { category } }
  }
  return { pathname: PATH.CATALOG }
}

interface Props {
  product: ProductType
}

const Product = (props: Props) => {
  const { product } = props
  const { query } = useRouter()

  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Link href={getURLObject(query) as URL}>
          <Button icon={BxArrowBack} type="link">
            Назад в каталог
          </Button>
        </Link>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider className={styles.slider}>
          <Slider.Slide className={styles.slide} image={mockSrc} />
        </Slider>
      </div>
      <Typography.Title className={styles.name} level={5} weight="semibold">
        {product.name}
      </Typography.Title>
      <Typography.Title className={styles.descriptionTitle} level={4}>
        Описание
      </Typography.Title>
      <Typography.Text block className={styles.descriptionText}>
        {product.description}
      </Typography.Text>
      <AddToCart />
    </div>
  )
}

export default Product
