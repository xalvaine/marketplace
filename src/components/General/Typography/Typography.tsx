import { ComponentProps, FunctionComponent } from 'react'
import classNames from 'classnames'
import Text from './Text'
import Title from './Title'
import styles from './typography.module.scss'

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

function Typography<T>(
  Component: FunctionComponent<Omit<T, keyof Props> & { className?: string }>,
) {
  return Object.assign(
    (props: T & Props) => {
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
    },
    { displayName: `Typography` },
  )
}

Typography.Text = Typography<ComponentProps<typeof Text>>(Text)
Typography.Title = Typography<ComponentProps<typeof Title>>(Title)
export default Typography
