import {useState} from 'react';

export const useCounter = (initalValue=10)=> {

  const [counter, setCounter] = useState(initalValue);

  const increment = (value=1)=>{
    setCounter(counter+value);
    // console.log(counter);
  }
  const decrement = (value=1)=>{
    setCounter(counter-value);
  }

  const reset = (init=20)=>{
    // console.log(init);
    // console.log(counter);
    setCounter(init);
    // console.log(counter);
  }
  return {
    // counter:counter,
    counter,
    increment,
    decrement,
    reset,
  }

}
