import { Item } from '../Item/Item'

const ItemList = ({ listProducts }) => {
  return (
    <>
      <div style={styles.container}>
        {listProducts.map((prod, i) => (
          <Item key={'${prod.product}-${i}'} product={prod} />
        ))}
      </div>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}

export { ItemList }
