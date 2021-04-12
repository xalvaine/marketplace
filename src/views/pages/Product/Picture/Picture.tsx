import { Slider } from '@/components'
import { mockSrc } from '@/config'
import { Product } from '@/interfaces'
import classNames from 'classnames'
import styles from './picture.module.scss'

interface Props {
  images: Product['images']
  className?: string
}

const Picture = (props: Props) => {
  const { images, className } = props

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.sliderWrapper}>
        <Slider className={styles.slider}>
          <Slider.Slide
            className={styles.slide}
            image={images[0]?.url || mockSrc}
          />
        </Slider>
      </div>
    </div>
  )
}

export default Picture
