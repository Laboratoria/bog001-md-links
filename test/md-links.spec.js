const mdLinks = require('../index.js');
const path = require('path');
const validateLinks = require('../lib/validateLinks.js');
const statsLinks = require('../lib/statsLinks.js');

jest.setTimeout(50000);

// Función Principal  mdLinks
describe('mdLinks', () => {
  it('Should be a function', () => {
    expect(typeof mdLinks).toBe('function')
  });

  it('Should resolve a promise with links array ', (done) => {
    const pathValid = './mdFiles';
    const arrLinks = [
      {
        href: 'https://jestjs.io/docs/es-ES/manual-mocks',
        text: 'https://jestjs.io/docs/es-ES/manual-mocks',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\dirPrueba'
      },
      {
        href: 'https://github.com/markdown-it/markdown-it',
        text: 'markdown-it',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://nodejs.org/es/about/',
        text: 'Acerca de Node.js - Documentación oficial',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://docs.npmjs.com/creating-node-js-modules',
        text: 'https://docs.npmjs.com/creating-node-js-modules',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://algoError.deprueba.com/',
        text: 'https://algoError.deprueba.com/',
        pathFile: 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles'
      }
    ];
    expect(mdLinks(pathValid)).resolves.toEqual(arrLinks);
    done();
  });

  it.skip('Should return valid links', () => {
    const routeUser1 = './mdFiles';
    const arrayMockLinks = {
      href: 'https://jestjs.io/docs/es-ES/manual-mocks',
      text: 'https://jestjs.io/docs/es-ES/manual-mocks',
      pathFile: 'C:\Users\marce\Proyectos\mdlinks\bog001-md-links\mdFiles\dirPrueba',
      statusCode: 200,
      status: 'OK'
    };
    return mdLinks(routeUser1).then((links) => {
      const arrValidLinks = validateLinks(links);
        expect(arrValidLinks).toContainEqual(arrayMockLinks);
    });
  });

  it.skip('Should return stats links', () => {
    const pathUser = './mdFiles';
    const arrayMockStats = [8, 7, 0];
    return mdLinks(pathUser).then((links) => {
      const arrLinks = statsLinks(links);
      expect(arrLinks).toEqual(arrayMockStats);
    });
  });

  it('Should return a error message', () => {
    const route1 = './mdFiles/texto.txt';
    const errCode = 'ENOTDIR';
    return mdLinks(route1).catch(err => {
      expect(err.code).toBe(errCode)
    });
  });
});