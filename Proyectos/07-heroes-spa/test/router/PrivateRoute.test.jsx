import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en el <PrivateRoute/>',()=>{

  test('Esto debe de mostrar el children si está autentificado. ',()=>{

    const contextValue = {
      logged: true,
      user:{
        id:'abc',
        name:"Daryberto Canseco",
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PrivateRoute>
          <h1>Ruta privada</h1>
        </PrivateRoute>
      </AuthContext.Provider>
    );

    screen();
    expect(screen.getByText('Ruta privada')).toBeTruthy();
  });

});
