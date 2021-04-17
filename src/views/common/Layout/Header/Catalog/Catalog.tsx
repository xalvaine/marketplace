import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Catalog as CatalogType } from '@/interfaces'
import { layout } from '@/reducers'
import { RootState } from '@/pages/_app'
import { useCatalogs } from '@/hooks'
import { useEffect, useState } from 'react'
import Options from './Options'
import styles from './catalog.module.scss'
import Content from './Content'

const Catalog = () => {
  const dispatch = useDispatch()
  const { showCatalog } = useSelector((state: RootState) => state.layout)
  const { data: catalogs } = useCatalogs()
  const [selected, setSelected] = useState<string>()

  useEffect(
    () =>
      catalogs &&
      setSelected(
        catalogs.find((catalog) => !!catalog.catalogs.length)?.id.toString(),
      ),
    [catalogs],
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
            catalogs={catalogs as CatalogType[] | undefined}
            selected={selected}
            setSelected={setSelected}
          />
          <Content
            catalog={
              (catalogs &&
                selected &&
                catalogs.find(
                  (catalog) => catalog.id === parseInt(selected),
                )) as CatalogType<CatalogType> | undefined
            }
            onSelect={() => dispatch(layout.setShowCatalog(false))}
          />
        </div>
      </section>
    </CSSTransition>
  )
}

export default Catalog
