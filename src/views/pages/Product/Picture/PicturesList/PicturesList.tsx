import { Dispatch, useState } from 'react'
import SwiperClass from 'swiper/types/swiper-class'
import { Slider } from '@/components'
import { mockSrc } from '@/config'
import { Product } from '@/interfaces'
import { BxsDownArrow, BxsUpArrow } from '@/icons'
import styles from './pictures-list.module.scss'

interface Props {
  images: Product['images']
  setImage: Dispatch<number>
}

const PicturesList = (props: Props) => {
  const { images, setImage } = props
  const [slider, setSlider] = useState<SwiperClass>()
  const hasScroll = images.length > 6

  if (images.length <= 1) return null
  return (
    <div className={styles.wrapper}>
      {hasScroll && (
        <BxsUpArrow
          className={styles.icon}
          onClick={() => slider?.slidePrev()}
        />
      )}
      <Slider
        className={styles.slider}
        direction="vertical"
        loop={false}
        slidesPerView={6}
        spaceBetween={4}
        onClick={(swiper) => setImage(swiper.clickedIndex)}
        onSwiper={setSlider}
      >
        {images.map((image) => (
          <Slider.Slide
            key={image.id}
            className={styles.picture}
            image={image.url || mockSrc}
          />
        ))}
      </Slider>
      {hasScroll && (
        <BxsDownArrow
          className={styles.icon}
          onClick={() => slider?.slideNext()}
        />
      )}
    </div>
  )
}

export default PicturesList
