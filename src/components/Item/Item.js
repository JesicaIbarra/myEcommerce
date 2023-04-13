const Item = ({id, name, prece, img, stock})=>{
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
                    precio: {prece}
                </p>
                <p>
                    stock disponible: {stock}
                </p>
            </section>
            <footer>
                <button>Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item