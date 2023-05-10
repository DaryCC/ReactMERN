import React from 'react'
import {useCounter} from '../hooks/useCounter'

const CounterWithCustomHook = () => {
  const init=23
  const {counter,increment,decrement,reset}= useCounter(init);

  return (
    <>
    <h1>
      Counter With Hook: {counter}
    </h1>

      <button className="btn btn-primary" onClick={()=>increment(1)}>+1</button>
      <button className="btn btn-reset" onClick={()=>reset(50)}>Reset</button>
      <button className="btn btn-secondary" onClick={()=>decrement(1)}>-1</button>
    </>
  )
}

export default CounterWithCustomHook;
