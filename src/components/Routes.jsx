import App from "../App";
import Contact from "./Contact";
import Calendar from "./Calendar";
import Login from "./Login";

const routes = [
    {path: '/', element: <App/>},
    {path: '/contact', element:<Contact/>},
    {path: '/calendar', element:<Calendar/>},
    {path: '/login', element:<Login/>},
    {path: '*', element: <h1>Not Found</h1>},

]

export default routes;