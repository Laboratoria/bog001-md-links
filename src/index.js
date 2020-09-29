// const fs = require('fs')
// const path = require('path');
// const fetch = require('node-fetch');
// const { extname, resolve } = require('path'); // Extensión md, Path absoluto

const getLinks = require('./functions/readFile.js');
const { validateLinks, getStats, getBrokenValues } = require('./functions/options.js');
const { mockLinksInfo, mockLinksWithValidate } = require('../test/docs/mocksArr.js');

/*---------- Ruta absoluta ----------*/
//const toAbsolutePath = (path) => {resolve(path)}

/*---------- Function mdLinks ----------*/
const mdLinks= (path, options) => {
  // 1. ¿Resolver a ruta absoluta?
  // 2. Definir si es archivo o file ++ 3. ¿Es .md?
  // 4. Leer archivo ++ 5. Extraer links
  // 6. Verificar si cumple con alguna de las cuatro condiciones
  //    - Sin options
  //    - Validate
  //    - Stats
  //    - Validate + Stats
}

/*---------- mdLinks whitout options ----------*/
/* function getLinkValues(path) {
  return new Promise ((res, rej) => {
    if (extname(path) === '.md') {
      res(getLinks(path))
    } else {
      rej(new Error('Este archivo no es .md :('))
    }
  });
} */

// Aquí debería consumir la promesa :)
/* getLinkValues('README-TEST.md')
  .then((links) => {
    return validateLinks(links)
  }) */

/*---------- Invocación otras funciones ----------*/
  /* getLinks(userRelativePath)
  .then(res => console.log(res))
  .catch(err => console.log(err))*/

/* validateLinks(mockLinksInfo)
  .then(res => console.log(res))
  .catch(err => console.log(err)) */

// console.log(getStats(mockLinksInfo))

// console.log(getBrokenValues(mockLinksWithValidate))

