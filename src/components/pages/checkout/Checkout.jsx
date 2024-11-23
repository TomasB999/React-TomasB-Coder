import { useContext, useState } from "react";
import "./checkout.css";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc} from "firebase/firestore"
import { db } from "../../../firebaseConfig";

const Checkout = () => {
    const { cart, getTotalAmoun } = useContext( CartContext);

    const [orderId, setOrderId] = useState(null)

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        console.log("Formulario enviado");
        console.log(userInfo);
        const total = getTotalAmoun();

        const order = {
            buyer: userInfo,
            items: cart,
            total: total,
        }
        let refCollection = collection( db, "orders")
        addDoc(refCollection, order).then((res)=> setOrderId(res.id))

        let refCol = collection(db , "products")
        order.items.forEach((item) => {
            let refDoc = doc(refCol, item.id)
            updateDoc(refDoc, {stock: item.stock - item.quantity})
        })

    };

    const capturarInfo = (evento) => {
        const { name, value } = evento.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    if(orderId) {
        return <h2>Gracias por tu compra, tu ticket es:{orderId}</h2>
    }

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
