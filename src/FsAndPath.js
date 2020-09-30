const fs = require("fs");
const path = require("path");

const isfileOrDitectory = (PATH) => {
  return new Promise((resolve, reject) => {
    fs.stat(PATH, (err, stat) => {
      if (!err) {
        resolve(stat);
      } else if(err.code === "ENOENT"  )   {
        reject('No existe file or directory');
      }
    });
  });
};
 
 
const isAbsolute = (PATH) => path.resolve(PATH);
const isMd = (PATH) => path.extname(PATH);
const join = (PATH, file) => path.join(PATH, file);

const readDir = (PATH) => {
  return new Promise((resolve, reject) =>{
    fs.readdir(PATH, (err, data) =>{
      if(!err){
        resolve(data)
         
     }else if (err.code === "ENOENT"){
       reject('no existe directorio')
     }
    })
  })
};

  

const fileread = (PATH) => {
  return new Promise((resolve, reject) => {
    fs.readFile(PATH, (err, data) => {
      if (!err) {
        resolve(data.toString());
      } else if(err.code === "ENOENT") {
        reject(' archivo-inexistente.md ');
      }
    });
  });
};

 

module.exports = {
  isfileOrDitectory,
  isAbsolute,
  isMd,
  join,
  readDir,
  fileread
};
