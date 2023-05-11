import ItemCount from "../ItemCount/ItemCount"

const ItemDetail =({id, name, img, category, description, price, stock})=>{
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    precio: {price}
                </p>
                <p>
                    stock disponible: {stock}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log
                ('cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail