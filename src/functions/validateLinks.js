const fetch = require('node-fetch');

// Mocks
const mockLinksInfo = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: '/Users/Ana/Desktop/bog001-md-links/README-TEST.md'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    path: '/Users/Ana/Desktop/bog001-md-links/README-TEST.md'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    path: '/Users/Ana/Desktop/bog001-md-links/README-TEST.md'
  },
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake',
    path: '/Users/Ana/Desktop/bog001-md-links/README-TEST.md'
  }
]

// Pruebita de Fetch
/* fetch('https://es.wikipedia.org/wiki/Markdown')
  .then(res => console.log(res, res.status, res.statusText)) */

/*---------- Validate Links ----------*/
// Crear promesa
const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((link) => new Promise ((resolve) => {
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
