import heroes,{owners} from '../data/heroes';
// console.log(heroes);

export const getHeroeById = (id)=>
  heroes.find(heroe =>heroe.id===id );

// console.log(getHeroeById(4));

// const getHeroeByOwnwer = (owner) =>{
//   const buenos = heroes.filter(heroe=>{return heroe.owner === owner;
//                                       })
//   return buenos;
// };
export const getHeroeByOwnwer = (owner) =>  heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroeByOwnwer('DC'));
// console.log(owners[1]);

// export {
//   getHeroeById as default,
// }
