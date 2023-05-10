import {useReducer } from 'react'
import { AuthContext, authReducer } from '../../auth/context';

const initialState = {
  logged: false,
}

export const AuthProvider = ({children}) => {


 const [authState, dispatch] = useReducer(authReducer,initialState)


  const login = (name='')=>{

    const action = {
      type:types.login,
      payload:{
        id:'ABC',
        name:name,
      }
    }

    dispatch(action);

  }

  const logout =()=>{

    localStorage.removeItem('user');

    const action={
      type:types.logout,
    }
    dispatch(action);

  }



  return (
    <AuthContext.Provider value={{
      ...authState,
      logout,
      login:login
    }} >
      {children}
    </AuthContext.Provider>
  );

}
