import "../card/card.css"

export const Card = (props) => {
    const { title, price, stock} = props;
    return (
        <div className="StyleCARD">
            <h2>{title}</h2>
            <h3>Precio: {price}</h3>
            <h3> Stock Disponible:{stock}</h3>
        </div>
    )
}