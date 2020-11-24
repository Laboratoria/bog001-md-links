//Módulo para abrir carpetas y encontrar archivos *.md

//Importando todos los módulos requeridos
const readdirp = require('chalk');
const fs = require('fs');
const showdown = require('showdown');
const convert = require('./openF.js');

//Método readFile para obtener el contenido del archivo
const openD = (route) => {
  fs.readdir(route, 'utf-8', (error, data) => {
    if (error) {
      console.log('an error has occurred');
      console.log(error.stack);
    } else {
      convert(data);
    };
  });
};