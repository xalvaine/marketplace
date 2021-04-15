import { useState } from 'react'
import { Slider } from '@/components'
import { mockSrc } from '@/config'
import { Product } from '@/interfaces'
import classNames from 'classnames'
import styles from './picture.module.scss'
import PicturesList from './PicturesList'

interface Props {
  images: Product['images']
  className?: string
}

const Picture = (props: Props) => {
  const { images, className } = props
  const [imageIndex, setImageIndex] = useState(0)
  console.log(images)

  return (
    <div className={classNames(styles.wrapper, className)}>
      <PicturesList images={images} setImage={setImageIndex} />
      <div className={styles.sliderWrapper}>
        <Slider className={styles.slider}>
          <Slider.Slide
            className={styles.slide}
            image={images[imageIndex]?.url || mockSrc}
          />
        </Slider>
      </div>
    </div>
  )
}

export default Picture
