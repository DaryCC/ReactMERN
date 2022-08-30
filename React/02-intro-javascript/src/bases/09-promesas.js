import {getHeroeById,} from './bases/08-imp-exp';
// const promesa = new Promise((resolve,reject)=>{
// setTimeout(() => {
//   console.log('2 segundos despues');
//   const heroe = getHeroeById(2);
//   // console.log(heroe);
//   resolve(heroe);
// }, 3000)
// });

// promesa.then(()=>{
//   console.log('El heroe es:',);
// })
//   .catch((error)=>{
//     console.log('El error: ',error);
//   });
// {
//   id: 1,
//     name: 'Batman',
//       owner: 'DC'
// },

const getHeroeByIdAsync = (id)=>{

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 segundos despues');
      const heroe = getHeroeById(id);
      // if (heroe !== undefined)
      // resolve(heroe);
      // else
      //   reject('Errorsito');
      if (heroe) {
        resolve(heroe);
      }else{
        reject('No se pudo encontrar el héroe.');
      }
    }, 3000)
  });

  return promesa;
};
// getHeroeByIdAsync(2).
//   then(heroe=>console.log('Heroe',heroe)).
//   catch(err => console.warn(err));
getHeroeByIdAsync(8).
  then( console.log).
  catch(console.warn);
