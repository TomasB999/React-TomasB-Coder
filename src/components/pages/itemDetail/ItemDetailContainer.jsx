import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { products } from "../../../Products";
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    
    useEffect(() =>  {
        let productSelected = products.find((producto) => producto.id === id);
        setItem(productSelected);
    }, [id] );
    const agregarAlCarrito = (cantidad) => {
        let objeto = {...item, quantity: cantidad};
    };
    return <ItemDetail  item={item} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer
