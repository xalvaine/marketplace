import { DetailedHTMLProps, ImgHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import { Typography } from '@/components'
import styles from './image.module.scss'

interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  label?: string
}

const Image = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { label, alt = ``, className, src = ``, ...rest } = props

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          {...rest}
          alt={alt}
          className={classNames(styles.image, className)}
          src={src}
        />
      </div>
      <Typography.Text secondary className={styles.label} weight="medium">
        {label}
      </Typography.Text>
    </div>
  )
})

export default Image
