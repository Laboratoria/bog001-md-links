const {getLinks} = require('./lib/getLinks.js');
const validateLinks = require('./lib/validateLinks');
const fs = require('fs');

  const mdLinks = (pathUser, options = {}) => {
    return new Promise((resolve, reject) => {
      getLinks(pathUser)
      .then((links)=>{
        if (options.validate) {
          resolve(validateLinks(links));
        }
        else
          resolve(links);
      })
      .catch((err)=>{
        console.log(err.message);
      });
    })
}

//Prueba para ingreso de ruta y ejecutar la función mdLinks
// mdLinks(process.argv[2])
//   .then((resp) => console.log(resp));

module.exports = mdLinks;

