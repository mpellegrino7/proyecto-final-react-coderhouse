const Item = ({ product }) => {
  return (
    <div>
      <img src={product.imagen} w="40px" />

      <p>{product.nombre}</p>

      <p>${product.precio}</p>
      <button>Ver Detalle</button>
    </div>
  )
}

export { Item }
