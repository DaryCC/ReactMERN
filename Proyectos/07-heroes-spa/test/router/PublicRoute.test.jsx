import {render,screen} from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';


describe('Pruebas en <PublicRoute/>',()=>{

  test('Esto debe de mostrar el children si está autenticado ',()=>{

    const contextValue={
      logged:false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta pública')).toBeTruthy();
    // screen.debug();

  });


  test('Esto debe de navegar si está autentificado ',()=>{

    const contextValue ={

      logged:true,
      user:{
        name:'Strider',
        id:'ABC123',
      }
    }

        render(
          <AuthContext.Provider value={contextValue}>

            <Routes>

              <Route path='login' element={

                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>

              }/>
              <Route path='marvel' element={<h1>Página Marvel</h1>}/>

            </Routes>
          </AuthContext.Provider>
        );

    expect(screen.getByText('Página Marvel')).toBeTruthy();

  });

});
