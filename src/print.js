//Importar modulos
const chalk = require("chalk");

//Función de impresión en consola (salida)

const printLinks = (objectsArray) => {
    objectsArray.forEach(item =>{
    console.log(chalk.magentaBright('---begining of link---'));
    console.log(chalk.magentaBright('href = ', item.href));
    console.log(chalk.blueBright('text = ', item.text));
    console.log(chalk.greenBright('file = ', item.file.slice(0, 50)));
    console.log(chalk.greenBright('---end of link ---'));
    console.log('');
    })
}

module.exports = printLinks;