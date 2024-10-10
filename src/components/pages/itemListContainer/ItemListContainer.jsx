import { Card } from "../../common/card/Card"

export const ItemListContainer = () => {
    return (
    <div>

        <Card title="Caja de Temporada" price={1000} stock={5}/>
        <Card title="Caja Misteriosa" price={2000} stock={10}/>
        <Card title="Caja Personalizable" price={2500} stock={3}/>

    </div>
    )
}
