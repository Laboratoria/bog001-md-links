//Modulo para abrir archivos

//Importando los modulos requeridos
const fs = require("fs");
const showdown = require("showdown");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const printLinks = require("./print.js");

//Funcion openF
const openF = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, "utf8", (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

//Funcion convert
const convert = (data, route) => {
  const Converter = require("showdown");
  let converter = new showdown.Converter();
  let htext = converter.makeHtml(data);
//Inicializando el paquete JSDOM para convertir HTML en un documento con objetos (DOM) y construyendo la lista de nodos DOM
  const dom = new JSDOM(htext);
  const listOfNodes = dom.window.document.querySelectorAll("a");
//Construyendo la clase "foundLinks", es la plantilla del objeto que contiene los links en el *.md
  class foundLinks {
    constructor(href, text, route) {
      this.href = href;
      this.text = text;
      this.file = route;
    }
  }
//Construyendo un array de objetos con forEach.
  const listObjects = [];
  listOfNodes.forEach((item) => {
    const newLinkFound = new foundLinks(item.href, item.textContent, route);
    listObjects.push(newLinkFound);
  });
  return listObjects;
};

const callOpen = (route) => {
  openF(route)
    .then((data) => {
    const listObjects = convert(data, route);
      printLinks(listObjects)
    })
    .catch((error) => {
    console.error(error)
    })
}

module.exports = openF;
module.exports = convert;
module.exports = callOpen;