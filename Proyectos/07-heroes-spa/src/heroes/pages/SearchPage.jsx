import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import queString from 'query-string'

import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm'




export const SearchPage = () => {

  const navigate=useNavigate();
  const location=useLocation();

  const {q = ''}=queString.parse(location.search);
  const query = queString.parse(location.search);
  console.log(query);



  const heroes=getHeroesByName(q);
  // console.log(heroes);
  console.log('longitud es: '+q.length);

  const showSearch = (q.length === 0);
  const showError = (q.length >0 ) && heroes.length === 0;

  const {searchText,onInputChange}= useForm({
    searchText:q
  })


  const onSearchSubmit=(event)=>{

    event.preventDefault();
    // console.log(event);
    // console.log({searchText});
    // if (searchText.trim().length <= 1 ) return;

    navigate(`?q=${searchText}`)


  }
  return (
    <>
      <h1 className='animate__animated animate__shakeY'>Buscar</h1>
      <hr/>
      <div className='row'>
          <div className='col-5'>
            <h4>¿Qué quieres buscar?</h4>
            <hr/>
            <form onSubmit={onSearchSubmit}>

              <input
                type='text'
                placeholder='Buscar heroe'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={onInputChange}
              />
              <button  className='btn btn-outline-primary mt-2'>
                Buscar ya!
              </button>

            </form>

          </div>

          <div className='col-7'>
            <h4>Resultados</h4>
            <hr/>




          <div className='alert alert-primary animate__animated animate__fadeIn' style={{ display: showSearch ? '':'none'}}>
              Realizar Búsqueda
            </div>
            <div className='alert alert-danger animate__animated animate__fadeInLeft' style={{display:showError?'':'none'}}>
              No se encuentra ningún heroe con <b>{q}</b>
            </div>




            {/* <HeroCard/> */}
            {
              heroes.map(heroe =>(
                <HeroCard {...heroe} key={heroe.id}/>
              ))

            }

          </div>

      </div>
    </>

  )
}
