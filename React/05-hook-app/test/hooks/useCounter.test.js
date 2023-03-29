import {act,renderHook} from '@testing-library/react'

import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en el useCounter',()=>{

  test('Esto debe de retornar los valores por defecto ',()=>{

    const {result}=renderHook(()=>useCounter());
    // console.log(result);
    const {counter,decrement,increment,reset}=result.current;
    // console.log(counter);
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  });
  test('Esto debe de retornar el valor  de 100 ',()=>{

    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Esto debe de incrementar el contador ',()=>{

    const { result } = renderHook(() => useCounter(100));
    const { counter,increment } = result.current;

    act(()=>{
      increment();
      increment(2);
    });

    expect( result.current.counter ).toBe(103);


  });

  test('Esto debe de decrementar el contador ', () => {

    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);


  });

  test('Esto debe de resetear el contador ', () => {

    const { result } = renderHook(() => useCounter(100));
    const { reset } = result.current;

    act(() => {
      reset();
    });

    expect(result.current.counter).toBe(20);


  });
});
