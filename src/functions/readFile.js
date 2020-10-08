const fs = require('fs');
const path = require('path');

// Convertir a path absoluto
const getAbsolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// Confirmar si el path es archivo
const itsFile = (route) => fs.lstatSync(route).isFile();

// Leer el directorio
const readDirectory = (route) => fs.readdirSync(route);

// Extensión del archivo
const fileExt = (route) => path.extname(route);

/* ---------- Recursión para buscar archivos .md ---------- */
const getMdFiles = (route) => {
  let arrFiles = [];
  const routeAbsolute = getAbsolutePath(route);
  if (itsFile(routeAbsolute)) { // Por si es archivo
    if (fileExt(routeAbsolute) === '.md') {
      arrFiles.push(routeAbsolute);
    }
  } else { // Si no, es directorio
    readDirectory(routeAbsolute).forEach((file) => {
      const newRouteFile = `${routeAbsolute}/${file}`;
      const allFiles = getMdFiles(newRouteFile);
      arrFiles = arrFiles.concat(allFiles);
    });
  }
  return arrFiles; // retorna arr con ruta de los .md
};

/* ---------- Obtener links archivo .md ---------- */
const getLinks = (route) => new Promise((res, rej) => {
  fs.readFile(route, 'utf-8', (error, data) => {
    // eslint-disable-next-line no-useless-escape
    const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
    const internalLinks = '#'; // Para identificar links internos

    // eslint-disable-next-line no-param-reassign
    route = path.resolve(route); // ¿Debería ir aquí? ¡Si no está en mdLinks, si!

    if (error) {
      rej(new Error(`${error.code}, verifica el path, ruta no encontrada. Función getLinks`));
    } else if (data.match(regularExpression)) {
      const arr = data.match(regularExpression);

      const links = arr.map((item) => {
        const divideItem = item.split('](');
        const text = divideItem[0].replace('[', ''); // .substring(0, 50); ¿README?
        const href = divideItem[1].replace(')', '');
        return ({ href, text, route });
      });

      const getLinksWithUrl = links.filter((link) => !link.href.startsWith(internalLinks));
      res(getLinksWithUrl);
    } else {
      res({ href: 'No se encontraron links', text: 'No se encontraron links', route });
      // res([]);
    }
  });
});

/* getLinks('/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/vacio.md')
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

/* ---------- Obtener links de array archivos .md ---------- */
const filesPromises = [];

const getLinksFiles = (arrMdFiles) => {
  arrMdFiles.forEach((file) => filesPromises.push(getLinks(file)));
  return filesPromises;
};

module.exports = {
  getMdFiles,
  getLinks,
  getLinksFiles,
};
