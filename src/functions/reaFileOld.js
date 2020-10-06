const fs = require('fs');
const path = require('path');

/* ---------- Leer archivo y extraer data ----------*/
const readFile = (file) => fs.readFileSync(file, 'utf-8', (error, data) => {
  if (error) {
    return new Error('Error en la ruta'); // Error: error en la ruta
  }
  return data;
});

/* console.log(readFile('test/docs/docs-2/EADME-TEST-2.md')); */
/* ---------- Obtener links de files/directorios ----------*/

// ¿Esta debería ser una promesa?
// getLinks solo saca los links de un archivo, cuando sea directorio si puedo hacer forEach
// getLinks recibe la data del archivo leído

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
    return (new Error('No hay links en este archivo :('));
    // No entra aquí :( // Error: por si no hay links
  });

  return arrObjLinks.flat(); // Para que me elimine el arr dentro de arr
};
