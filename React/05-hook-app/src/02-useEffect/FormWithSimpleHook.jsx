import React from 'react';
import { useForm } from '../hooks/useForm';




export const  FormWithSimpleHook= () => {

  const {onInputChange,formState,onResetForm}= useForm(
    {
      username: "",
      email: "",
      password:''
    });
  // console.log(formState);
  const {username,email,password}= formState;


  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr/>
      <input
      type="text"
      className="form-control"
      placeholder="Username"
      name="username"
        onChange={onInputChange}
        value={username}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="dary.cc@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}

