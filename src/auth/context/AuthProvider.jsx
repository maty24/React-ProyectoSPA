import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';

// const initialState = {
//     logged: false,
// }

//para mantener el usuario legeado cuando se produce una recarga
const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );//obtengo el usuario del localstoge

  return {
    logged: !!user,//si existe el usuario esto se cambia a true
    user: user,
  }
}


export const AuthProvider = ({ children }) => {
    
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );//el init es como el iniciador

  const login = ( name = '' ) => {

    const user = { id: 'ABC', name }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify( user ) );//envio el usuario al localstore

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState,

      // Methods
      login,
      logout,
    }}>
        { children }
    </AuthContext.Provider>
  );
}