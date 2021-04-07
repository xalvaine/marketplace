import { Typography } from '@/components'
import styles from './column.module.scss'

interface Props {
  title: string
  rows: string[]
}

const Column = (props: Props) => {
  const { title, rows } = props

  return (
    <li className={styles.block}>
      <Typography.Title className={styles.title} level={5}>
        {title}
      </Typography.Title>
      <ul className={styles.rows}>
        {rows.map((row) => (
          <li key={row}>
            <Typography.Text className={styles.text} weight="medium">
              {row}
            </Typography.Text>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Column
