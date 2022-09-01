import retornoarreglo, { retornaArreglo } from './../../src/base-pruebas/07-deses-arr'

describe('Pruebas en 07-deses-arr' ,()=>{
  test('debe retornar un string y un numero', () => {
    const retorno = retornaArreglo();
    const datosTest = ['ABC', 123];
    const [a,b] = retornaArreglo();

    // console.log(retorno);
    expect(a).toBe('ABC');
    expect(b).toBe(123);

    expect(retorno).toEqual(['ABC', 123]);


});
});
