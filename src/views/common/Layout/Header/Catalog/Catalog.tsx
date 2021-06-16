import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { layout } from '@/reducers'
import { RootState } from '@/pages/_app'
import { useCategories } from '@/hooks'
import { useEffect, useState } from 'react'
import Options from './Options'
import styles from './catalog.module.scss'
import Content from './Content'

const Catalog = () => {
  const dispatch = useDispatch()
  const { showCatalog } = useSelector((state: RootState) => state.layout)
  const { data: categories } = useCategories()
  const [selected, setSelected] = useState<string>()

  useEffect(
    () =>
      categories &&
      setSelected(
        categories
          .find((category) => !!category.categories.length)
          ?.id.toString(),
      ),
    [categories],
  )

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles.transparent,
        enterActive: styles.visible,
        exitActive: styles.transparent,
      }}
      in={showCatalog}
      timeout={300}
    >
      <section className={styles.wrapper}>
        <aside
          className={styles.shadow}
          onClick={() => dispatch(layout.setShowCatalog(false))}
        />
        <div className={styles.dropdown}>
          <Options
            categories={categories}
            selected={selected}
            setSelected={setSelected}
          />
          <Content
            category={
              categories && selected
                ? categories.find(
                    (category) => category.id === parseInt(selected),
                  )
                : undefined
            }
            onSelect={() => dispatch(layout.setShowCatalog(false))}
          />
        </div>
      </section>
    </CSSTransition>
  )
}

export default Catalog
