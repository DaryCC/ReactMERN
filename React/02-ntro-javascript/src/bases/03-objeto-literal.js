const persona = {
  nombre: 'Tony',
  apellido: 'Montana',
  edad: 45,
  direccion: {
    ciudad: 'New york',
    zip: 71222,
  }
};

//clon del objeto
const persona2 = {...persona};
persona2.nombre = 'Nadia';

console.log(persona);
console.log(persona2);
