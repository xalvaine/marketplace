import { Typography, Tag } from '@/components'
import { Variant } from '@/interfaces'
import { Dispatch, useEffect, useMemo, useState } from 'react'
import styles from './variations.module.scss'
import variantsToOptionGroups from './variantsToOptionGroups'

interface Props {
  variants: Variant[]
  selectedVariant?: number
  setSelectedVariant: Dispatch<number>
}

const Variations = (props: Props) => {
  const { variants, selectedVariant, setSelectedVariant } = props
  const [selectedVariantIds, setSelectedVariantIds] = useState<number[][]>([])

  const optionGroups = useMemo(
    () => variantsToOptionGroups(variants),
    [variants],
  )

  useEffect(() => {
    if (!optionGroups) return
    const selectedVariantIdsTmp: number[][] = []
    optionGroups.forEach((optionGroup, index) => {
      selectedVariantIdsTmp[index] = optionGroup.options[0].variantIds
    })
    setSelectedVariantIds(selectedVariantIdsTmp)
  }, [optionGroups])

  useEffect(() => {
    if (!selectedVariantIds.length) return
    setSelectedVariant(
      Array.from(
        selectedVariantIds.reduce(
          (accumulator, current) =>
            new Set(
              [...accumulator].filter((value) => new Set(current).has(value)),
            ),
          new Set(selectedVariantIds[0]),
        ),
      )[0],
    )
  }, [selectedVariantIds, setSelectedVariant])

  const handleChangeTag = (index: number, value: number[]) => {
    const selectedVariantIdsTmp = [...selectedVariantIds]
    selectedVariantIdsTmp[index] = value
    setSelectedVariantIds(selectedVariantIdsTmp)
  }

  if (!optionGroups.length) return null
  return (
    <div className={styles.wrapper}>
      {optionGroups.map((optionGroup, index) => (
        <div key={optionGroup.code} className={styles.optionGroup}>
          <Typography.Text className={styles.text}>
            {optionGroup.title}:
          </Typography.Text>
          <Tag.Group onChange={(value) => handleChangeTag(index, value)}>
            {optionGroup.options.map((option) => (
              <Tag
                key={`${optionGroup.code}-${option.value}`}
                checked={
                  selectedVariant
                    ? option.variantIds.includes(selectedVariant)
                    : undefined
                }
                value={option.variantIds}
              >
                {option.value}
              </Tag>
            ))}
          </Tag.Group>
        </div>
      ))}
    </div>
  )
}

export default Variations
