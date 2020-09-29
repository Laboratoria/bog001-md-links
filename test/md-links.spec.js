const getLinks = require('../src/functions/readFile.js');
// const { validateLinks, getStats, getBrokenValues } = require('../src/functions/options.js');
const { mockLinksInfo, mockLinksWithValidate } = require('../test/docs/mocksArr.js');

/*---------- Leer archivo y extraer links ----------*/
describe('getLinks', () => {

  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });

  it('Retorna un array con objetos', () => {
    const userPath = '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST.md';
    return getLinks(userPath).then(links => {
        console.log(links);
        expect(links).toEqual(mockLinksInfo)
    })
  });

  it('Falla cuando no hay links en un archivo', () => {
    const userPath = '/Users/Ana/Desktop/bog001-md-links/test/docs/README-TEST-NOLINKS.md';
    return getLinks(userPath).catch(e => {
        //console.log(e.message); //Network Error
        expect(e.message).toBe('No hay links en este archivo :(')
    });
  });

  it('Falla cuando la ruta es incorrecta', () => {
    const userPath = '/Users/Ana/Desktop/bog001-md-links/tet/docs/README-TEST-NOLINKS.md';
    return getLinks(userPath).catch(e => {
        //console.log(e.message); //Network Error
        expect(e.message).toBe('Hubo un error en la ruta :(')
    });
  });

});
