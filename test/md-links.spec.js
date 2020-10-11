const mdLinks = require('../src/index.js');
const mocks = require('./docs/data-mock.js');

/* ---------- mdlinks ----------*/
describe('validateLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('Lanza error si el path no existe', () => {
    expect(() => {
      const userPath = 'test/md-links.spec.js/dospuntospe';
      mdLinks(userPath, { validate: false });
    }).toThrow('Verifica el path, ruta no encontrada');
  });

  it('Retorna [] cuando no es archivo .md', () => {
    const userPath = 'test/md-links.spec.js';
    return mdLinks(userPath, { validate: false }).then((links) => {
      expect(links).toEqual([]);
    });
  });

  it('Retorna [] cuando no el archivo no tiene links', () => {
    const userPath = 'test/docs/docs-2/no-links.md';
    return mdLinks(userPath, { validate: false }).then((links) => {
      expect(links).toEqual([]);
    });
  });

  it('Retorna array con objetos {href, text, file, status, statusText} en archivo', () => {
    const userPath = 'test/docs/docs-2/card-validation.md';
    return mdLinks(userPath, { validate: true }).then((links) => {
      expect(links).toEqual(mocks.mdLinksValidateTrue);
    });
  });

  it('Retornar [{}, {}] con links de todos los .md del folder', () => {
    const userPath = '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2';
    return mdLinks(userPath, { validate: false }).then((links) => {
      expect(links).toHaveLength(21);
    });
  });
});
