import { Typography, Link } from '@/components'
import { BxsRightArrow } from '@/icons'
import { Tariff } from '@/interfaces'
import styles from './variant.module.scss'

interface Props {
  href: string
  tariffs?: Tariff[]
  type: keyof typeof typeToName
}

const typeToName = {
  COURIER: `Курьер`,
  PVZ: `ПВЗ`,
  RUSSIAN_POST: `Почта России`,
}

const Variant = (props: Props) => {
  const { href, tariffs: externalTariffs, type } = props

  const tariffs = externalTariffs?.filter((tariff) => tariff.type === type)
  if (!tariffs?.length) return null

  const minDeliveryTime = tariffs?.reduce(
    (time, tariff) => Math.min(tariff.minDeliveryTime, time),
    Infinity,
  )
  const maxDeliveryTime = tariffs?.reduce(
    (time, tariff) => Math.max(tariff.maxDeliveryTime, time),
    0,
  )
  const minPriceObject = tariffs?.reduce(
    (priceObject, tariff) => {
      if (tariff.deliveryPrice < priceObject.value) {
        priceObject.value = tariff.deliveryPrice
        priceObject.repeats = true
      }
      return priceObject
    },
    { value: Infinity, repeats: false },
  )

  return (
    <Link className={styles.wrapper} href={href}>
      <Typography.Title className={styles.name} level={6}>
        {typeToName[type]}
      </Typography.Title>
      <Typography.Text disabled secondary className={styles.terms}>
        {minDeliveryTime}–{maxDeliveryTime} рабочих дней
      </Typography.Text>
      <Typography.Title className={styles.price} level={6}>
        {minPriceObject?.repeats && `от `}
        {minPriceObject?.value}₽
        <BxsRightArrow className={styles.icon} />
      </Typography.Title>
    </Link>
  )
}

export default Variant
