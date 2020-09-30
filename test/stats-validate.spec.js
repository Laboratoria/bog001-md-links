const options = require("../src/Options");
const mocks = require("../_mocks_/mocks");

describe("Funcion que  cuenta los links  y cuantos unicos hay dentro de un archivo  mardown ", () => {
  it("Deberia ser una función", () => {
    expect(typeof options.stats).toBe("function");
  });
  it(" La opcion es --stast deberia retornar un objeto con la cantidad de links", () => {
    expect(options.stats(mocks.validate)).toStrictEqual(mocks.statss);
  });
});

describe("Funcion  que me indica cuantos links hay, total unicos y rotos ", () => {
  it("Deberia ser una función", () => {
    expect(typeof options.statsAndValidate).toBe("function");
  });
  it(" La opcion --stats --validate devuelve un objeto con los links contados y validados", () => {
    expect(options.statsAndValidate(mocks.validate)).toStrictEqual(
      mocks.validatee
    );
  });
});
