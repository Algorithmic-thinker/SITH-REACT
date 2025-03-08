import GooglePlay from '../assets/google-play.png'
import AppStore from '../assets/app-store.png'
import Logo from '../assets/logo.jpg'

const Footer = () =>{
    return(
        <div className='bg-gray-300 mt-20'>
            <hr className='w-1/2 h-0.5 mx-auto bg-slate-950'/>
            <div className="flex md:flex-row flex-col lg:mx-40  xl:mx-52 md:mx-32 gap-5 py-10 flex-wrap">
                <span className='font-bold text-xl'>For better experience,download the Swiggy app now.</span>
                <img src={GooglePlay} className="w-52"/>
                <img src={AppStore} className="w-52"/>
            </div>
            <div className='flex md:flex-row flex-col lg:mx-40  xl:mx-52 md:mx-32 py-10 justify-between gap-2'>
                <div className='flex gap-2'>
                    <img src={Logo} className="max-w-10 max-h-10 rounded"/>
                    <span className='text-2xl font-bold text-orange-500'>Swiggy(LTS)</span>
                </div>
                <div>
                    <ul className='flex flex-col gap-3 '>
                        <li className='font-semibold text-lg'>Company</li>
                        <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Swiggy Genie</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-28'>
                    <ul className='flex flex-col gap-3 '>
                        <li className='font-semibold text-lg'>Contact us</li>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                    <ul className='flex flex-col gap-3 '>
                        <li className='font-semibold text-lg'>Legal</li>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-3 '>
                        <li className='font-semibold text-lg'>Available in:</li>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-16'>
                    <ul className='flex flex-col gap-3 '>
                        <li className='font-semibold text-lg'>Life at Swiggy</li>
                        <li>Explore with Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>
                    <div>
                    <h2 className='font-semibold text-lg'>Life at Swiggy</h2>
                        <ul className='flex gap-3 my-3'>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest"></i></a> 
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer