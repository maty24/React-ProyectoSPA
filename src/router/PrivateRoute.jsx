import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {//el children es donde trae todos los componenetes de private routes

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();//esto para volver donde dejamos la app al logout
    
    const lastPath = pathname + search;//esto es la suma de las para hacer la ruta
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? children//si esta autenticado me trae todo los componentes
        : <Navigate to="/login" />//si no esta logeado me retorna al login
}