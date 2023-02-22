import React,{useCallback,useEffect,useState} from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  // const incrementFather = ()=>{
  //   setCounter(counter+1);
  //                       }
const incrementFather=useCallback (
  (incremento) => {
    console.log('setCounter');
    setCounter((c)=>c+incremento);
  },
  [],
);




  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr/>
      <ShowIncrement increment={incrementFather}/>
    </>
  )
}
