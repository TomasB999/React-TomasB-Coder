import Counter from "../../common/counter/Counter"
const ItemDetail = ({item, agregarAlCarrito, totalInCart}) => {
  
  return (
    <div>
        <h2>{item.title}</h2>
        <img src={item.imageUrl} alt="" />
        <h3>Precio: {item.price}</h3>
        <h3> Stock Disponible:{item.stock}</h3>
        <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} totalInCart={totalInCart}/>
    </div>
  )
}

export default ItemDetail