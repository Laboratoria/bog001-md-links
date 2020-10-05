const { cli } = require("../src/Options");
const mocks = require("../_mocks_/mocks");

describe("Funsion que deberia mostrar informacion segun la opcion que se ponga en la linea de comando ", () => {
  it("Deberia ser una función", () => {
    expect(typeof cli).toBe("function");
  });
  it("Deberia  que retorna  el total de links, los link unicos y links que estan rotos", () => {
    const option = "--stats";
    const option2 = "--validate";
    const stasVali = "Total: 2\nUnique: 2\nBroken: 1";
    cli("", option, option2).then((links) => {
      expect(links).toEqual(stasVali);
    });
  });

  it("Deberia  retorna el status de los links", () => {
    const input = "--validate";
    const output = mocks.validate;
    cli("", input).then((links) => {
      expect(links).toEqual(output);
    });
  });

  it("Deberia retorna el total de links  y links unicos", () => {
    const input = "--stats";
    const output = "Total: 2\nUnique: 2";
    cli("", input).then((links) => {
      expect(links).toEqual(output);
    });
  });
  it("Deberia retornar un arreglo de objetos con los links", () => {
    const input =
      "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md";
    const output = mocks.arregloLinks;
    cli(input).then((links) => {
      expect(links).toStrictEqual(output);
    });
  });
  it("Deberia recibir un array vacio para esta ruta que no contine links", () => {
    const input =
      "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\mardown\\prueba.md";
    const output = [];
    cli(input).then((links) => {
      expect(links).toStrictEqual(output);
    });
  });
  it("Debería de devolver un texto en caso la ruta ingresada no exista", () => {
    cli("").catch(() => {
      expect(
        Promise.reject(new Error("Ingrese una ruta relativa o absoluta"))
      ).rejects.toThrow("Ingrese una ruta relativa o absoluta");
    });
  });
});
