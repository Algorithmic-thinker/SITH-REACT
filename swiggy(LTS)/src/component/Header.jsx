import Logo from '../assets/logo.jpg'
import { Link } from 'react-router'

const Header = ({ onButtonClick }) =>{
    return(
        <div className="flex justify-around items-center md:px-8 py-4 shadow-lg flex-wrap">

            <Link className="flex gap-14 cursor-pointer items-center" to="/">
                <img src={Logo} className="w-10 rounded-md"/>
                <p className='underline underline-offset-8 font-semibold'>Other <i className="fa-solid fa-chevron-down text-orange-500"></i></p>
            </Link>

            <div className="flex md:gap-14 gap-4 flex-wrap">
                <Link className="cursor-pointer hover:text-orange-500" to="swiggy-corporate"><i className="fa-solid fa-laptop"></i> Swiggy corporate</Link>
                <Link className="cursor-pointer hover:text-orange-500" to= "/" onClick={onButtonClick} ><i className="fa-solid fa-magnifying-glass"></i>Search</Link>
                <Link className="cursor-pointer hover:text-orange-500" to="offer"><i className="fa-solid fa-percent"></i>Offer</Link>
                <Link className="cursor-pointer hover:text-orange-500" to="help"><i className="fa-regular fa-life-ring"></i>Help</Link>  
                <Link className="cursor-pointer hover:text-orange-500" to="signin"><i className="fa-regular fa-user"></i>Sign in</Link>  
                <Link className="cursor-pointer hover:text-orange-500" to="cart"><i className="fa-solid fa-cart-shopping"></i>Cart</Link>  
            </div>

        </div>
    )
}

export default Header