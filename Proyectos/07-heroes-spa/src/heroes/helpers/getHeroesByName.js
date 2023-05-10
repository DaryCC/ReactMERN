import { heroes } from "../data/heroes";
import React from 'react';

export const getHeroesByName = (nombre='') => {

  nombre=nombre.toLocaleLowerCase().trim();

  if (nombre.length==0) return [];

  return  heroes.filter(
    heroe => heroe.superhero.toLocaleLowerCase().includes(nombre)
  )
}
