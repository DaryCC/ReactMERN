const activo = true;
const mensaje = (activo) ? 'Activo':'Inactivo';
console.log(mensaje);

const mensaje2 = (activo===true) && 'activo';
console.log(mensaje2);

const mensaje3 = activo && 'activo';
console.log(mensaje3);

