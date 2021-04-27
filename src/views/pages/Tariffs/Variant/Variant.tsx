import { Typography, Link } from '@/components'
import { BxsRightArrow } from '@/icons'
import styles from './variant.module.scss'

interface Props {
  href: string
}

const Variant = (props: Props) => {
  const { href } = props

  return (
    <Link className={styles.wrapper} href={href}>
      <Typography.Title className={styles.name} level={6}>
        Курьером
      </Typography.Title>
      <Typography.Text disabled secondary className={styles.terms}>
        1–3 рабочих дня
      </Typography.Text>
      <Typography.Title className={styles.price} level={6}>
        от 122₽
        <BxsRightArrow className={styles.icon} />
      </Typography.Title>
    </Link>
  )
}

export default Variant
