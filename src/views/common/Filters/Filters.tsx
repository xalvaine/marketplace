import styles from './filters.module.scss'
import Range from './Range'
import Checkboxes from './Checkboxes'
import Toggle from './Switches'

const Filters = () => {
  return (
    <div className={styles.wrapper}>
      <Range />
      <Checkboxes />
      <Toggle />
    </div>
  )
}

export default Filters
