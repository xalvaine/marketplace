import {
  DetailedHTMLProps,
  forwardRef,
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
  onLeftIconClick?: () => void
  onRightIconClick?: () => void
}

const sizeToStyle = {
  normal: styles.normalInput,
  large: styles.largeInput,
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    size = 'normal',
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    search,
    hidden,
    onLeftIconClick,
    onRightIconClick,
    ...rest
  } = props

  return (
    <label className={classNames(styles.wrapper, className)} hidden={hidden}>
      <input
        ref={ref}
        className={classNames(
          sizeToStyle[size],
          LeftIcon && styles.withLeftIcon,
          RightIcon && styles.withRightIcon,
          search && styles.search,
        )}
        {...rest}
      />
      {LeftIcon && (
        <div className={styles.leftIconWrapper} onClick={onLeftIconClick}>
          <LeftIcon className={styles.leftIcon} />
        </div>
      )}
      {RightIcon && (
        <div className={styles.rightIconWrapper} onClick={onRightIconClick}>
          <RightIcon className={styles.rightIcon} />
        </div>
      )}
      {search && (
        <Button className={styles.searchButton} size={size}>
          Найти
        </Button>
      )}
    </label>
  )
})

Input.displayName = `Input`
export default Input
