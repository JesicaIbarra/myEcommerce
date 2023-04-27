import { Link } from "react-router-dom"
import '../Item/item.css'

const Item = ({id, name, prece, img, stock})=>{
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
                    precio: {prece}
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