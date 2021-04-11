import { List } from '@/components'
import styles from './categories.module.scss'

const Categories = () => {
  return (
    <section className={styles.wrapper}>
      <List className={styles.list}>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
        <List.Item>Коллекция</List.Item>
      </List>
    </section>
  )
}

export default Categories
