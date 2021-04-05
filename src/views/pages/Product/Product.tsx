import { useRouter } from 'next/router'
import { Button, Link, Slider, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import { BxArrowBack } from '@/icons'
import styles from './product.module.scss'
import { Product as ProductType } from '@/interfaces'
import AddToCart from './AddToCart'

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
          <Button type="link" icon={BxArrowBack}>
            Назад в каталог
          </Button>
        </Link>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider className={styles.slider}>
          <Slider.Slide className={styles.slide} image={mockSrc} />
        </Slider>
      </div>
      <Typography.Title level={5} weight="semibold" className={styles.name}>
        {product.name}
      </Typography.Title>
      <Typography.Title level={4} className={styles.descriptionTitle}>
        Описание
      </Typography.Title>
      <Typography.Text className={styles.descriptionText} block>
        {product.description}
      </Typography.Text>
      <AddToCart />
    </div>
  )
}

export default Product
