const { getMdFiles, getLinks, getLinksFiles } = require('../src/functions/readFile.js');
const mocks = require('./docs/data-mock.js');

/* ---------- getMdFiles ----------*/
describe('getMdFiles', () => {
  it('Debería ser una función', () => {
    expect(typeof getMdFiles).toBe('function');
  });

  it('Retorna array.length 1 cuando es archivo', () => {
    const userPath = 'test/docs/README-TEST.md';
    expect(getMdFiles(userPath)).toHaveLength(1);
  });

  it('Retorna array.length 5 cuando es folder test', () => {
    const userPath = 'test';
    expect(getMdFiles(userPath)).toHaveLength(5);
  });

  it('Retorna array de strings con nombres de los archivos en el folder test', () => {
    const userPath = '/Users/Ana/Desktop/bog001-md-links/test';
    expect(getMdFiles(userPath)).toEqual(mocks.dataFilesMd);
  });
});

/* ---------- getLinks ----------*/
describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });

  it('Retorna un array con objetos {href, text, file}', () => {
    const userPath = 'test/docs/README-TEST.md';
    return getLinks(userPath).then((links) => {
      expect(links).toEqual(mocks.dataLinksInfo);
    });
  });

  it('Retorna array vacío cuando no hay links en un archivo', () => {
    const userPath = 'test/docs/docs-2/no-links.md';
    return getLinks(userPath).catch((resp) => {
      expect(resp).toEqual([]);
    });
  });

  it('Falla cuando la ruta es incorrecta', () => {
    const userPath = 'test/docs/REDME-TEST.md';
    return getLinks(userPath).catch((e) => {
      expect(e.message).toBe('ENOENT, verifica el path, ruta no encontrada. Función getLinks');
    });
  });
});

/* ---------- getLinksFiles ----------*/
describe('getLinksFiles', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinksFiles).toBe('function');
  });

  it('Retorna arr.length 5 cuando es arr de 5 files', () => {
    expect(getLinksFiles(mocks.dataFilesMd)).toHaveLength(5);
  });
});
