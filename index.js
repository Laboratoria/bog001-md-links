// module.exports = () => {
//   // ...
// };

const path = require('path');
const fs = require('fs');
const axios = require('axios');
const glob = require("glob")

// const getDirectories = function (src, callback) {
//   glob(src + '**/*.md', callback);
// };
// getDirectories('/Users/albalucia/Desktop/curso/', function (err, res) {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log(res);
//   }
// });

function walk(directory, filepaths = []) {
  const files = fs.readdirSync(directory);
  console.log(files)
  for (let filename of files) {
      const filepath = path.join(directory, filename);
      console.log(filepath)

      if (fs.statSync(filepath).isDirectory()) {
          walk(filepath, filepaths);
      } else if (path.extname(filename) === '.md') {
          filepaths.push(filepath);
      }
  }
  // return filepaths;
}





// const crawl = (dir) => {
//   console.log('[+]', dir);
//   let files = fs.readdirSync(dir);
//   for (let x in files) {
//     let next = path.join(dir, files[x]);

//     if (fs.lstatSync(next).isDirectory() == true) {
//       crawl(next);
//     }
//     else {
//       console.log(next);
//     }
//   }
// }

console.log(walk("/Users/albalucia/Desktop/curso/"))



// AXIOS Realizar peticiones HTTP desde Nodejs.
// Transforma automáticamente la información en formato JSON.


const findLinksInMd = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", function (err, data) {
      const regex = /\[([^\[]+)\](\(.*\))/gm;
      const array = data.match(regex);
      if (err) {
        console.log('No found')
        reject(err)
      }
      if (!array) {
        console.log("No links found it")
         reject(err)
      } else {
        const links = array.map((item) => {
          const textHrefDivide = item.split("](")
          const text = textHrefDivide[0].replace("[", "");
          const href = textHrefDivide[1].replace(")", "");
          return ({ href, text, path });
        });
        console.log(links)
      }
    });
  });
};


findLinksInMd("/Users/albalucia/Desktop/curso/modulos/prueba.md")
.then((links)=> console.log(links))
.catch(error => console.error(error));



// AXIOS Realizar peticiones HTTP desde Nodejs.
// Transforma automáticamente la información en formato JSON.
const linkValidate = (url, text, path) =>
  new Promise((resolve) =>
    axios(url)
      .then((res) =>
        resolve({ url: url, text: text, file: path, status: res.status, statusText: res.statusText })
      )
      .catch(() => resolve({ url: url, text: text, file: path, status: 404, statusText: 'FAIL' }))
  );
const linksValidatePromises = [];

const resolveValidate = (links) => {
  links.forEach(({ href, text, path }) =>
    linksValidatePromises.push(linkValidate(href, text, path))
  );
  Promise.all(linksValidatePromises)
    .then((stats) => {
      // resolve(stats)
      console.log(stats)
        ;
    })
    .catch(() => reject(new Error(`no links to validate were found on the ${path}`)));
};



// console.log(resolveValidate([
//   {
//     href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
//     text: 'Leer un archivo',
//     path: '/Users/albalucia/Desktop/bog001-md-links/README.md'
//   },
//   {
//     href: 'https://nodejs.org/404',
//     text: 'Leer un directorio',
//     path: '/Users/albalucia/Desktop/bog001-md-links/README.md'
//   },
//   {
//     href: 'https://nodejs.omedium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
//     text: 'Path',
//     path: '/Users/albalucia/Desktop/bog001-md-links/README.md'
//   }]))


const linksStats = (links) => {
  const total = links.length;
  const failedLinks = links.filter(({ statusText }) => statusText === 'FAIL');
  const broken = failedLinks.length
  console.log({ total, broken })
};
// The split method divides a String into an ordered list of substrings into an ordered list of substrings and returns an array.

// console.log(linksStats([
//   {
//     url: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     file: '/Users/albalucia/Desktop/bog001-md-links/README.md',
//     status: 200,
//     statusText: 'OK'
//   },
//   {
//     url: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: '/Users/albalucia/Desktop/bog001-md-links/README.md',
//     status: 200,
//     statusText: 'OK'
//   },
//   {
//     url: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
//     text: 'md-links',
//     file: '/Users/albalucia/Desktop/bog001-md-links/README.md',
//     status: 200,
//     statusText: 'OK'
//   }
// ]))



