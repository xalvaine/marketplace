import { DetailedHTMLProps, ImgHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import { Typography } from '@/components/common'

import styles from './image.module.scss'

interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  label?: string
}

const Image = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { label, alt = ``, className, ...rest } = props

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.imageWrapper}>
        <img
          {...rest}
          className={classNames(styles.image, className)}
          alt={alt}
        />
      </div>
      <Typography.Text secondary weight="medium" className={styles.label}>
        {label}
      </Typography.Text>
    </div>
  )
})

export default Image
