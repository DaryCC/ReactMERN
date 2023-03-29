
export const todoReducer = ( initialState = [], action )=>{

  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState,action.payload];
      // throw new Error('action.type = ABC no está implementada');

    case '[TODO] Remove Todo':
      return initialState.filter(algo=> algo.id !== action.payload);

    case '[TODO] Toggle Todo':

    return initialState.map(todo=>{
              if (todo.id=== action.payload){
                return {
                  ...todo,
                  done: !todo.done
                }
              }
              return todo;
            }
            );

      // throw new Error('action.type = ABC no está implementada');

    default:
      return initialState;
  }

}
