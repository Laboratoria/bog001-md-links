const fs = require('fs')
const { resolve } = require('path');
const { userAbsolutePath, userRelativePath, userInvalidPath, userWithoutLinksPath } = require('../../test/docs/mocksArr.js')

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
      const internalLinks = "#" // Para identificar links internos
      path = resolve(path); // Resolver a path absoluto

      if (error){ // Error en la lectura del archivo
        rej (new Error('Hubo un error en la ruta :('));
      } else if (data.match(regularExpression)) {
        const arr = data.match(regularExpression);

        const links = arr.map((item) => {
          const divideItem  = item.split("](");
          const text = divideItem[0].replace("[", "");
          const href = divideItem[1].replace(")", "");
          return ({ href, text, path });
        });

        const getLinksWithUrl = links.filter((link) => !link.href.startsWith(internalLinks))
        res (getLinksWithUrl)
      } else {
        rej (new Error('No hay links en este archivo :('));
      }
    });
  });
};

module.exports = getLinks;

