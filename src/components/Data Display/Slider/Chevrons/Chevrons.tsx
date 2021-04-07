import { BxChevronLeft, BxChevronRight } from '@/icons'
import styles from './chevrons.module.scss'

interface Props {
  handlePageSwitch: (page: number) => void
}

const Chevrons = (props: Props) => {
  const { handlePageSwitch } = props

  return (
    <>
      <BxChevronLeft
        className={styles.left}
        onClick={() => handlePageSwitch(-1)}
      />
      <BxChevronRight
        className={styles.right}
        onClick={() => handlePageSwitch(1)}
      />
    </>
  )
}

export default Chevrons
