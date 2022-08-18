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
// const {nombre, apellido, direccion, } = persona;
// console.log(nombre);
// console.log(apellido);
// console.log(direccion);

//sin destructurar
const retorna_persona = (persona) => {

  const { nombre, apellido, direccion, } = persona;
  console.log(nombre,apellido,direccion+'de la fn');

}
//con desestructoración
const retornapersona = ({nombre,edad,latlng= {lat:12,lng:34}}) => {

  // console.log(nombre ,edad+' argumento desestructurada',rango);
  return {
    nombreclave:nombre,
    anios:edad,
    latlng,
  }
}

retorna_persona(persona);

const {anios,nombreclave} =retornapersona(persona);
console.log(anios,nombreclave);
const {latlng,latlng:{lat,lng}}= retornapersona(persona);
console.log(latlng);
console.log(lat,lng);
