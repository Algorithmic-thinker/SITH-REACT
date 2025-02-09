import Logo from '../assets/logo.jpg'


const Header = () =>{
    return(
        <div className="flex justify-around items-center px-8 py-4 shadow-lg">

            <a className="flex gap-14 cursor-pointer items-center" href="#">
                <img src={Logo} className="w-10 rounded-md"/>
                <p className='underline underline-offset-8 font-semibold'>Other <i className="fa-solid fa-chevron-down text-orange-500"></i></p>
            </a>

            <div className="flex gap-14">
                <a className="cursor-pointer hover:text-orange-500" href="#"><i className="fa-solid fa-laptop"></i> Swiggy corporate</a>
                <a className="cursor-pointer hover:text-orange-500" href="#"><i className="fa-solid fa-magnifying-glass"></i>Search</a>
                <a className="cursor-pointer hover:text-orange-500" href="#"><i className="fa-solid fa-percent"></i>Offer</a>
                <a className="cursor-pointer hover:text-orange-500" href="#"><i className="fa-regular fa-life-ring"></i>Help</a>  
                <a className="cursor-pointer hover:text-orange-500" href="#"><i className="fa-regular fa-user"></i>Sign in</a>  
                <a className="cursor-pointer hover:text-orange-500" href="#"><i className="fa-solid fa-cart-shopping"></i>Cart</a>  
            </div>

        </div>
    )
}

export default Header