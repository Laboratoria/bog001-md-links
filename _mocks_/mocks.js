// const nodeFetch = jest.requireActual('node-fetch');
// const fetchMock = require('fetch-mock').sandbox();

// Object.assign(fetchMock.config, {
//   fetch: nodeFetch,
// });


// fetchMock.mock('https://nodejs.org/hi', 400)
// fetchMock.mock('https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/', 200)
// fetchMock.mock('link.roto.com', {
//     throws: new Error('Failed to fetch'),
//   });

const validate = [
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import', 
    text: '<code>import</code>',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md',
    status_message: 'OK',
    status: 200
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export/',
    text: '<code>export</code>',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md',
    status_message: 'OK',
    status: 200
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md',
    status_message: 'OK',
    status: 200
  },
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md',
    status_message: 'OK',
    status: 200
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md',
    status_message: 'OK',
    status: 200
  },
  {
    href: 'https://nodejs.org/hi',
    text: 'https://nodejs.org/hi',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md',
    status_message: 'FAIL',
    status: 400
  }
]

const fail = [
  {
    href: 'https://nodejs.org/hi',
    text: 'https://nodejs.org/hi',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md',
    status_message: 'FAIL',
    status: 400
  }
]


const arregloLinks =[
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
    text: '<code>import</code>',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export/',
    text: '<code>export</code>',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md'
  },
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md'
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md'
  },
  {
    href: 'https://nodejs.org/hi',
    text: 'https://nodejs.org/hi',
    file: 'C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md'
  }
]
const statss = {
  Total: 6,
  Unique: 6
}

const validatee = {
  Total: 6,
  Unique: 6,
  Broken: 1
}

const md = [
  "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md"
]
  
const arraymd = 
  [
  "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md", 
  "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\marval.md",
  "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\prueba.md", 
  "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\texto.md"
]

module.exports = {
    validate,
    fail,
    arregloLinks,
    arraymd,
    md,
    statss,
    validatee 
}

