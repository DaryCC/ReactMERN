import {getImagen} from './../../src/base-pruebas/11-async-await';
describe('11-asyn-await' ,()=>{
test('getImagen debe de retornar un error si no tenemos la api key' , async () => {

  const resp = await getImagen();
  // console.log(resp);
  expect(resp).toBe('no se encontró la imagen');

});
});


