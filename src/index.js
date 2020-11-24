//MDLinks recibe ruta, opciones y retorna una promesa que resuelve al array de objetos

//Importando modulos
const callOpen = require("./openF.js");
const valid = require("./valid.js");

//Inicio de la funcion MDLinks
const mdlinks = (route, options) => {
  callOpen(route);
  let val = options.v;
  console.log (val);
  if (val === true){
    valid(listObjects)
    .then((data) => {
    console.log(data)})
    .catch((error) => {
    console.error(error)});
  };
};
module.exports = mdlinks;