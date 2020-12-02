//https://sergiodxa.com/articles/crear-modulo-npm

//https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
//https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_ref_path
const fs = require("fs");
//const path = require("path");
const fetch = require('node-fetch');
const colors = require("colors");
//https://nodejs.org/docs/latest/api/process.html#process_process_argv
let index = process.argv.indexOf("--file");
let mdExtension = process.argv[index + 1];
let options = process.argv[index + 2];
let data = fs.readFileSync(mdExtension, 'utf8')


//Validates if the file has a .md extension
function mdLinks (filename){
  if (filename.includes(".md")){
    console.log ("\n The file has a valid .md extension" .bgGrey.brightWhite.bold)
    return true;
  } else {
    console.log ("\n There is an invalid file extension" .bgGrey.brightRed.bold)
    return false;
  }
}

/*const mdLinks = (mdExtension) => {
  const fileExtension = path.extname(mdExtension);
  if (fileExtension = '.md') {
    console.log ("\n The file has a valid .md extension".bgGrey.brightWhite.bold);
    return true;
  } else {
    console.log("\n There is an invalid file extension".bgGrey.brightRed.bold);
    return false;
  }*/

//Function to get the links
//https://regexr.com/ to test regular expressions
const getLinks = (data) => {
  const regExLink = /((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+/g; // todos los tipos de links
  const regExText = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g; //el texto
  const toString = data.toString();
  const links = toString.match(regExLink);
  const text = toString.match(regExText);
  let newData = [];
  for (let i = 0; i < links.length; i++) {
    let collectionData = {
      text: text[i],
      link: links[i],
      file: mdExtension,
    };
    newData.push(collectionData);
  }
  return newData;
}

//Function to read and show the stats
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings // interpolation
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
const showStats = () => {
  if (mdLinks(mdExtension) === true) {
    allLinks = getLinks(data)
    let brokenLinks = 0;
    let uniqueLinks = 0;
    for (let i = 0; i < allLinks.length; i++) {
      fetch(allLinks[i].link).then(response  => {
        //await
        if (response.status == 200) {
          uniqueLinks++;
          console.log(
            ` File: ${mdExtension}\n Text: ${allLinks[i].text}\n href: ${
              allLinks[i].link
            }\n ✔ *** Response code: ${response.status} ${response.statusText} ***✔\n`.brightCyan,
          );
        } else if (response.status == 404 || response.status == 400) {
          brokenLinks++;
          console.log(
            ` File: ${mdExtension}\n Text: ${allLinks[i].text}\n href: ${
              allLinks[i].link
            }\n ⚠ *** Response code: ${response.status} ${response.statusText} ***⚠\n`.brightRed,
          ); 
        } else {
          console.log('error', response.status);
        }
      });
    };
  };
};

//Function to validate the links
const validateLinks = ()  => {
  allLinks = getLinks(data)
  let brokenLinks = 0;
  let uniqueLinks = 0;
  for (let i = 0; i < allLinks.length; i++) {
    fetch(allLinks[i].link).then(response => {
      if (response.status == 200) {
        uniqueLinks++;
      } else if (response.status == 404 || response.status == 400) {
        brokenLinks++;
      } else {
        console.log('error', response.status);
      }
      //se muestran los resultados de los links
      if (brokenLinks + uniqueLinks === allLinks.length) {
        console.log(`*******************************************************************\n`.america);
        console.log(` File: ${mdExtension}`.cyan);
        console.log(` Total Links: ${allLinks.length}`.white);
        console.log(` ✔ Total Unique Links: ${uniqueLinks}`.blue);
        console.log(` ✖ Total Broken links: ${brokenLinks}\n`.red);
        console.log(`*******************************************************************`.america);
      }
    });
  }
}

//Function to validate and show stats
const validateAndStats = (stats, validate) => {
  showStats(stats);
  validateLinks(validate);
}

//Terminal command extensions
const menuOptions = () => {
  if (options === '--validate') {
  console.log('\n Links Validate\n'.cyan) 
  validateLinks();
  } else if (options === '--stats') {
    console.log(showStats(mdExtension));
  } else if (options === '--validate--stats' || '--stats--validate') {
    console.log(validateAndStats(mdExtension));
  }
};
menuOptions();

const commanderModule = {
  mdLinks, getLinks, validateAndStats, menuOptions, showStats, validateLinks
};

module.exports = {
  commanderModule
};