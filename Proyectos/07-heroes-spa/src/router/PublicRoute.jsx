import React, { useContext } from 'react';
import { AuthContext } from '../auth'
import { HeroesRoutes } from '../heroes';

export const PublicRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);

  return (logged)
    ? <HeroesRoutes/>
    : children;


}
