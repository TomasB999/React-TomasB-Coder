import { Card } from "../../common/card/Card";



const ItemList = ({ items }) => {
    return (
        <div>
        <h2>Listado de Productos</h2>
        {items.map (({ id, imageUrl ,title, price, stock}) => (
            <Card key={id} image={imageUrl} title={title} price={price} stock={stock} id={id}/>
        ))} 
        </div>
    );
};

export default ItemList;