import { useState } from "react"

const Counter = ({stock, agregarAlCarrito}) => {
    const [ contador, setContador] = useState(0);

    const sumar = () => {
      stock > contador ? setContador(contador + 1): alert ("Stock maximo")
    };
    const restar = () => {
        setContador(contador - 1)
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