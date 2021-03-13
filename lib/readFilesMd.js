// const fsPromises = require('fs').promises;
const path = require('path');
const fs = require('fs');
const marked = require('marked'); //*--Convertir texto del archivo en texto HTML
const jsdom = require('jsdom');  //*--para crear un DOM
const {JSDOM} = jsdom;
const arrayLinks = [];

//*--Función para leer el contenido de los archivos MD ---*/
const readFilesMd = (filesmd) => {
  filesmd.forEach((file) => {
    const route = path.dirname(file);
    const filesRead = fs.readFileSync(file, 'UTF-8');
    const fileHtml = marked(filesRead);
    const dom = new JSDOM(`<!DOCTYPE html> ${fileHtml}`);
      dom.window.document.querySelectorAll('a').forEach((linkText)=>{
        const href = linkText.getAttribute('href');
        const text = linkText.innerHTML;
        const pathFile = route;
        arrayLinks.push({href, text, pathFile})
      }); 
      
  });
  return arrayLinks;

}

//*--Fin Funciòn para leer el contenido de los archivos MD

module.exports = readFilesMd;



//*--Notas---------
//*--El método getAttribute () devuelve el valor del atributo con el nombre especificado, de un elemento.
//*La <a>etiqueta define un hipervínculo. El href atributo especifica la URL de la página a la que va el enlace: