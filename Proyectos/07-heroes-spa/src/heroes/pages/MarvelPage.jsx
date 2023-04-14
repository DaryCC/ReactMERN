import React from 'react';
import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
  return (
    <>

      <h1 className='animate__animated animate__headShake'>Marvel Comics</h1>
    <hr/>
     <HeroList publisher='Marvel Comics'/>
    </>
  )
}
