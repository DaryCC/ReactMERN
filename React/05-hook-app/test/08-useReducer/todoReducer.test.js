import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer',()=>{

  const initialState = [{
    id:1,
    description:'Demo todo',
    done:false,
  }];

  test('Esto debe de regresar el estado inicial ',()=>{

    const newState = todoReducer(initialState,{});
    expect(newState).toBe(initialState);

  });


  test('Esto debe de agregar un todo ',()=>{

    const action = {
      type:'[TODO] Add Todo',
      payload:{
        id:2,
        description:'Nuevo todo #2',
        done:false
      }
    };

    const newState = todoReducer(initialState,action);
    // console.log(newState);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });


  test('Esto debe de eliminar un TODO ', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
    // expect(newState).toContain(action.payload);
  });


  test('Esto debe de realizar el toggle del todo ', () => {

    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0].done).toBe(true);
  });
});
