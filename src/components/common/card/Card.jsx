import { Link } from "react-router-dom"
import "../card/card.css"

export const Card = ({image, title, price, stock, id}) => {
    return (
        <div className="StyleCard">
            <div className="container">
            <img className="imagenCard" src={image} />
            <h2>{title}</h2>
            <h3>Precio: {price}</h3>
            <h3> Stock Disponible:{stock}</h3>
            <Link to={`/itemDetail/${id}`}><button>Ver detalles</button></Link>
            </div>
            
        </div>
    )
}