const leading = require("../src/index");
const check = require("../src/FsAndPath");
const mocks = require("../_mocks_/mocks");

describe(" Funcion Principal recibe la opcion para validar o no los links", () => {
  it("Deberia ser una función", () => {
    expect(typeof leading.mdLinks).toBe("function");
  });
  it("Si la opcion es true devuelve los links validados", () => {
    leading.mdLinks("", true).then((data) => {
      expect(data).toStrictEqual(mocks.validate);
    });
  });
  it("Si la opcion es false devuelve un arreglo de links", () => {
    leading.mdLinks("", false).then((data) => {
      expect(data).toStrictEqual(mocks.arregloLinks);
    });
  });
});

describe("Funsion para convertir ruta relativa en absoluta", () => {
  it("Deberia ser una función", () => {
    expect(typeof check.isAbsolute).toBe("function");
  });
  it("Deberia convertir una ruta relativa a ruta absoluta", () => {
    const input = "/archivo.md";
    const output = "C:\\archivo.md";
    expect(check.isAbsolute(input)).toBe(output);
  });
});
