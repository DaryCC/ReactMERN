const initialState = [{
  id:1,
  todo:'Piedra del alma',
  done:false,
}];

const todoReducer = (state=initialState,action={})=>{
  if (action.type ==='[TODO] add todo'){
    return [...state,action.payload];
  }
  return state;
}

let todos=todoReducer();

console.log(todoReducer());

const newTodo ={
  id:2,
  todo:"Piedra del poder",
  done:true,
}

const addTodoAction ={
  type:'[TODO] add todo',
  payload:newTodo,
}

todos = todoReducer(todos,addTodoAction);

console.log(todos);
