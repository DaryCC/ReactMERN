import { types } from "../../../src/auth/types/types";

describe('Pruebas en Types.js',()=>{

  test('Esto debe de regresar estos types ',()=>{

    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });

});
