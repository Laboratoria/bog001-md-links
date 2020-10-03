const fs = require('fs');
const path = require('path');

/* ---------- Convertir path absoluto ----------*/
const getAbsolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// console.log('hola', getAbsolutePath('test/docs/README-TEST.md'));

/* ---------- Confirmar si el path es archivo ----------*/
const itsFile = (route) => fs.lstatSync(route).isFile();

/* const itsFolder = (route) => fs.lstatSync(route).isDirectory(); */

/* console.log('File que es file(true) ', itsFile('test/docs/README-TEST.md'));
console.log('Folder que no es file(false) ', itsFile('test/docs/docs-2'));

console.log('File que no es folder(false) ', itsFolder('test/docs/README-TEST.md'));
console.log('Folder que es folder(true) ', itsFolder('test/docs/docs-2')); */

/* ---------- Lee el directorio ----------*/
const readDirectory = (route) => fs.readdirSync(route);

// console.log ('Leyendo directorio', readDirectory('test/docs'));

/* ---------- Extensión del archivo ----------*/
const fileExt = (route) => path.extname(route);

// console.log('Extensión del archivo', fileExt('test/md-links.spec.js'));

/* ---------- Recursión ----------*/

const getMdFiles = (route) => {
  let arrFiles = [];
  const routeAbsolute = getAbsolutePath(route);
  // Por si es archivo
  if (itsFile(routeAbsolute) === true) {
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
  return arrFiles;
};

/* console.log(getMdFiles('test/')); */

/* ---------- Leer archivo y extraer data ----------*/
const readFile = (file) => fs.readFileSync(file, 'utf-8', (error, data) => {
  if (error) {
    return new Error('Error en la ruta');
  }
  return data;
});

// console.log(readFile('test/docs/docs-2/README-TEST-2.md'));

/* ---------- Obtener links ----------*/

// ¿Esta debería ser una promesa?

const getLinks = (route) => {
  // eslint-disable-next-line no-useless-escape
  const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
  const internalLinks = '#'; // Para identificar links internos
  const arrObjLinks = [];

  getMdFiles(route).forEach((file) => {
    const data = readFile(file);

    // Extraer todos los links y crear objetos
    if (data.match(regularExpression)) {
      const arr = data.match(regularExpression);

      const links = arr.map((item) => {
        const divideItem = item.split('](');
        const text = divideItem[0].replace('[', '');
        const href = divideItem[1].replace(')', '');
        return ({ href, text, file });
      });

      // Eliminar los links internos
      const getLinksWithUrl = links.filter((link) => !link.href.startsWith(internalLinks));
      return arrObjLinks.push(getLinksWithUrl);
    }
    return (new Error('No hay links en este archivo :(')); // No entra aquí :(
  });

  return arrObjLinks.flat(); // Para que me elimine el arr dentro de arr
};

/* console.log(getLinks('test/docs')); */

module.exports = getLinks;
