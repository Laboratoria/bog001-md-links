const { validateRoute, getFiles, readFilesMd, getLinks, } = require('../lib/getLinks.js');

/**---Función Principal getLinks para obtener los links */
describe('getLinks', () => {
    it('Should be a function', () => {
        expect(typeof getLinks).toBe('function')
    });

    it('Should return a links array', () => {
        const pathAbs = './mdFiles';
        const arrayLinks = [
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
        getLinks(pathAbs).then((data) => {
            expect(data).toStrictEqual(arrayLinks);
        });
    });
});

//Función validateRoute para validar la ruta de entrada
describe('validateRoute', () => {
    it('Should return absolute path', () => {
        const pathUser = './mdFiles';
        expect(validateRoute(pathUser)).toBe('C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles');
    });
});


//Función getFiles para obtener los archivos md de forma recursiva
describe('getFiles', () => {
    it('Should return with md files array', () => {
        const filesMd = 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\dirPrueba\\fileMdOtro.md';
        const pathUser = 'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles';
        expect(getFiles(pathUser)).toContainEqual(filesMd);
    });
});

//Función Para leer los archivos md y obtener los links
describe('readFilesMd', () => {
    it('Should be a function', () => {
        expect(typeof readFilesMd).toBe('function')
    });

    it('Should return links array', () => {
        const arrayLink = 
            {
                href: "https://jestjs.io/docs/es-ES/manual-mocks",
                text: "https://jestjs.io/docs/es-ES/manual-mocks",
                pathFile: "C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\dirPrueba"
            };
        const filesMd2 =
            [
                'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\dirPrueba\\fileMdOtro.md',
                'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\onlyText.md',
                'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\prueba.md'
            ];
        expect(readFilesMd(filesMd2)).toContainEqual(arrayLink);
    });
});