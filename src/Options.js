const leading = require("./index.js");

const stats = (data) => {
  const arrLinks = [];
  const totalLinks = data.length;
  data.forEach((element) => {
    arrLinks.push(element.href);
  });
  const uniquesLinks = new Set(arrLinks);
  const obj = {
    Total: totalLinks,
    Unique: uniquesLinks.size,
  };
  return obj;
};

const statsAndValidate = (data) => {
  const arrLinks = [];
  const totalLinks = data.length;
  const brokenLinks = data.filter(
    (element) => element.status_message === "FAIL"
  ).length;
  data.forEach((element) => {
    arrLinks.push(element.href);
  });
  const linksUnicos = new Set(arrLinks);
  const obj = {
    Total: totalLinks,
    Unique: linksUnicos.size,
    Broken: brokenLinks,
  };
  return obj;
};

const cli = (PATH, opcion, opcion2) => {
  if (PATH === undefined) {
    return new Promise((resolve) => {
      resolve("Ingrese una ruta relativa o absoluta");
    });
  }
    leading.mdLinks(PATH, { validate: false }).then((links) => {
    if (links.length === 0) {
      return new Promise((resolve) => {
        resolve("Este archivo no contiene links");
      });
    }
  });
  if ((opcion === "--stats" && opcion2 === "--validate") ||(opcion === "--validate" && opcion2 === "--stats")) {
    return leading.mdLinks(PATH, { validate: true })
      .then((resp) => statsAndValidate(resp))
      .then((links) => {
        const result = `Total: ${links.Total}\nUnique: ${links.Unique}\nBroken: ${links.Broken}`;
        return result;
      });
  }
  if (opcion === "--validate") {
    return leading.mdLinks(PATH, { validate: true }).then((res) => res);
  }

  if (opcion === "--stats") {
    return leading
      .mdLinks(PATH, { validate: true })
      .then((resp) => stats(resp))
      .then((links) => {
        const result = `Total: ${links.Total}\nUnique: ${links.Unique}`;
        return result;
      });
  } else if (opcion === undefined) {
    return leading.mdLinks(PATH, { validate: false }).then((res) => res);
  }
};

module.exports = {
  cli,
  stats,
  statsAndValidate,
};

// const cli = (PATH, opcion, opcion2) => {
//   if (PATH === undefined) {
//     return new Promise((resolve) =>
//       resolve("Ingrese una ruta relativa o absoluta")
//     );
//   }
//   leading.mdLinks(PATH, { validate: false }).then((links) => {
//     if (links.length === 0) {
//       // console.log("El archivo que ingresaste no contiene links");
//     }
//   });
//   if ((opcion === "--stats" && opcion2 === "--validate") ||(opcion === "--validate" && opcion2 === "--stats")) {
//     return leading
//       .mdLinks(PATH, { validate: true })
//       .then((resp) => statsAndValidate(resp))
//       .then((links) => {
//         const result = `Total: ${links.Total}\nUnique: ${links.Unique}\nBroken: ${links.Broken}`;
//         return result;
//       });
//   }
//   if (opcion === "--validate") {
//     return leading.mdLinks(PATH, { validate: true }).then((res) => res);
//   }

//   if (opcion === "--stats") {
//     return leading
//       .mdLinks(PATH, { validate: true })
//       .then((resp) => stats(resp))
//       .then((links) => {
//         const result = `Total: ${links.Total}\nUnique: ${links.Unique}`;
//         return result;
//       });
//   } else if (opcion === undefined) {
//     return leading.mdLinks(PATH, { validate: false }).then((res) => res);
//   }
// };
