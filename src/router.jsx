import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element: <Inicio/>
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />
    },
])

