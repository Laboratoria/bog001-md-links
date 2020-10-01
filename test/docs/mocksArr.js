const mocks = {};

// Array con objetos
const mockLinksInfo = [
  {
    href: 'www.facebook.com',
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

const trueLinksInfo = [
  {
    href: 'http://www.facebook.com',
    text: 'Facebook Dos',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
];

const trueLinksValidate = [
  {
    href: 'http://www.facebook.com',
    text: 'Facebook Dos',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 200,
    statusText: 'OK',
  },
];

const fakeLinksInfo = [
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake 2',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
];

const fakeLinksValidate = [
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake 2',
    path: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
    status: 404,
    statusText: 'Fail',
  },
];

// Paths
/* const userAbsolutePath = '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md';
const userRelativePath = 'test/docs/README-TEST.md';
const userInvalidPath = '/Users/Ana/Desktop/bog001-md-links/package-lock.json';
const userWithoutLinksPath = 'test/docs/README-TEST-NOLINKS.md'; */

// Mock keys
mocks.mockLinksInfo = mockLinksInfo;
mocks.mockLinksValidate = mockLinksValidate;
mocks.fakeLinksInfo = fakeLinksInfo;
mocks.fakeLinksValidate = fakeLinksValidate;
mocks.trueLinksInfo = trueLinksInfo;
mocks.trueLinksValidate = trueLinksValidate;

module.exports = mocks;
