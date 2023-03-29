import React,{useContext} from 'react';
import { UserContext } from './context/UserContext';


export const LoginPage = () => {

  const {user,setUser}=useContext(UserContext);
  // console.log(algo);

  return (
    <>
    <h1>Login Page</h1>
    <hr/>
      <pre aria-label="pre">
        {JSON.stringify(user,null,3)}
      </pre>

      <button
        className='button-primary'
        onClick={()=>setUser({id:123, name: 'Dary', email:'juan@google.com'})}
      >
      Establecer usuario
      </button>
    </>
          )
}
