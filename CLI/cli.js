//Interfaz de usuario

//Importando paquetes necesarios
const chalk = require ('chalk');
const figlet = require ('figlet');
const inquirer = require ('inquirer');

//Mensaje de bienvenida
module.exports = () => {
  message = 'mdlinks (path, options)?: ';
  console.log(message);
  let mdlargs = process.argv.slice(2); //array de argumentos
  let val = false;
  let sta = false;
//asignando la ruta al primer elemento del array
    let route = mdlargs[2];
//buscando las opciones en el array de argumentos
    let foundV = mdlargs.find(item => item === '-v');
    let foundS = mdlargs.find(item => item === '-s');
//enrutando con if...else
    if (foundV){val = true}
    if (foundS){sta = true}
    console.log(mdlargs);
    console.log(route);
    console.log('validate?: ', val, 'statistics?: ', sta)
    let ans = [route, val, sta];
    return ans;
}

