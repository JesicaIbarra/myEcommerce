import CartWidger from "../CartWidget/CartWidget";
import '../NavBar/navBar.css'
const NavBar =()=>{
    return(
        <nav className='NavBar'>
            <h2><strong className='logo'>E</strong>commerce</h2>
            <div className='ConteinerBtnNav'>
                <button className='btnNav'>Hombre</button>
                <button className='btnNav'>Mujer</button>
                <button className='btnNav'>Calzados</button>
            </div>
            <CartWidger/>
        </nav>
    )
}

export default NavBar;