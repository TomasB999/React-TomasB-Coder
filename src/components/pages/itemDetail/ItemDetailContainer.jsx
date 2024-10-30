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
    return <ItemDetail  item={item}/>;
};

export default ItemDetailContainer
