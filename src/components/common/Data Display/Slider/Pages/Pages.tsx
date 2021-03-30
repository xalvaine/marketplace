import styles from './pages.module.scss'

interface Props {
  total: number
  current: number
}

const Pages = (props: Props) => {
  const { current, total } = props
  const pages = []

  for (let page = 0; page < total; page++) {
    pages.push(
      <span
        key={page}
        className={page === current ? styles.current : styles.other}
      />,
    )
  }

  return <div className={styles.wrapper}>{pages}</div>
}

export default Pages
