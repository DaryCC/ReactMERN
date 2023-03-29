import {screen,render, getByText} from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodos } from '../../src/hooks/useTodos'

jest.mock( '../../src/hooks/useTodos');


describe('Pruebas en <TodoApp/>',()=>{

  useTodos.mockReturnValue({
    todos:[
      {id:1,description:'todo 1',done:false},
      {id:2, description: 'todo 2', done: true },
    ],
    todosCount:2,
    pendingTodos:1,
    handleNewTodo:jest.fn(),
    handleDeleteTodo:jest.fn(),
    onToggleTodo:jest.fn(),
  });

  test('Esto debe de mostrar el componente correctamente ',()=>{

    render(<TodoApp/>);
    expect(screen.getByText('todo 1')).toBeTruthy();
    expect(screen.getByText('todo 2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();

    console.log(screen.getByRole('textbox').className);
    screen.debug();


  });

});
