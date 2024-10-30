
const ItemDetail = ({item}) => {
  return (
    <div>
        <h2>{item.title}</h2>
        <img src={item.imageUrl} alt="" />
        <h3>Precio: {item.price}</h3>
        <h3> Stock Disponible:{item.stock}</h3>
    </div>
  )
}

export default ItemDetail