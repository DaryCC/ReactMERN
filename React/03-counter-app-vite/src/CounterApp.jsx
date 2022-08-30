import React from 'react';
import ReactDOM from 'react-dom/client';
import {fragment} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value})=>{
  console.log(value);
  return (
    <>
   <h1>CounterApp</h1>
   <h2>{value}</h2>
    </>
  );
};

CounterApp.propType = {
  value: PropTypes.number.isRequired,
}

CounterApp.defaultProps={
  value:10,
};
