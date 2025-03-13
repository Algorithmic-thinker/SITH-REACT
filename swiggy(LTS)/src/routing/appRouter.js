import {createBrowserRouter} from 'react-router'
import App from '../App.jsx'
import Body from '../component/Body.jsx';
import Corporate from '../component/Corporate.jsx';
import Help from '../component/Help.jsx'
import Offer from '../component/Offer.jsx'
import Cart from '../component/Cart.jsx'
import SignIn from '../component/SignIn.jsx'
import ErrorPage from '../component/ErrorPage.jsx'
import RestaurantMenu from '../component/RestaurantMenu.jsx'

const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children:[
            {
                path: "",
                Component: Body
            },
            {
                path: "swiggy-corporate",
                Component: Corporate
            },
            {
                path: "offer",
                Component: Offer,
            },
            {
                path:"help",
                Component: Help,
            },
            {
                path: "cart",
                Component: Cart
            },
            {
                path:"signin",
                Component: SignIn
            },
            {
                path:"menu/:name/:id",
                Component: RestaurantMenu
            }

        ],
        ErrorBoundary: ErrorPage,
    }
]);

export default appRouter;