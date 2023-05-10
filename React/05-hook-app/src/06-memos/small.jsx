// import {memo} from 'react'
import React from 'react'

export const Small = React.memo(({ counter }) => {

  console.log('Me volví a dibujar');

  return (
    <small>{counter}</small>
  )
}
)
