import {createBrowserRouter} from 'react-router'
import App from '../App'
import Body from '../component/Body';
import Corporate from '../component/Corporate';

const appRouter = createBrowserRouter([
    {
        path: "",
        Component: App,
        children:[
            {
                path: "",
                Component: Body
            },
            {
                path: "swiggy-corporate",
                Component: Corporate
            }
        ]
    }
]);

export default appRouter;