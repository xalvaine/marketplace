import { Children, FunctionComponent, ReactElement } from 'react'
import classNames from 'classnames'
import styles from './steps.module.scss'
import Step, { ExternalProps } from './Step'

interface Props {
  className?: string
  children: ReactElement<ExternalProps> | ReactElement<ExternalProps>[]
  current: number
}

const signToState = { '-1': `inactive`, '0': `active`, '1': `finished` }

const Steps = (props: Props) => {
  const { children, current, className } = props

  if (!children) return null
  const items = Children.map(children, ({ props, key }) => ({ ...props, key }))

  return (
    <ul className={classNames(styles.wrapper, className)}>
      {items.map((props, index) => (
        <Step
          key={props.key}
          number={index + 1}
          state={
            signToState[
              Math.sign(current - index).toString() as keyof typeof signToState
            ] as 'inactive' | 'active' | 'finished'
          }
          title={props.title}
        />
      ))}
    </ul>
  )
}

Steps.Step = Step as FunctionComponent<ExternalProps>
export default Steps
