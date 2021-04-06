import {
  DetailedHTMLProps,
  FunctionComponent,
  InputHTMLAttributes,
  SVGProps,
} from 'react'
import classNames from 'classnames'
import styles from './input.module.scss'

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
> & {
  size?: keyof typeof sizeToStyle
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
    ...rest
  } = props

  return (
    <div className={classNames(styles.wrapper, className)}>
      <input
        className={classNames(
          sizeToStyle[size],
          LeftIcon && styles.withLeftIcon,
          RightIcon && styles.withRightIcon,
        )}
        {...rest}
      />
      {LeftIcon && <LeftIcon className={styles.leftIcon} />}
      {RightIcon && <RightIcon className={styles.rightIcon} />}
    </div>
  )
}

export default Input
