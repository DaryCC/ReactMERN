import React from 'react';
import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types';
// import Hello,{Dary} from './HelloWorldApp';
// import {FirstApp  } from './FirstApp';
import {CounterApp} from './CounterApp';

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp /> */}
    {/* <FirstApp title="Nadia" subtitle={1+2+3}/> */}
    <CounterApp value={12}/>
  </React.StrictMode>
);
