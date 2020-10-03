const fetch = require('node-fetch');
// const mocks = require('../../test/docs/mocksArr.js');

const validate = {};

// Pruebita de Fetch
/* fetch('https://es.wikipedia.org/wiki/Markdown')
  .then(res => console.log(res, res.status, res.statusText)) */

const linksFolderDocs = [
  {
    href: 'www.facebook.com',
    text: 'Facebook Uno',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'www.facebook.com',
    text: 'Facebook Dos',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'www.facebook.com',
    text: 'Facebook Uno',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/README-TEST-2.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/README-TEST-2.md',
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/README-TEST-2.md',
  },
  {
    href: 'www.facebook.com',
    text: 'Facebook Dos',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/README-TEST-2.md',
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/README-TEST-2.md',
  },
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/README-TEST-2.md',
  },
];

/* ---------- Validate Links ----------*/
const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((singleLink) => new Promise((resolve) => {
    const link = singleLink;

    if (!/^https?:\/\//i.test(link.href)) {
      link.href = `http://${link.href}`;
    }

    return fetch(link.href)
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          link.status = res.status;
          link.statusText = res.statusText;
          resolve(link);
        } else {
          link.status = res.status;
          link.statusText = 'Fail';
          resolve(link);
        }
      })
      .catch((err) => {
        resolve(err);
      });
  }));

  return Promise.all(arrPromises);
};

/* validateLinks(linksFolderDocs)
  .then((res) => console.log(res)); */
/* .catch(err => console.log(err)); */ // ¿Por qué ESLINT no me deja tenerlo? :(

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

validate.validateLinks = validateLinks;
// validate.getStats = getStats;
// validate.getBrokenValues = getBrokenValues;

module.exports = validate;
