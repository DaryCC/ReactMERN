import React,{useEffect, useState} from 'react';
import { Message } from './Message';


export const SimpleForm = () => {
  const [formState, setFormState] = useState({

    username:"dary",
    email: "darkshadow@hotmail.com"
  });

  const {username,email}=formState;

  const onInputChange =({target})=>{

    const {name,value}=target;
    // console.log({ name,value});

    setFormState({
      ...formState,
      [name]:value
    });
  };

  useEffect(()=>{
    // console.log('useEffect called');
  },[]);
  // solo cambia una vez, se renderiza una vez--> []

  useEffect(() => {
    // console.log('formState changed');
  }, [formState]);
// solo cambia cuando se cambia el formulario

  useEffect(() => {
    // console.log('email changed');
  }, [email]);
// solo cambia cuando se cambia el campo del correo




  return (
    <>
      <h1>Formulario Simple</h1>
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

      {username==='dary' && <Message/>}

    </>
  )
}

