let fs = require('fs');

const read = (ruta) => {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

read(__dirname + '/archivo.txt')
  .then((data) => {
    console.log(data.toString());
  })
  .catch((error) => {
    console.log(error);
  });

 
