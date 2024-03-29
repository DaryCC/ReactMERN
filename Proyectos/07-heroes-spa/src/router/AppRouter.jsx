import {Route, Routes} from 'react-router-dom'

import React from 'react';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth/pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path='login' element={

          <PublicRoute>
            <LoginPage />
          </PublicRoute>

        }/>

        {/* <Route path='/\*' element={<HeroesRoutes/>} /> */}


        <Route path='/*' element={

          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>

        }/>

      </Routes>
    </>

  )
}
