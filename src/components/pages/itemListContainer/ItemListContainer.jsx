import { useEffect, useState } from "react";
import { products } from "../../../Products";
import  ItemList  from "./ItemList";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

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
            setTimeout(() => {
                setItems(res);
            }, 2000);
        });
    }, [name]);

    // if (items.length === 0){
    //     return <h1>Cargando... </h1>
    // }
    return (
            <div className="li-container">
                <h2>ArBox</h2>
                {items.length === 0 ? 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',  // Centra horizontalmente
                    alignItems: 'center',      // Centra verticalmente
                    height: '100vh'            // Asegura que ocupe toda la altura de la ventana
                }}>
                    <CircularProgress />
                </Box>
                
                : <ItemList items={items}/>}

            </div>
            )
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

