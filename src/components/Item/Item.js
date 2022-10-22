const Item = ({ product }) => {
  return (
    <div>
      <img src={product.image} w="40px" />

      <p>{product.title}</p>

      <p>${product.price}</p>
      <button>Ver Detalle</button>
    </div>
  )
}

export { Item }
