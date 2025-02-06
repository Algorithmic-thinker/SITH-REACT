import Logo from '../assets/logo.jpg'


const Header = () =>{
    return(
        <div className="flex justify-between items-center px-8 py-4 shadow-lg">

            <a className="cursor-pointer" href="#">
                <img src={Logo} className="w-10 rounded-md"/>
                <span className='text-2xl font-bold'>Swiggy(LTS)</span>
            </a>

            <div className="flex gap-6">
                <a className="cursor-pointer" href="#"><i className="fa-solid fa-house"></i>Home</a>
                <a className="cursor-pointer" href="#"><i className="fa-solid fa-users"></i>About Us</a>
                <a className="cursor-pointer" href="#"><i className="fa-solid fa-phone"></i>Contact Us</a>
                <a className="cursor-pointer" href="#"><i className="fa-solid fa-cart-shopping"></i>Cart</a>  
            </div>

        </div>
    )
}

export default Header