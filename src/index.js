const getLinks = require('./functions/readFile.js');
const validate = require('./functions/validate.js');
const mocks = require('../test/docs/mocksArr.js');

/* ---------- Ruta absoluta ----------*/
// const toAbsolutePath = (path) => {resolve(path)}

/* ---------- Function mdLinks ----------*/
const mdLinks = (path, options) => {
  // 1. ¿Resolver a ruta absoluta?
  // 2. Definir si es archivo o file ++ 3. ¿Es .md?
  // 4. Leer archivo ++ 5. Extraer links
  // 6. Verificar si cumple con alguna de las cuatro condiciones
  //    - Sin options
  //    - Validate
  //    - Stats
  //    - Validate + Stats
};

/* ---------- Invocación otras funciones ----------*/
console.log(getLinks('test/docs'));
/* .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

/* validate.validateLinks(mocks.mockLinksInfo)
  .then(res => console.log(res));
  .catch(err => console.log(err)); */

// console.log(getStats(mocks.mockLinksInfo))

// console.log(getBrokenValues(mocks.mockLinksValidate))
