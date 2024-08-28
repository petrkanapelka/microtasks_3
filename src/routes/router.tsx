import { createBrowserRouter, Navigate, Outlet, RouteObject, } from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Nike } from "../components/pages/Nike";
import { Puma } from "../components/pages/Puma";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { LoginPage } from "../components/pages/LoginPage";

export const PATH = {
    MAIN: '/',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    ERROR: '/error404',
    PRICES: '/prices',
    MODEL: ':model/:id',
    PROTECTED: '/protected',
    LOGIN: '/login'
} as const

type PrivateRouteType = {
    isAuth: boolean
};
export const PrivateRoute = ({ isAuth }: PrivateRouteType) => {
    return <>
        {isAuth ? <Outlet /> : <Navigate to={'/login'} />}
    </>
};

export const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas />,
    },
    {
        path: PATH.PUMA,
        element: <Puma />,
    },
    {
        path: PATH.NIKE,
        element: <Nike />,
    },
    {
        path: PATH.PRICES,
        element: <Prices />,
    },
    {
        path: PATH.MODEL,
        element: <Model />,
    },
    {
        path: PATH.ERROR,
        element: <Error404 />
    },
    {
        path: PATH.LOGIN,
        element: <LoginPage />
    }
]

export const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        element: <ProtectedPage />
    }
]

export const router = createBrowserRouter([
    {
        path: PATH.MAIN,
        element: <App />,
        errorElement: <Navigate to={PATH.ERROR} />,
        children: [
            {
                element: <PrivateRoute isAuth={false} />,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    },
]);
