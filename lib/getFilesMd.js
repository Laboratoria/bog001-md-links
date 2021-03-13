// *--Función para obtener los archivos de un directorio--
const fs = require('fs');
const path = require('path');

//*--Escrita forma de promesa
const getFilesMd = (pathUser) =>{
  return new Promise((resolve,reject)=>{
    fs.promises.readdir(pathUser)
    .then((files)=>{
      let arrayFilesMd = [];
      files.forEach(element => {
        let fileMd = path.join(pathUser, element);
        if(path.extname(element) === '.md' ){
          arrayFilesMd.push(fileMd)
        }
      });
      resolve((arrayFilesMd))   
    })
    .catch((error)=>reject (error))
  });
}

module.exports = getFilesMd;