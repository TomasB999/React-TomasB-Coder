
import "./Navbar.css"
import { BiCart } from "react-icons/bi";

export const Navbar = ()=>{

    const stylesImage = {
        margin: "10px"
    }
    return (
    <div className="container-navbar">
        <img src="https://res.cloudinary.com/ddd3z2fug/image/upload/v1728598934/boxcaja_qcg7gk.png" alt="logo" 
        style={stylesImage}
        />
        <ul className="opcionesClick">
            <li>Cajas Temporales</li>
            <li>Cajas Personalizadas</li>
            <li>Nosotros</li>
            <li>Mi Pedido</li>
        </ul>
        
        <BiCart />
        <span>0</span>
    </div>
    )
}