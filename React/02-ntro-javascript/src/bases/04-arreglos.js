
// const arreglo= new Array(100);
const arreglo= [1,2,3,4,5,6];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);
// arreglo.push(6);
console.log(arreglo);
let arreglo2 = [...arreglo,5];
let arreglo3 = arreglo2.map(x=>2*x);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
