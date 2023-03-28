import imgCartWidget from './assets/imgCartWidget.png';
import '../CartWidget/cartWidget.css'
const CartWidger = ()=>{
    return (
        <div className='conteinerCartWidget'>
            <img src={imgCartWidget} alt="icono carrito de compras"/>
            0
        </div>
        
    )
}

export default CartWidger;