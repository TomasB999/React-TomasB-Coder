import { useEffect, useState } from "react";
import  ItemList  from "./ItemList";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { products } from "../../../Products";

export const ItemListContainer = () => {
    const {name} = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const productsCollection = collection( db, "products");
        // const unaParteDeLaColeccion = query( 
        //     productsCollection, 
        //     where( "category", "==", name )
        // );
        let docsRef = productsCollection;
        if( name ){
            docsRef = query(  productsCollection, where( "category", "==", name ));
        }

        getDocs( docsRef ).then((res) => {
            let arrayEntendible = res.docs.map((doc)=>{
                return {...doc.data(), id: doc.id}
            });
            setItems(arrayEntendible);
        });
    }, [name]);

    // if (items.length === 0){
    //     return <h1>Cargando... </h1>
    // }

    // const funcionParaAgregar = () => {
    //     const productsCollection = collection( db, "products")
        
    //     products.forEach( (product)=> {
    //         addDoc(productsCollection, product)
    //     })
    // }
    return (
            <div className="li-container">
                <h2>ArBox</h2>
                {items.length === 0 ? 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',      
                    height: '100vh'            
                }}>
                    <CircularProgress />
                </Box>
                
                : <ItemList items={items}/>}
                {/* <button onClick={funcionParaAgregar}>Cargar productos varios</button> */}

            </div>
            )
};

// const filtroCategorias = products.filter(
//     (producto) => producto.category === name
// );
// const getProducts = new Promise((resolve)=> {
//     resolve(name ? filtroCategorias : products);
// });
// getProducts.then((res) => {
//     setTimeout(() => {
//         setItems(res);
//     }, 1500);
// });




















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

