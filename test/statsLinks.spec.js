const statsLinks = require('../lib/statsLinks.js');
// jest.setTimeout(30000);

// Describe statsLinks Function
describe('statsLinks',() => {
    it('Should return stats links', ()=>{
      const links = [
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
      const arrayMockStats= [ 8, 7, 0];
        expect(statsLinks(links)).toEqual(arrayMockStats);
    });
  
    it('Should return array whit stats Total and Unique', ()=>{
      const p = [
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
      const statsPrub = [ 7, 6, 0];
      return expect(statsLinks(p)).toEqual(statsPrub);
    });
  
    it('Should contain a broken link', ()=>{
      const linkBroken = [{
        href: 'https://algoError.deprueba.com/',
        text: 'https://algoError.deprueba.com/',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
        statusCode: 'ETIMEDOUT',
        status: 'FAIL'
      }];
      const arrayBroken = [1, 1, 1];
      return expect(statsLinks(linkBroken)).toEqual(arrayBroken);
    });
  });