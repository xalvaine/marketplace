import { useRouter } from 'next/router'
import { Button, Link, Slider, Typography } from '@/components'
import { mockSrc, PATH } from '@/config'
import { BxArrowBack } from '@/icons'
import styles from './product.module.scss'

interface Query {
  category?: string
  group?: string
}

const getURLObject = (query: Query) => {
  const { category, group } = query
  if (category && group) return { pathname: PATH.GROUP, query }
  if (category) return { pathname: PATH.CATEGORY, query: { category } }
  return { pathname: PATH.CATALOG }
}

const Product = () => {
  const { query } = useRouter()

  return (
    <>
      <Link href={getURLObject(query) as URL}>
        <div className={styles.back}>
          <Button type="link" icon={BxArrowBack}>
            Назад в каталог
          </Button>
        </div>
        <Slider className={styles.slider}>
          <Slider.Slide className={styles.slide} image={mockSrc} />
        </Slider>
        <Typography.Title level={5}>
          Арахисовая паста хрустящая Nattys СRUNCHY с кусочками арахиса 325 г
        </Typography.Title>
      </Link>
    </>
  )
}

export default Product
