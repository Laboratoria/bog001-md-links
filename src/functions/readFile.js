const fs = require('fs')
const { extname, resolve } = require('path');

// Paths
const userAbsolutePath = '/Users/Ana/Desktop/bog001-md-links/src/README-TEST.md';
const userRelativePath = 'src/README-TEST.md';
const userInvalidPath = '/Users/Ana/Desktop/bog001-md-links/package.json';
const userWithoutLinksPath = '/Users/Ana/Desktop/bog001-md-links/src/README-TEST-NOLINKS.md';

/*---------- Leer archivo ----------*/
/* const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(console.error('Hubo un error en la ruta, intenta de nuevo :('))
      }
      resolve(data);
    })
  });
}; */

/*---------- Buscar links con expresión regular ----------*/
const getLinks = (path) => {
  return new Promise ((res, rej) => {
    fs.readFile(path, "utf-8", (error, data) => {
      const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
      path = resolve(path); // Resolver a path absoluto

      if (error){
        console.error('Hubo un error en la ruta :(')
      } else if (data.match(regularExpression)) {
        const arr = data.match(regularExpression);
        //console.log(arr) //(Array de links)
        const links = arr.map((item) => {
          const divideItem  = item.split("](")
          const text = divideItem[0].replace("[", "");
          const href = divideItem[1].replace(")", "");
          return ({ href, text, path });
        });
        res (links) //¿Aquí va?
        console.log(links)
      } else {
        rej (new Error('No hay links en este archivo :('))
      }
    });
  });
};

console.log(getLinks(userRelativePath))
