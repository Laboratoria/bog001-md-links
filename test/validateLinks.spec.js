const validateLinks = require('../lib/validateLinks.js');

jest.setTimeout(30000);
// ValidateLinks Function
describe('validateLinks', () => {
    it('Should be a function', () => {
        expect(typeof validateLinks).toBe('function')
    });

    it('Should return a validated links array ', () => {
        const arrayLinks2 = [
            {
                href: 'https://github.com/markdown-it/markdown-it',
                text: 'markdown-it',
                pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
            },
            {
                href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
                text: 'expresiones regulares (<code>RegExp</code>)',
                pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
            }
        ];
        const valLinks = [{
            href: 'https://github.com/markdown-it/markdown-it',
            text: 'markdown-it',
            pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
            statusCode: 200,
            status: 'OK'
        },
        {
            href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
            text: 'expresiones regulares (<code>RegExp</code>)',
            pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
            statusCode: 200,
            status: 'OK'
        }
        ];
        validateLinks(arrayLinks2).then((res) => {
            expect(res).toStrictEqual(valLinks);
        });
    });

    it('Should contain valid Link', () => {
        const linkInicial = [{
            href: 'https://nodejs.org/es/about/',
            text: 'Acerca de Node.js - Documentación oficial',
            pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
        },
        {
            href: 'https://github.com/markdown-it/markdown-it',
            text: 'markdown-it',
            pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
        }
        ];
        const link2 = {
            href: 'https://nodejs.org/es/about/',
            text: 'Acerca de Node.js - Documentación oficial',
            pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
            statusCode: 200,
            status: 'OK'
        };
        validateLinks(linkInicial).then((resp) => {
            expect(resp).toContainEqual(link2);
        });
    });

    it('Should return broken link ', () => {
        const linkPrueba = [{
            href: 'https://algoError.deprueba.com/',
            text: 'https://algoError.deprueba.com/',
            pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
        }];

        const linkPrubValid = [{
            href: 'https://algoError.deprueba.com/',
            text: 'https://algoError.deprueba.com/',
            pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
            statusCode: 'ETIMEDOUT',
            status: 'FAIL'
        }
        ];
        return validateLinks(linkPrueba).then((r) => {
            expect(r).toEqual(linkPrubValid);
        })
    });

});