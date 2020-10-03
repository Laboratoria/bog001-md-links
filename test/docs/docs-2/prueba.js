/* ---------- Buscar links con expresión regular ----------*/
// ¡ESTO ERA ANTES DE LA RECURSIÓN!

/* const getLinks = (userPath) => new Promise((res, rej) => {
  fs.readFile(userPath, 'utf-8', (error, data) => {
    // eslint-disable-next-line no-useless-escape
    const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
    const internalLinks = '#'; // Para identificar links internos
    // eslint-disable-next-line no-param-reassign
    // userPath = resolve(userPath); // Resolver a path absoluto YA NO NECESITO ESTO

    if (error) { // Error en la lectura del archivo
      rej(new Error('Hubo un error en la ruta :('));
    } else if (data.match(regularExpression)) {
      const arr = data.match(regularExpression);

      const links = arr.map((item) => {
        const divideItem = item.split('](');
        const text = divideItem[0].replace('[', '');
        const href = divideItem[1].replace(')', '');
        return ({ href, text, userPath });
      });

      const getLinksWithUrl = links.filter((link) => !link.href.startsWith(internalLinks));
      res(getLinksWithUrl);
    } else {
      rej(new Error('No hay links en este archivo :('));
    }
  });
}); */
