import { useEffect, useState } from "react";
import { products } from "../../../Products";
import  ItemList  from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const {name} = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const filtroCategorias = products.filter(
            (producto) => producto.category === name
        );
        const getProducts = new Promise((resolve)=> {
            resolve(name ? filtroCategorias : products);
        });
        getProducts.then((res) => {
            setItems(res);
        });
    }, [name]);
    return <ItemList items={items}/>;
};





















// let MyProductsPromise = new Promise( (res,rej)=>{
//     setTimeout( () => {
//         if (products.length === 0) {
//             res("Productos vacios");
//         } else {
//             res(products);
//         }
//     }, 2500);
// } );

// export const ItemListContainer = () => {
//     const [myProducts, setMyProducts] = useState([])

//     useEffect( () => {
//         MyProductsPromise
//         .then((data) => {
//             setMyProducts(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     },[]);


    

//     return (
//     <div className="li-container">
//         <ItemList myProducts={myProducts}/>
//     </div>
//     )
// }

