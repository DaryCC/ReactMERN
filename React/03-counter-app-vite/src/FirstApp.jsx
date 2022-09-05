import {Fragment} from 'react';
import PropTypes from 'prop-types';

const mensaje='Hola Nadia.';

const newMessageFunction =()=>{
  return 'Amo a los gatitos.';
};

export const FirstApp = ({name,title,subtitle}) => {
  // console.log(props);
  if (!title){
    throw new error ('El title no existe');
  }

  return (
    <>
      <h1>{title} </h1>
      <p>Propiedad subtítulo: {subtitle}</p>
      <ul >
        <li>{newMessageFunction()}</li>
        <li>{mensaje}</li>
        <li>{name}</li>
        <li>La resta es {12-12}</li>
        <li>Negativo {12-15}</li>
      </ul>
    </>
  )
}


FirstApp.propTypes = {
  title:PropTypes.string.isRequired,
  subtitle:PropTypes.number,

};

FirstApp.defaultProps = {
  // title: 'Títuto default',
  subtitle: 666,
  name: 'Nadia Barriga',
}
