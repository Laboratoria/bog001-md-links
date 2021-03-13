// const readFilesMd = require('./readFilesMd.js');
const { resolve } = require('path');
const path = require('path');
const fs = require('fs');
const marked = require('marked'); // Convertir texto del archivo en texto HTML
const jsdom = require('jsdom');  // para crear un DOM
const { JSDOM } = jsdom;

let arrayFiles = [];

// Función Para validar la ruta y convertirla en absoluta
const validateRoute = ((pathUser) => {
    if (fs.existsSync(pathUser)) {
        if (!path.isAbsolute(pathUser)) {
            const pathResolved = resolve(pathUser);
            return pathResolved;
        }
    }
});


// Función getFiles para obtener los archivos md con recursión
const getFiles = (pathAbsolute) => {
    const fileType = fs.statSync(pathAbsolute);
    if (fileType.isFile()) {
        if (path.extname(pathAbsolute) == '.md') {
            arrayFiles.push(pathAbsolute);
            return arrayFiles;
        }
    }
    if (fileType.isDirectory()) {
        const readDirectory = fs.readdirSync(pathAbsolute);
        readDirectory.forEach((element) => {
            let file = path.join(pathAbsolute, element);
            return getFiles(file);
        });
    }
    return arrayFiles;
}


const arrayLinks = [];

// Función para leer el contenido de los archivos MD y obtener los links
const readFilesMd = (filesmd) => {
    filesmd.forEach((file) => {
        const route = path.dirname(file);
        const filesRead = fs.readFileSync(file, 'UTF-8');
        const fileHtml = marked(filesRead);
        const dom = new JSDOM(`<!DOCTYPE html> ${fileHtml}`);
        dom.window.document.querySelectorAll('a').forEach((linkText) => { //*La <a>etiqueta define un hipervínculo. El href atributo especifica la URL de la página a la que va el enlace:
            const href = linkText.getAttribute('href'); // El método getAttribute() devuelve el valor del atributo con el nombre especificado, de un elemento.
            const text = linkText.innerHTML;            
            const pathFile = route;
            arrayLinks.push({ href, text, pathFile })
        });
    });
    return arrayLinks;
}

// Función principal getLinks que invoca las demás funciones para resolver ruta, obtener los archivos md, leer los archivos y obtener los links
const getLinks = (pathResolved) => {
    const links = new Promise((resolve) => {
        const validPath = validateRoute(pathResolved);
        const files = getFiles(validPath);
        const linksFound = readFilesMd(files)
        resolve(linksFound);
    });
    return links
};

module.exports = {
    validateRoute,
    getFiles,
    readFilesMd,
    getLinks
};

