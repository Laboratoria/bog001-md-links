/*---------- Aquí se prueban los links pero no funciona si no hay links :( ----------*/
/* const findLinks = (path) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        console.log('No hay links en este archivo :(')
        reject(error)
      } else {
        const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
        const arr = data.match(regularExpression);
       // console.log(arr) (Array de links)
        const links = arr.map((item) => {
          const divideItem  = item.split("](")
          const text = divideItem[0].replace("[", "");
          const href = divideItem[1].replace(")", "");
          return ({ href, text, path });
        });
        //resolve(links) //¿Aquí va?
        console.log(links)
      }
    });
  });
}; */

/*---------- Se prueban los links sin catch y con readFile aqui ----------*/
/* const getLinks = (path) => {
  return new Promise ((res, rej) => {
    fs.readFile(path, "utf-8", (error, data) => {
      const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
      path = resolve(path); // Resolver a path absoluto
      if (data.match(regularExpression)) {
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
}; */

/*---------- Buscar links con then y catch (Función read aparte) ----------*/
/* const getLinks = (path) => {
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
      // reject (console.log(err)) // No me está mostrando el error :)
      // reject (console.error('Hubo un error en la ruta, intenta de nuevo :('))
      reject(new Error('No hay links en este archivo :)' + err))
    });
  });
} */

//console.log(getLinks(absolutePath))
