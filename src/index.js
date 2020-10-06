const fs = require('fs');
const { getMdFiles, getLinksFiles } = require('./functions/readFile.js');
const validateLinks = require('./functions/validate.js');
/* const mocks = require('../test/docs/mocksArr.js'); */

/* ---------- Confirma si el path es válido ----------*/
const pathExists = (route) => fs.existsSync(route);

/* ---------- Function mdLinks ----------*/
const mdLinks = (path, { validate }) => {
  if (pathExists(path)) {
    const arrFiles = getMdFiles(path);
    console.log(arrFiles);
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
  throw Error('Hubo un error en la ruta :(');
};

// FOLDER
/* mdLinks('test/docs/docs-2/docs-3', { validate: true })
  .then((res) => console.log(res))
  .catch((error) => console.error(error)); */

// FILE
mdLinks('test/docs/docs-2/docs-3/oootraPruebita.md', { validate: true })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

/* ---------- Invocación otras funciones ----------*/
/* getLinks('test/docs/docs-2/README-TEST-2.md')
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

/* validate.validateLinks(mocks.mockLinksInfo)
  .then(res => console.log(res));
  .catch(err => console.log(err)); */

// console.log(getStats(mocks.mockLinksInfo))

// console.log(getBrokenValues(mocks.mockLinksValidate))
