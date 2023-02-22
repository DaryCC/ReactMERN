import React from 'react';

import {useCounter} from '../hooks/useCounter'
import {Small} from './small'

export const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);



  return (
    <>
      <h1>Counter: <Small counter={counter}/></h1>
      <hr/>

      <button onClick={()=>increment( )}
              className="btn btn-primary">
        +1
      </button>
    </>
  )
}
