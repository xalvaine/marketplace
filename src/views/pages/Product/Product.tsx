import { useRouter } from 'next/router'
import { Button, Link, Slider, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import { BxArrowBack } from '@/icons'
import styles from './product.module.scss'
import { Product as ProductType } from '@/interfaces'

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
    <>
      <Link href={getURLObject(query) as URL}>
        <div className={styles.back}>
          <Button type="link" icon={BxArrowBack}>
            Назад в каталог
          </Button>
        </div>
        <div className={styles.sliderWrapper}>
          <Slider className={styles.slider}>
            <Slider.Slide className={styles.slide} image={mockSrc} />
          </Slider>
        </div>
        <Typography.Title level={5}>{product.name}</Typography.Title>
      </Link>
    </>
  )
}

export default Product
