import React,{useState,useMemo} from 'react';

import { useCounter } from '../hooks/useCounter'
import { Small } from './small'

const HeavyStuff = (iterationNumber=100)=>{
  for (let i=0;i<iterationNumber;i++){
    console.log('ahi vamos...');
  }
  return `${iterationNumber} iteraciones hechas.`
}


export const MemoHook = () => {

  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const storedValue = useMemo(()=>HeavyStuff(counter), [counter]);


  return (
    <>
      <h1>Counter: <Small counter={counter} /></h1>
      <hr />
      <h4>{storedValue}</h4>
      <button onClick={() => increment()}
        className="btn btn-primary">
        +1
      </button>

      <button
        className='btn btn-outline-primary'
        onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
