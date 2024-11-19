import { Link } from "react-router-dom";
import "./cartwidget.css"
import { BiCart } from "react-icons/bi";

export const CartWidget = () => {
  return (
    <div className="carritoIcon">
        <Link to="/Cart">Carrito
        <BiCart />
        <span>0</span>
        </Link>
    </div>
  )
}
