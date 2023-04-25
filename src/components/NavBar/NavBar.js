
import CartWidger from "../CartWidget/CartWidget";
import '../NavBar/navBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar =()=>{
    return(
        <nav className='NavBar'>
            <Link to='/'>
            <h2><strong className='logo'>E</strong>commerce</h2>
            </Link>
            
            <div className='ConteinerBtnNav'>
                <NavLink to={`/category/celular`} className= {({isActive})=> isActive ? 'ActiveOption': 'Option'}>Celular</NavLink>
                <NavLink to={`/category/tablet`} className={({isActive})=> isActive ? 'ActiveOption': 'Option'}> Tablet</NavLink>
                <NavLink to={`/category/notebook`} className={({isActive})=> isActive ? 'ActiveOption': 'Option'}> notebook</NavLink>
            </div>
            <CartWidger/>
        </nav>
    )
}

export default NavBar;