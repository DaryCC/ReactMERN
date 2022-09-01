import {getHeroeById, getHeroesByOwner} from './../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08',()=>{
  test('getHeroeById', () => {
    const id = 1;
    const HeroeById = getHeroeById(id);
    expect(HeroeById).toEqual(
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      });


  });

  test('getHeroeById debe de retornar undefined si no existe', () => {
    const id = 100;
    const HeroeById = getHeroeById(id);
    // expect(HeroeById).toEqual(undefined);
    expect(HeroeById).toBeFalsy();
  });

  test('getHeroeByOwnwe debe de retornar DC', () => {
    const id = 'DC';
    const DC = [
                  {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                  },
                  {
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                  },
                  {
                    id: 4,
                    name: 'Flash',
                    owner: 'DC'
                  },
                ];
    const HeroeById = getHeroesByOwner(id);
    expect(HeroeById).toEqual(DC);
  });

  test('getHeroeByOwnwe debe de retornar Marvel', () => {
    const id = 'Marvel';
    const HeroeById = getHeroesByOwner(id);
    const Marvel = [
                      {
                        id: 2,
                        name: 'Spiderman',
                        owner: 'Marvel'
                      },
                      {
                        id: 5,
                        name: 'Wolverine',
                        owner: 'Marvel'
                      },
                    ];
    expect(HeroeById).toEqual(Marvel);
  });
});
