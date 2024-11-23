import { useState } from "react"

const Counter = ({stock, agregarAlCarrito, totalInCart}) => {
    const [ contador, setContador] = useState(1);

    const sumar = () => {
      ( stock - totalInCart ) > contador ? setContador(contador + 1): alert ("Stock maximo")
    };
    const restar = () => {
      contador > 1 && setContador(contador - 1)
    };
  return (
    <div>
        <h2>Contador = {contador}</h2>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>

        <button onClick={()=>agregarAlCarrito(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter