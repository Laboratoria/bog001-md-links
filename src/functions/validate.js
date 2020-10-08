const fetch = require('node-fetch');
// const mocks = require('../../test/docs/mocksArr.js');

// Pruebita de Fetch
/* fetch('https://es.wikipedia.org/wiki/Markdown')
  .then(res => console.log(res, res.status, res.statusText)) */

/* ---------- Validate Links ----------*/
const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((singleLink) => {
    const link = singleLink;

    if (!/^https?:\/\//i.test(link.href)) { // Regex comprueba que no existe https
      link.href = `http://${link.href}`;
    }

    return fetch(link.href)
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          return { ...link, status: res.status, statusText: res.statusText };
        }
        return { ...link, status: res.status, statusText: 'Fail' };
      })
      .catch((err) => (err)); // Error: No hay conexión a internet ¿?
  });

  return Promise.all(arrPromises);
};

/* validateLinks(linksFolderDocs)
  .then(console.log)
  .catch(console.error); */

/* ---------- Stats Links (Unique + Total) ----------*/
/* const getStats = (arrLinks) => {
  const totalLinks = arrLinks.length;
  const linksUniqueArray = [...new Set(arrLinks.map(link => link.href))];
  console.log (linksUniqueArray)

  return `
  Total = ${totalLinks}
  Unique = ${linksUniqueArray.length}`;
} */

/* console.log(getStats(mocks.mockLinksInfo)) */

/* ---------- Get broken links ----------*/
/* const getBrokenValues = (arrLinksValidate) => {
  const failedLinks = arrLinksValidate.filter((link) => link.statusText === 'Fail');
  return `Broken = ${failedLinks.length}`;
} */

/* console.log(getBrokenValues(mocks.mockLinksValidate)) */

module.exports = validateLinks;
