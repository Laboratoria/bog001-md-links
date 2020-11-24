//args: Funcion para leer los argumentos CLI. Retorna un array de argumentos.
//cli: Funcion para organizar los argumentos. Llama a la función mdlinks (route, options)

//Importar modulos
const path = require("path");
const mdlinks = require("./index.js");

//Inicio: Funcion args
const args = () => {
//generar un array a partir de los argumentos CLI
  let mdlargs = process.argv.slice(2);
  let sta = false;
  let val = false;
  let options = {
    "s": sta,
    "v": val,
  };
  let cliroute = mdlargs[0];
  let foundS = mdlargs.find((item) => item === "-s");
  let foundV = mdlargs.find((item) => item === "-v");
  if (foundS) { sta = true };
  if (foundV) { val = true };
  let ans = [cliroute, options];
  return ans;
};

args();

const cli = () => {
  let read = args();
  let cliroute = read[0];
  let options = read[1];
//Inicio: Ruta absoluta o relativa
  const isAbs = path.isAbsolute(cliroute);
    if (isAbs === false) {
      route = path.resolve(cliroute);
    } else {
      route = cliroute;
    }
//Inicio: validacion del tipo de archivo
  const extFile = path.extname(route);
    switch (extFile) {
      case ".md":
        mdlinks(route, options)
          // .then((data) => {
          //   console.log(data)})
          // .catch((error) => {
          //   console.log(error)});
        break;
      case "":
        console.log("ruta conduce a directorio");
        args();
        break;
      default:
        console.log("archivo no soportado");
        args();
        break;
    };
}

cli();

module.exports = cli;