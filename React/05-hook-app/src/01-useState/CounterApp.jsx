import React,{useState} from 'react'

const CounterApp = () => {

  // const [{counter1,counter2,counter3}, setCounter] = useState({
  const [state, setCounter] = useState({
    counter1:0,
    counter2:5,
    counter3:10
  });
  const {counter1,counter2,counter3}=state;
  return (
    <>
      <h1>Counter1:{counter1}</h1>
      <h1>Counter2:{counter2}</h1>
      <h1>Counter3:{counter3}</h1>
      <hr/>
      <button onClick={()=>setCounter({
        ...state,
        counter3:counter3 +10,
      })}>+1</button>

    </>
  )
}

export default CounterApp
