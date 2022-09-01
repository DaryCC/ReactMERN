import {getSaludo} from '../../src/base-pruebas/02-template-string';
describe('Pruebas en 02-template-sttring' ,()=>{
  test('getSaludo debe retornar: Hola Dary', () => {
    const name='Dary';
    const saludo = getSaludo(name);

    expect(saludo).toBe(`Hola ${name}`);
  });

});
