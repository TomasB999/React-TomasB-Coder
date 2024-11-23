import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cartcontainer.css";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmoun } = useContext(CartContext);

  let totalEnELCarrito = getTotalAmoun();

  return (
    <div className="cart-container">
      <h2>Tu carrito de compras</h2>
      {cart.map((product) => {
        return (
          <div key={product.id} className="cart-item">
            <div>
              <h2>{product.title}</h2>
              <h3>Cantidad: {product.quantity}</h3>
            </div>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <button onClick={resetCart}>Limpiar carrito</button>
      )}
      <h2 className={`cart-total ${cart.length > 0 ? "red" : ""}`}>
        El total a pagar es: ${totalEnELCarrito}
      </h2>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default CartContainer;
