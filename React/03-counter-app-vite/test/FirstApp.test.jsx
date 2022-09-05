import {render} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';
import { Fragment } from 'react';


describe('Pruenasd en <FirstApp />' ,()=>{
test('debe de hacer match con el snapshot' , () => {
  const title = 'Hola, soy Goku';
  render(<FirstApp title={title} subtitle={1 + 2 + 3} /> );
  // render( <FirstApp />);
});
});
