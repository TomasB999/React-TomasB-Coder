
import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.css"

export const Navbar = ()=>{

    const stylesImage = {
        margin: "10px"
    }
    return (
    <div className="container-navbar">
        <Link to="/">  
        <img src="https://res.cloudinary.com/ddd3z2fug/image/upload/v1728598934/boxcaja_qcg7gk.png" alt="logo" 
        style={stylesImage}
        />
        </Link>
        <ul className="opcionesClick">
            <Link to="/category/De Temporada">Cajas Temporales</Link>
            <Link to="/category/personalizada">Cajas Personalizadas</Link>
            <Link to="/category/Mistery Box">Cajas Misteriosas</Link>
            <li>Nosotros</li>
            
        </ul>
        
        <CartWidget />
        <span>0</span>
    </div>
    )
}