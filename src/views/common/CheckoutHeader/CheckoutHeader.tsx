import { UrlObject } from 'url'
import { BxArrowBack } from '@/icons'
import { Link, Typography } from '@/components'
import { FunctionComponent, ReactNode, SVGProps } from 'react'
import classNames from 'classnames'
import styles from './checkout-header.module.scss'

interface Props {
  title: ReactNode
  subtitle?: ReactNode
  backLink: string | UrlObject
  rightIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  onRightIconClick?: () => void
  bordered?: boolean
}

const CheckoutHeader = (props: Props) => {
  const { title, subtitle, rightIcon: RightIcon, backLink, bordered } = props

  return (
    <header
      className={classNames(
        styles.header,
        bordered && styles.bordered,
        !subtitle && styles.short,
      )}
    >
      <Link className={styles.link} href={backLink}>
        <BxArrowBack className={styles.icon} />
      </Link>
      <div className={styles.central}>
        <Typography.Title level={subtitle ? 6 : 5}>{title}</Typography.Title>
        {subtitle && <Typography.Text>{subtitle}</Typography.Text>}
      </div>
      {RightIcon && <RightIcon className={styles.icon} />}
    </header>
  )
}

export default CheckoutHeader
