import GooglePlay from '../assets/google-play.png'
import AppStore from '../assets/app-store.png'

const Footer = () =>{
    return(
        <div className='bg-gray-300 mt-20'>
            <hr className='w-1/2 h-0.5 mx-auto bg-slate-950'/>
            <div className="flex mx-52 gap-5 py-10">
                <span className='font-bold text-xl'>For better experience,download the Swiggy app now.</span>
                <img src={GooglePlay} className="w-52"/>
                <img src={AppStore} className="w-52"/>
            </div>
            <div className='flex mx-52 py-10 justify-between'>
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
                <div>
                    <ul className='flex flex-col gap-3 '>
                        <li className='font-semibold text-lg'>Contact us</li>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
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
                <div>
                    <ul className='flex flex-col gap-3 '>
                        <li className='font-semibold text-lg'>Life at Swiggy</li>
                        <li>Explore with Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer