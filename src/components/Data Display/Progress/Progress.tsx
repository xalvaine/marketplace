import styles from './progress.module.scss'

interface Props {
  value?: number
  maxValue?: number
}

const Progress = (props: Props) => {
  const { value, maxValue } = props
  return (
    <div className={styles.wrapper}>
      <span
        className={styles.progress}
        style={{
          width: `${
            value && maxValue ? Math.min((value / maxValue) * 100, 100) : 0
          }%`,
        }}
      />
    </div>
  )
}

export default Progress
