
import {screen,render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Pruebas en <MainApp />', () => {


  test('debe de mostrar el HomePage', () => {

    render(
      <MemoryRouter>
        <MainApp/>
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeTruthy();
    // screen.debug();

  })





  test('debe de mostrar el LoginPage', () => {

    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeTruthy();
    screen.debug();

  })




})



