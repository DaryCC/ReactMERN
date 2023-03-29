import {fireEvent, render,screen} from '@testing-library/react'

import {MultipleCustomHooks} from '../../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../../src/hooks';


jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter:1,
    increment:mockIncrement,
  });

  beforeEach(()=>{
    jest.clearAllMocks();
  });





  test('Esto debe de mostrar el componente por defecto ',()=>{

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })


    render(<MultipleCustomHooks/>);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText('Quotes'));

    const nextButton = screen.getByRole('button',{name:'Siguiente frase'});
    expect(nextButton.disabled).toBeTruthy();

    // screen.debug();
  });





  test('Debe de mostrar un quote', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Dary', quote: 'Hola mundo Dary' }, { author: 'Nadia', quote: 'Hola mundo Nadia' }],
      isLoading:false,
      hasError:null
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button',{name:'Siguiente frase'});
    expect(nextButton.disabled).toBeFalsy();
    // screen.debug();
  });




  test('Debe de llamar la función de incrementar', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Dary', quote: 'Hola mundo Dary'}, { author: 'Nadia', quote: 'Hola mundo Nadia' } ],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Siguiente frase' });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
    // screen.debug();
  });



})
