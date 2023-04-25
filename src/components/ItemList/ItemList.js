import Item from "../Item/Item"
import '../ItemList/itemList.css'

const ItemList = ({products})=>{
    return (
        <div className="itemList">
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList