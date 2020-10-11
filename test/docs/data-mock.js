const mocks = {};

// Recursión (readFile)
const dataFilesMd = [
  '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
  '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3/data-lovers.md',
  '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3/md-vacio.md',
  '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/no-links.md',
];

// Extraer Links (readFile)
const dataLinksInfo = [
  {
    href: 'www.facebook.com',
    text: 'Facebook Uno',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'www.facebook.com',
    text: 'Facebook Dos',
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
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
  {
    href: 'https://platzi.com/clases/progrbasica/',
    text: 'Link fake de platzi',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md',
  },
];

// mdLinks
const mdLinksValidateTrue = [
  {
    href: 'https://jestjs.io/es-ES/',
    text: 'Jest',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://jestjs.io/docs/es-ES/getting-started',
    text: 'Testeo de tus funciones',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://www.figma.com/',
    text: 'Figma',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell',
    text: 'UNIX Shell',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://jestjs.io/es-ES/',
    text: 'Jest 2',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://help.github.com/artics/cloning-a-repository/',
    text: 'Clonar (Link fake)',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 404,
    statusText: 'Fail',
  },
  {
    href: 'http://omg.dah.com',
    text: '¡OMG! Esto no existe (Error)',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 'Error (EPROTO)',
    statusText: 'Error code (EPROTO)',
  },
  {
    href: 'http://wtf.esp.cre',
    text: '¡WTF! Esto no existe (Error)',
    file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md',
    status: 'Error (ENOTFOUND)',
    statusText: 'Error code (ENOTFOUND)',
  },
];

// Validar Links
const dataLinksValidate = [
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

// Fail test
const failTest = [
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://jestjs.io/es-ES/', text: 'Jest' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://jestjs.io/docs/es-ES/getting-started', text: 'Testeo de tus funciones' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://www.figma.com/', text: 'Figma' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell', text: 'UNIX Shell' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://jestjs.io/es-ES/', text: 'Jest 2' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://help.github.com/artics/cloning-a-repository/', text: 'Clonar (Link fake)' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'http://omg.dah.com', text: '¡OMG! Esto no existe (Error)' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'http://wtf.esp.cre', text: '¡WTF! Esto no existe (Error)' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://jestjs.io/es-ES/', text: 'Jest' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://jestjs.io/docs/es-ES/getting-started', text: 'Testeo de tus funciones' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://www.figma.com/', text: 'Figma' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell', text: 'UNIX Shell' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://jestjs.io/es-ES/', text: 'Jest 2' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'https://help.github.com/artics/cloning-a-repository/', text: 'Clonar (Link fake)' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'omg.dah.com', text: '¡OMG! Esto no existe (Error)' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/card-validation.md', href: 'wtf.esp.cre', text: '¡WTF! Esto no existe (Error)' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3/data-lovers.md', href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', text: 'Uso de flexbox en CSS.' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3/data-lovers.md', href: 'https://pages.github.com/', text: 'GitHub Pages' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3/data-lovers.md', href: 'https://pages.github.com/', text: 'GitHub Pages 2' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3/data-lovers.md', href: 'https://es.wikipedia.org/wiki/Historias_de_usuario', text: 'Historias de Usuario' },
  { file: '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3/data-lovers.md', href: 'https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e', text: 'vanilla JavaScript' },
];

// Mock keys
mocks.dataFilesMd = dataFilesMd;
mocks.dataLinksInfo = dataLinksInfo;
mocks.dataLinksValidate = dataLinksValidate;
mocks.mdLinksValidateTrue = mdLinksValidateTrue;
mocks.failTest = failTest;

module.exports = mocks;
