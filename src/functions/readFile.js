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

/* ---------- Leer archivo y extraer data ---------- */
/* const readFile = (route) => new Promise((resolve, reject) => {
  fs.readFile(route, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Error en la ruta'));
    }
    resolve(data);
  });
}); */

/* readFile('test/docs/docs-2/README-TEST-2.md')
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

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
  return arrFiles; // retorna array con ruta de los archivos .md
};

// console.log(getMdFiles('test/docs/docs-2/docs-3'));

/* ---------- Obtener links archivo .md ---------- */
const getLinks = (route) => new Promise((res, rej) => {
  fs.readFile(route, 'utf-8', (error, data) => {
    // eslint-disable-next-line no-useless-escape
    const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
    const internalLinks = '#'; // Para identificar links internos

    // eslint-disable-next-line no-param-reassign
    route = path.resolve(route); // Resolver a path absoluto ¿Debería ir aquí?

    if (error) { // Error en la lectura del archivo
      rej(new Error('Hubo un error en la ruta :('));
    } else if (data.match(regularExpression)) {
      const arr = data.match(regularExpression);

      const links = arr.map((item) => {
        const divideItem = item.split('](');
        const text = divideItem[0].replace('[', ''); // .substring(0, 50); README??
        const href = divideItem[1].replace(')', '');
        return ({ href, text, route });
      });

      const getLinksWithUrl = links.filter((link) => !link.href.startsWith(internalLinks));
      res(getLinksWithUrl);
    } else {
      res([]); // rej(new Error('No hay links en este archivo :(')); AQUÍ QUÉ?? JAJAJA
    }
  });
});

/* ---------- Obtener links de array archivos .md ---------- */
const filesPromises = [];

const getLinksFiles = (arrMdFiles) => {
  arrMdFiles.forEach((file) => filesPromises.push(getLinks(file)));
  return filesPromises;
};

// console.log(getLinksFiles(arrFiles));

module.exports = {
  getMdFiles,
  getLinks,
  getLinksFiles,
};
