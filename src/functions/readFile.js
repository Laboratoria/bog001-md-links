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
      const blacklist = "#" // Para identificar links internos
      path = resolve(path); // Resolver a path absoluto


      if (error){ // Error en la lectura del archivo
        console.error('Hubo un error en la ruta :(')
      } else if (data.match(regularExpression)) {
        const arr = data.match(regularExpression);

        const links = arr.map((item) => {
          const divideItem  = item.split("](")
          const text = divideItem[0].replace("[", "");
          const href = divideItem[1].replace(")", "");
          return ({ href, text, path });
        });

        const getLinksWithUrl = links.filter((link) => !link.href.startsWith(blacklist))
        res (getLinksWithUrl)
      } else {
        rej (new Error('No hay links en este archivo :('))
      }
    });
  });
};

// Consumir promesa
getLinks(userWithoutLinksPath)
  .then(res => console.log(res))
  .catch(err => console.log(err))

