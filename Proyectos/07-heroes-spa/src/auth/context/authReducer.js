// const [state, dispatach] = useReducer(first,second...);

import {types} from '../types/types'

// const initialstate = {

//   logged:false,
//   name:'Dary',
// }

export const authReducer = (state={},action)=>{

  switch(action.type){

      case types.login:

        return {
          ...state,
          logged:true,
          name:action.payload

        };

      case types.logout:
          return {
            logged: false,
            // name:null,

          };

      default:
        return state;

  }
}

