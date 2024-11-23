import { Card } from "../../common/card/Card";
import ModalCustom from "../../common/ModalCustom";



const ItemList = ({ items }) => {
    return (
        <>
            <div>
                <h2>Listado de Productos</h2>
                {items.map(({ id, imageUrl, title, price, stock }) => (
                    <Card key={id} image={imageUrl} title={title} price={price} stock={stock} id={id} />
                ))}
            </div>
            <ModalCustom title="titulo  custom">
                <div>
                    <h5> un formulario</h5>
                    <form action="">
                        <input type="text" placeholder="nombre" />
                    </form>
                </div>
            </ModalCustom>
        </>
    );
};

export default ItemList;