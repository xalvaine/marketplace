import {
  DetailedHTMLProps,
  FunctionComponent,
  InputHTMLAttributes,
  SVGProps,
} from 'react'
import classNames from 'classnames'
import { Button } from '@/components'
import styles from './input.module.scss'

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
> & {
  size?: keyof typeof sizeToStyle
  search?: boolean
  leftIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  rightIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
}

const sizeToStyle = {
  normal: styles.normalInput,
  large: styles.largeInput,
}

const Input = (props: Props) => {
  const {
    className,
    size = 'normal',
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    search,
    ...rest
  } = props

  return (
    <label className={classNames(styles.wrapper, className)}>
      <input
        className={classNames(
          sizeToStyle[size],
          LeftIcon && styles.withLeftIcon,
          RightIcon && styles.withRightIcon,
          search && styles.search,
        )}
        {...rest}
      />
      {LeftIcon && <LeftIcon className={styles.leftIcon} />}
      {RightIcon && <RightIcon className={styles.rightIcon} />}
      {search && (
        <Button className={styles.searchButton} size={size} type="primary">
          Найти
        </Button>
      )}
    </label>
  )
}

export default Input
