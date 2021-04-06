import { ComponentProps, FunctionComponent } from 'react'
import classNames from 'classnames'
import styles from './typography.module.scss'
import Text from './Text'
import Title from './Title'

const weightToClass = {
  regular: styles.regular,
  medium: styles.medium,
  semibold: styles.semibold,
  bold: styles.bold,
}

interface Props {
  className?: string
  weight?: keyof typeof weightToClass
  underline?: boolean
  strikethrough?: boolean
}

const Typography = <T extends Props>(
  Component: FunctionComponent<Omit<T, keyof Props> & { className: string }>,
): FunctionComponent<T & Props> => (props) => {
  const { className, strikethrough, underline, weight, ...rest } = props
  return (
    <Component
      {...rest}
      className={classNames(
        className,
        styles.typography,
        strikethrough && styles.strikethrough,
        underline && styles.underline,
        weight && weightToClass[weight],
      )}
    />
  )
}

Typography.Text = Typography<ComponentProps<typeof Text>>(Text)
Typography.Title = Typography<ComponentProps<typeof Title>>(Title)
export default Typography
