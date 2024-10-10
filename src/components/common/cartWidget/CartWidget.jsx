import "./CartWidget.css"
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  return (
    <div className="carritoIcon">
        <BiCart />
        <span>0</span>
    </div>
  )
}
