const check = require("./FsAndPath.js");
const functions = require("./funciones");

const mdLinks = (PATH, options) => {
  return new Promise((resolve) => {
    const pathAbsolute = check.isAbsolute(PATH);
    if (options.validate === true) {
      resolve(functions.validatelink(pathAbsolute));
    } else {
      resolve(functions.searchLinks(pathAbsolute));
    }
  });
   
};

module.exports = {mdLinks};


 