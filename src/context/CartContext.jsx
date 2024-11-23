import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvinder = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log("Producto intentando agregar al carrito:", product);
    
        setCart((prevCart) => {
            // Verifica si el producto ya está en el carrito
            const itemExists = prevCart.find((item) => item.id === product.id);
    
            if (itemExists) {
                // Calcula la cantidad total si ya existe en el carrito
                const totalQuantityInCart = itemExists.quantity + product.quantity;
    
                // Calcula las unidades restantes en el stock
                const remainingStock = product.stock - itemExists.quantity;
    
                // Si la cantidad solicitada excede las unidades restantes, no actualiza el carrito
                if (product.quantity > remainingStock) {
                    console.warn(
                        `Stock insuficiente para el producto ${product.title}. Solo puedes agregar ${remainingStock} unidades más.`
                    );
                    return prevCart; // Devuelve el carrito sin cambios
                }
    
                // Actualiza la cantidad del producto en el carrito
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: totalQuantityInCart }
                        : item
                );
            } else {
                // Si el producto no está en el carrito, verifica si la cantidad inicial excede el stock
                if (product.quantity > product.stock) {
                    console.warn(
                        `Stock insuficiente para el producto ${product.title}. Máximo permitido: ${product.stock}`
                    );
                    return prevCart; // Devuelve el carrito sin cambios
                }
    
                // Agrega el producto al carrito si cumple con el stock
                return [...prevCart, product];
            }
        });
    };
    

    // Función para eliminar un producto por ID
    const removeById = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const resetCart = () => {
        setCart([])
    }; 

    const getTotalQuantity = (id) => {
        const product = cart.find((item) => item.id === id);
        return product ? product.quantity : 0; // Si existe, devuelve la cantidad, si no, devuelve 0
    };

    const getUniqueProductsCount = () => {
        return cart.length; 
    };

    const getTotalAmoun = () => {
        let total = cart.reduce( (acc, elemento)=> {
            return acc + (elemento.price * elemento.quantity)
        }, 0 )

        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeById, resetCart, getTotalQuantity, getUniqueProductsCount, getTotalAmoun }}>
            {children}
        </CartContext.Provider>
    );
};


