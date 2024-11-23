import { Link } from "react-router-dom";
import "./cartwidget.css";
import { BiCart } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="carritoIcon">
            <Link to="/Cart">
                <BiCart />
                <span>{totalItems}</span>
            </Link>
        </div>
    );
};