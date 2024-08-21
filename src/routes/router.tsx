import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas, adidasArr } from "../components/pages/Adidas";
import { Nike } from "../components/pages/Nike";
import { Puma } from "../components/pages/Puma";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/Model";

export const PATH = {
    MAIN: '/',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    ERROR: '/error404',
    PRICES: '/prices',
    MODEL: ':model/:id'
} as const

export const router = createBrowserRouter([
    {
        path: PATH.MAIN,
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas />,
                errorElement: <Error404 />,
            },
            {
                path: PATH.PUMA,
                element: <Puma />,
                errorElement: <Error404 />
            },
            {
                path: PATH.NIKE,
                element: <Nike />,
                errorElement: <Error404 />
            },
            {
                path: PATH.PRICES,
                element: <Prices />,
                errorElement: <Error404 />
            },
            {
                path: PATH.MODEL,
                element: <Model />
            }
        ]
    },
]);