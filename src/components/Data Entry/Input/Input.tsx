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
  size?: 'normal' | 'large'
  search?: boolean
  leftIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  rightIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  onLeftIconClick?: () => void
  onRightIconClick?: () => void
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
          styles.input,
          styles.normalInput,
          size === `large` && styles.largeInput,
          LeftIcon && styles.withLeftIcon,
          RightIcon && styles.withRightIcon,
          search && styles.search,
        )}
        {...rest}
      />
      {LeftIcon && (
        <div
          className={classNames(
            styles.iconWrapper,
            styles.leftIconWrapper,
            onLeftIconClick && styles.pointer,
          )}
          onClick={onLeftIconClick}
        >
          <LeftIcon className={styles.icon} />
        </div>
      )}
      {RightIcon && (
        <div
          className={classNames(
            styles.iconWrapper,
            styles.rightIconWrapper,
            onLeftIconClick && styles.pointer,
          )}
          onClick={onRightIconClick}
        >
          <RightIcon className={styles.icon} />
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
