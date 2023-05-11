import { Link } from "react-router-dom"
import '../Item/item.css'

const Item = ({id, name, price, img, stock})=>{
    return (
        <article className="containerCard">
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
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item