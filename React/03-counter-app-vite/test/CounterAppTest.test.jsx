import {getByTestId, render,screen} from '@testing-library/react';
import {CounterApp} from '../src/CounterApp';
import { Fragment } from 'react';

const valor=100;

describe('Pruebas en <CounterApp />' ,()=>{
  test('debe ser correcto si el snapshot coincide', () => {
    const {container, getByText}=render(<CounterApp value={valor}/>);
    expect(container).toMatchSnapshot();


  });

  test('debe mostrar el valor inicial 100', () => {

    const { container, getByText } = render(<CounterApp value={valor} />);
    const h2= container.querySelector('h2');
    expect(h2.innerHTML).toContain('100');
  });
});
