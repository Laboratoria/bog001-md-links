const fs = require('fs');
const path = require('path');
const { getMdFiles, getLinksFiles, getLinks } = require('./functions/readFile.js');
const validateLinks = require('./functions/validate.js');
const mocks = require('../test/docs/mocksArr.js');

// Convertir a path absoluto
const getAbsolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// Confirmar si el path es archivo / directorio
const itsFile = (route) => fs.lstatSync(route).isFile();
const itsFolder = (route) => fs.lstatSync(route).isDirectory();

/* ---------- Confirma si el path es válido ---------- */
const pathExists = (route) => fs.existsSync(route);

/* ---------- MD-Links ---------- */
const mdLinks = (route, { validate }) => {
  if (pathExists(route)) {
    const arrFiles = getMdFiles(route);
    // console.log(arrFiles);
    return Promise.all(getLinksFiles(arrFiles))
      .then((arrObjsLinks) => arrObjsLinks.flat()) // Para que elimine el arr dentro de arr
      .then((res) => {
        if (validate) {
          return validateLinks(res);
        }
        return res;
      })
      .catch(() => new Error('No hay links en este archivo :('));
  }
  throw Error('Verifica el path, ruta no encontrada');
};

// Folder
mdLinks('/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/READM-TEST-2.md', { validate: true })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

/* ---------- MD-Links 2 ---------- */
const mdLinks2 = (route, { validate }) => {
  const absoluteRoute = getAbsolutePath(route);

  if (itsFile(absoluteRoute)) { // Faltaría comprobar el .md
    return getLinks(absoluteRoute)
      .then((res) => {
        if (validate) {
          return validateLinks(res);
        }
        return res;
      })
      .catch((err) => {
        throw err;
      });
  }

  throw Error('Falló, no sé por qué.. Seguro por ruta inválida');
};

// File
/* mdLinks2('test/docs/docs-2/docs-3/oootraPruebita.md', { validate: true })
  .then((res) => console.log(res))
  .catch((error) => console.error(error)); */

/* ---------- Invocación otras funciones ----------*/
/* getLinks('test/docs/docs-2/README-TEST-2.md')
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

validateLinks(mocks.mockLinksInfo)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// console.log(getStats(mocks.mockLinksInfo))

// console.log(getBrokenValues(mocks.mockLinksValidate))
