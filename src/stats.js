//Este módulo determina estadísticas de los links: cantidad y unicidad

//Importando los módulos necesarios 
// const openF = require("./openF.js");
// const convert = require("./openF.js");
// const printLinks = require("./openF.js");
// const openF = require("./openF.js");


//Inicio de la función 'isVal'
const stats = (listOfNodes) => {
let unique = 0;
  listOfNodes.forEach((item)=>{
  if(item){
    unique += 1
  }
})
  console.log(`Total: ${listOfNodes.length}`);
  console.log(`Unique: ${unique}`)
}

module.exports = stats;