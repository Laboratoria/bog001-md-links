const getLinks = require('../src/functions/readFile.js');
const mocks = require('./docs/mocksArr.js');
const validate = require('../src/functions/validate.js');

/* ---------- Leer archivo y extraer links ----------*/
describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });

  it('Retorna un array con objetos {href, text, file}', () => {
    const userPath = 'test/docs/README-TEST.md';
    return getLinks(userPath).then((links) => {
      expect(links).toEqual(mocks.mockLinksInfo);
    });
  });

  it('Falla cuando no hay links en un archivo', () => {
    const userPath = 'test/docs/README-TEST-NOLINKS.md';
    return getLinks(userPath).catch((e) => {
      expect(e.message).toBe('No hay links en este archivo :(');
    });
  });

  it('Falla cuando la ruta es incorrecta', () => {
    const userPath = 'test/docs/REDME-TEST.md';
    return getLinks(userPath).catch((e) => {
      expect(e.message).toBe('Hubo un error en la ruta :(');
    });
  });
});

/* ---------- Validar los links de los archivos ----------*/
describe('validateLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validate.validateLinks).toBe('function');
  });

  it('Retorna un array con objetos {href, text, file, status, statusText}', () => validate.validateLinks(mocks.mockLinksInfo).then((links) => {
    expect(links).toEqual(mocks.mockLinksValidate);
  }));

  /* it('Falla cuando no se puede hacer la petición (Sin internet)', () => {
    return validate.validateLinks('aqui no sé').catch(e => {
        expect(e.message).toBe('aquí tampoco sé')
    })
  }); */
});
