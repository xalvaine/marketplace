import { Typography } from '@/components'
import classNames from 'classnames'
import { BxCheck } from '@/icons'
import styles from './step.module.scss'

export interface ExternalProps {
  title: string
}

interface Props extends ExternalProps {
  state: 'inactive' | 'active' | 'finished'
  number: number
}

const Step = (props: Props) => {
  const { title, state, number } = props

  return (
    <li className={styles.wrapper}>
      <Typography.Text
        inline
        className={classNames(
          styles.number,
          state !== `inactive` && styles.activeNumber,
        )}
      >
        {state === `finished` ? <BxCheck className={styles.icon} /> : number}
      </Typography.Text>
      <Typography.Text
        disabled
        inline
        secondary
        className={state !== `inactive` ? styles.activeTitle : undefined}
        weight="medium"
      >
        {title}
      </Typography.Text>
    </li>
  )
}

export default Step
