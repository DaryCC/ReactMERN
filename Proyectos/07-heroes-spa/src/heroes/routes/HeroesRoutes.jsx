import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HeroePage,SearchPage,DcPage, MarvelPage  } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>

      <div className='container'>
        <Navbar />

        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />


          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:heroeId' element={<HeroePage />} />


          <Route path='/' element={<Navigate to='/marvel' />} />

        </Routes>
      </div>
    </>
  )
}
