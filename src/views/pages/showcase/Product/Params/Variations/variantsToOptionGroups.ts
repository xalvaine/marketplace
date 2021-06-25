import { Variant } from '@/interfaces'

const variantsToOptionGroups = (variants: Variant[]) => {
  const optionGroups: {
    [code: string]: {
      code: string
      title: string
      type: string
      options: { [value: string]: { value: string; variantIds: number[] } }
    }
  } = {}
  variants.forEach((variant) =>
    variant.options?.forEach((option) => {
      if (!optionGroups[option.code]) {
        optionGroups[option.code] = {
          code: option.code,
          title: option.title,
          type: option.type,
          options: {},
        }
      }
      if (!optionGroups[option.code].options[option.value]) {
        optionGroups[option.code].options[option.value] = {
          value: option.value,
          variantIds: [],
        }
      }
      optionGroups[option.code].options[option.value].variantIds.push(
        variant.id,
      )
    }),
  )
  return Object.values(optionGroups).map((optionGroup) => ({
    ...optionGroup,
    options: Object.values(optionGroup.options),
  }))
}

export default variantsToOptionGroups
