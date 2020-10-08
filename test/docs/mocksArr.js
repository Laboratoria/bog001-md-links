const mocks = {};

// Array con objetos
const mockLinksInfo = [
  {
    href: 'www.facebuk.cm', // Cambiar
    text: 'Facebook Uno',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'www.facebook.com',
    text: 'Facebook Dos',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
];

const mockLinksValidate = [
  {
    href: 'http://www.facebook.com',
    text: 'Facebook Uno',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'http://www.facebook.com',
    text: 'Facebook Dos',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 404,
    statusText: 'Fail',
  },
];

// Mock keys
mocks.mockLinksInfo = mockLinksInfo;
mocks.mockLinksValidate = mockLinksValidate;

module.exports = mocks;
