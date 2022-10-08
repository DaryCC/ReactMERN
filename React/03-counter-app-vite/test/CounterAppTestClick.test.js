import {fireEvent, getByTestId, render,screen} from '@testing-library/react';
import {CounterApp} from '../src/CounterApp';
import { Fragment } from 'react';

const valor=100;

describe('Pruebas en <CounterApp />' ,()=>{
  test('debe ser correcto si el snapshot coincide', () => {
    const {container, getByText}=render(<CounterApp value={valor}/>);
    expect(container).toMatchSnapshot();


  });

  test('debe incrementar con el boton +1', () => {

  render(<CounterApp value={valor} />);
    screen.debug();
    fireEvent.click(screen.getByText('+1'));
    screen.debug();
    expect(screen.getByText('101')).toBeTruthy();

  });


  test('debe resetear con click a 100', () => {

    render(<CounterApp value={valor} />);
    screen.debug();
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    screen.debug();
    fireEvent.click(screen.getByRole('button',{ name: 'btn-reset'}));
    screen.debug();
    expect(screen.getByText('100')).toBeTruthy();

  });
});
