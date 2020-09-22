/*---------- Leer archivos (pero ya está abajito) ----------*/
/* const readFile = (path) => {
  const promise = new Promise ((resolve, reject) => {
    fs.readFile (path, 'utf8', (err, data) => {
      if(err) {
        reject('Not valid file');
      } else {
        resolve (data);
      }
    });
  });
  return promise;
} */

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

/*---------- Se prueban los links sin catch y con readFile aparte ----------*/
/* const getLinks = (path) => {
  return new Promise ((res, rej) => {
    fs.readFile(path, "utf-8", (error, data) => {
      const regularExpression = /\[([^\[]+)\](\(.*\))/gm;
      if (data.match(regularExpression)) {
        const arr = data.match(regularExpression);
        //console.log(arr) //(Array de links)
        const links = arr.map((item) => {
          const divideItem  = item.split("](")
          const text = divideItem[0].replace("[", "");
          const href = divideItem[1].replace(")", "");
          return ({ href, text, path });
        });
        res(links) //¿Aquí va?
        console.log(links)
      } else {
        rej (new Error('No hay links en este archivo :('))
      }
    });
  });
}; */

//console.log(getLinks(absolutePath))
