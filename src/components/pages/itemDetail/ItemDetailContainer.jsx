import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../Products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart, getTotalQuantity} = useContext(CartContext);

    let totalInCart = getTotalQuantity( id )

    const [item, setItem] = useState({});

    useEffect(() => {
        let productSelected = products.find((producto) => producto.id === id);
        setItem(productSelected);
    }, [id]);

    const agregarAlCarrito = (cantidad) => {
        let objeto = { ...item, quantity: cantidad };
        addToCart(objeto);
        toast.success ("Producto agregado correctamente", {closeButton: true,})
    };

    return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} totalInCart={totalInCart} />;
};

export default ItemDetailContainer;


