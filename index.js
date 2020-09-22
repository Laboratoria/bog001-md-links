const fs = require('fs');
const { extname, resolve } = require('path');

// Paths para probar
const userAbsolutePath = '/Users/Ana/Desktop/bog001-md-links/README-TEST.md';
const userRelativePath = 'README-TEST.md';
const userInvalidPath = '/Users/Ana/Desktop/bog001-md-links/package.json';
const userWithoutLinksPath = '/Users/Ana/Desktop/bog001-md-links/README-TEST-NOLINKS.md';

/*---------- Ruta absoluta ----------*/
//const toAbsolutePath = (path) => {resolve(path)}

/*---------- Leer archivo ----------*/
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(console.error('Hubo un error en la ruta, intenta de nuevo :('))
      }
      resolve(data);
    })
  });
};

/*---------- Buscar links con expresión regular ----------*/
const getLinks = (path) => {
  return new Promise ((resol, reject) => {
    readFile(path).then((res) => {
      const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
      path = resolve(path); // Resolver a path absoluto

      if (res.match(regularExpression)) {
        const arr = res.match(regularExpression);
        //console.log(arr) // Array de links
        const links = arr.map((item) => {
          const divideItem  = item.split("](")
          const text = divideItem[0].replace("[", "");
          const href = divideItem[1].replace(")", "");
          return ({ href, text, path });
        });
        resol (links) // ¿Aquí va?
        console.log(links)
      }
    }).catch((err) => {
      reject (console.log(err)) // No me está mostrando el error :)
    });
  });
}

/* console.log(getLinks('/Users/Ana/Desktop/bog001-md-links/README-TEST-NOLINKS.md')) */

/*---------- mdLinks sin options ----------*/
function getLinkValues(path) {
  return new Promise ((res, rej) => {
    if (extname(path) === '.md') {
      res(getLinks(path))
    } else {
      rej(new Error('Este archivo no es .md :('))
    }
  });
}

console.log(getLinkValues(userRelativePath));

/*---------- Function mdLinks ----------*/
/* const mdLinks= (path, options) => {

} */
