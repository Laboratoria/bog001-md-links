const fs = require('fs');
const { getMdFiles, getLinksFiles } = require('./functions/readFile.js');
const validateLinks = require('./functions/validate.js');

// Confirma si el path es válido
const pathExists = (route) => fs.existsSync(route);

/* ---------- MD-Links ---------- */
const mdLinks = (route, { validate }) => {
  if (pathExists(route)) {
    const arrFiles = getMdFiles(route);
    return Promise.all(getLinksFiles(arrFiles))
      .then((arrObjsLinks) => arrObjsLinks.flat()) // Para eliminar arr dentro de arr
      .then((res) => {
        if (validate) {
          return validateLinks(res);
        }
        return res;
      });
    // .catch((e) => { throw e; });
    // .catch((error) => { return Promise.reject(error) })
  }
  throw Error('Verifica el path, ruta no encontrada');
};

// Folder
mdLinks('/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2', { validate: true })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

module.exports = mdLinks;
