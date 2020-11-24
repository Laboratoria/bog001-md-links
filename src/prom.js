//Modulo OpenFile para abrir archivos (como promises)

//Importar modulos requeridos
const fs = require("fs");
const convert = require("./openF.js");
const printLinks = require('./print.js');

//Funcion ReadFile
const readFile = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf8', (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

//Llamando a la funcion
const openFile = (route) => {
  readFile(route)
    .then((data) => {
    const listObjects = convert(data, route);
      printLinks(listObjects)
    })
    .catch((error) => {
    console.error(error)
    })
}

openFile("C:/Users/USER/Documents/data/bog001-md-links/readable/folderOfMDFiles/resources.md");

module.exports = openFile;