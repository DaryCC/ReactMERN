import {usContext} from './../../src/base-pruebas/06-deses-obj';

describe('Estos test son de 06-deses-ob' ,()=>{
test('Este objeto debe regresar un objeto con otro objeto', () => {
  const claves=123;
  const edads=29;
  const rangos='Capitán';

  const testData = {
    nombreclave: claves,
    anios: edads,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
    }

  const testResult = usContext(testData );
  console.log(testResult);
  expect(testData).toEqual(usContext(testResult));
});
});

