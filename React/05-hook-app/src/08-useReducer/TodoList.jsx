import {TodoItem} from './TodoItem';

export const TodoList = ({todos=[],onDeleteTodo,onToggleTodo}) => {
  return (

    <ul className="list-group">

      {
        todos.map(todo => (

          <TodoItem key={todo.id} todo={todo} handleDeleteTodo={(id)=>onDeleteTodo(id)} onToggleTodo={onToggleTodo} />

        ))
      }
    </ul>
  )
}
