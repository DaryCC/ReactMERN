
import { useLayoutEffect } from 'react';
import { types } from '../../../src/auth';
import { authReducer } from '../../../src/auth/context/authReducer';


describe('Pruebas en authReducer',()=>{

  test('Esto debe de retornar el estado por defecto ',()=>{

    const state = authReducer({logged:false},{});
    expect(state).toEqual({logged:false});

  });

  test('Esto debe (login) llamar el login autentificar y establecer el user ', () => {

    const action = {
      type: types.login,
      payload:{
        name:'Juan',
        id:'123',
      }
    }

    const state = authReducer({logged: false}, action);

    expect(state).toEqual({
      logged:true,
      name:action.payload
    })


  })

  test('Esto debe de (logout) borrar el name del usuario y logged en false ', () => {

    const state={
      logged:true,
      user:{id:'123',name:'Juan'},
    }

    const action={
      type:types.logout
    }

    const newState=authReducer(state,action);
    expect(newState).toEqual({logged:false});

  });
});
