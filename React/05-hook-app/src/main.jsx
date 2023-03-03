import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Padre } from './07-tarea-memo/Padre';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
// import  './08-useReducer/intro-reducer'
// import App from './App'
import './index.css';
// import { FormWithSimpleHook } from './02-useEffect/FormWithSimpleHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import {CallBackHook} from './06-memos/CallBackHook'
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <TodoApp/>
  // </React.StrictMode>
)
