import React,{useState} from 'react';
// import ReactDOM from 'react-dom/client';
// import {fragment} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value})=>{
  // console.log(value);
  const [counter, setCounter] = useState(value);

  const incrementaContador=()=> {
    return setCounter(()=> counter+1);
  }
  const decrementarContador =()=> {
    setCounter(counter-1);
  }
  const resetCounter = ()=>{
    setCounter(value);
  };

  return (
    <>
   <h1>CounterApp</h1>
   <h2>{counter}</h2>
      <button onClick={incrementaContador} name=''>+1</button>
      <button onClick={decrementarContador}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
};

CounterApp.propType = {
  value: PropTypes.number.isRequired,
}

CounterApp.defaultProps={
  value:10,
};
