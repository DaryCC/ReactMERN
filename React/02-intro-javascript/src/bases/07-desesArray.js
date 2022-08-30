const personajes= ['goku','vegeta','trunks'];
const [goku,perro]= personajes;
console.log(goku,perro);
const [, ,trunks ]= personajes;
console.log(trunks);

const datos=()=>['Nadia',12];
const [nombre,cp] = datos();
console.log(nombre,cp);

const UseState = (valor)=>{
  return [valor,()=>{console.log('Hola mundo')}];
}
const [gurl,hola]= UseState('Nadia');
console.log(gurl);
hola();
