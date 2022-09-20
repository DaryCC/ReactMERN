import {getByTestId, render} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';
import { Fragment } from 'react';


describe('Pruebas en <FirstApp />' ,()=>{
  test('debe de hacer match con el snapshot' , () => {
    const title = 'Hola, soy Goku';
    const {container, getByText} = render(<FirstApp title={title} subtitle={1 + 2 + 3} /> );
    // render( <FirstApp />);
    // console.log(container);
    // expect(container).toMatchSnapshot();
    // expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

  });


  test('debe de mostrar el título en un h1', () => {
    const title = 'Hola, soy Goku';
    const subtitle = 'Soy sujtítulo';

    const { container, getByText, getByTestId } = render(
      <FirstApp
        title={title}
        subtitle={subtitle}
      />
    );
    // render( <FirstApp />);
    // console.log(container);

    // expect(getByTestId('test-title')).toBeTruthy();
    // expect(getByTestId('test-title').innerHTML).toBe(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

});
