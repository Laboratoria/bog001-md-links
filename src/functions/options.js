const fetch = require('node-fetch');
const { mockLinksInfo, mockLinksWithValidate } = require('../../test/docs/mocksArr.js');

// Pruebita de Fetch
/* fetch('https://es.wikipedia.org/wiki/Markdown')
  .then(res => console.log(res, res.status, res.statusText)) */

/*---------- Validate Links ----------*/
const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((link) => new Promise ((resolve) => {
    if (!/^https?:\/\//i.test(link.href)) {
      link.href = 'http://' + link.href;
    }

    return fetch(link.href)
      .then((res) => {
        if (res.status >= 200 && res.status < 400 ){
          link.status = res.status;
          link.statusText = res.statusText;
          resolve(link)
        } else {
          link.status = res.status;
          link.statusText = 'Fail';
          resolve(link)
        }
      })
      .catch((err) => {
        resolve(err);
      });
  }));

  return Promise.all(arrPromises)
    .then((res) => {
      return res;
    })
};

// Consumir promesa
validateLinks(mockLinksInfo)
  .then(res => console.log(res))
  .catch(err => console.log(err))

/*---------- Stats Links (Unique + Total) ----------*/
const getStats = (arrLinks) => {
  const totalLinks = arrLinks.length;
  const linksUniqueArray = [...new Set(arrLinks.map(link => link.href))];
  console.log (linksUniqueArray)

  return `
  Total = ${totalLinks}
  Unique = ${linksUniqueArray.length}`;
}

console.log(getStats(mockLinksInfo))

/*---------- Get broken links ----------*/
const getBrokenValues = (arrLinksValidate) => {
  const failedLinks = arrLinksValidate.filter((link) => link.statusText === 'Fail');
  return `Broken = ${failedLinks.length}`;
}

console.log(getBrokenValues(mockLinksWithValidate))

module.exports = {
  validateLinks,
  getStats,
  getBrokenValues
}
