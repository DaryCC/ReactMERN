import React from 'react';
import { HeroList } from '../components/HeroList';

export const DcPage = () => {
  return (
    <>
      <h1 className='animate__animated animate__headShake'>Dc Comics</h1>
    <hr/>
      <HeroList publisher='DC Comics'/>
    </>
  )
}
