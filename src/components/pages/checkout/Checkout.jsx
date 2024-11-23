import { useState } from "react";
import "./checkout.css";

const Checkout = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        console.log("Formulario enviado");
        console.log(userInfo);
    };

    const capturarInfo = (evento) => {
        const { name, value } = evento.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div className="checkout-container">
            <form onSubmit={funcionDelFormulario}>
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    name="name"
                    onChange={capturarInfo}
                />
                <input
                    type="email"
                    placeholder="Email@gmail.com"
                    name="email"
                    onChange={capturarInfo}
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    name="phoneNumber"
                    onChange={capturarInfo}
                />
                <button type="submit">Comprar</button>
                <button type="button">Cancelar</button>
            </form>
        </div>
    );
};

export default Checkout;
