import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
// import { todoReducer } from './todoReducer';
import {useTodos} from '../hooks/useTodos'


export const TodoApp = () => {

  const { todos, todosCount,pendingTodos,handleNewTodo, handleDeleteTodo, onToggleTodo } = useTodos();



  return (
    <>
      <h1>Tareas: {todosCount},<small>Pendientes: {pendingTodos}</small></h1>
      <hr/>
      <div className="row">
        <div className="col-7">

          <TodoList todos={todos} onDeleteTodo={(id)=>handleDeleteTodo(id)} onToggleTodo={onToggleTodo}/>

        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr/>



          <TodoAdd onNewTodo={todo=>handleNewTodo(todo) } todo={todos}/>



        </div>
      </div>
    </>
  )
}
