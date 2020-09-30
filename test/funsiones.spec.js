const check = require("../src/FsAndPath");
const functions = require("../src/funciones");
const mocks = require("../_mocks_/mocks");

describe(" Funsion que deberia Verificar si es file or directory", () => {
  it("Deberia ser una función", () => {
    expect(typeof check.isfileOrDitectory).toBe("function");
  });
  it("Deberia retornar true si la ruta es file .md", () => {
    const input = "/archivo.md";
    const output = true;
    functions.dirOrFilesMd(input).then((stats) => {
      expect(stats).toBe(output);
    });
  });
  it("Deberia entrar a el directory  para buscar archivos md", () => {
    const input = "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown";
    const output = mocks.arraymd;
    functions.dirOrFilesMd(input).then((stats) => {
      expect(stats).toStrictEqual(output);
    });
  });
});

describe(" Funsion que deberia verificar que sean archivos .md", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof check.isMd).toBe("function");
  });
  it("Deberia retornar los archivos que contengan la extension .md", () => {
    const input = "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown";
    const output = mocks.arraymd;
    functions.dirOrFilesMd(input).then((data) => {
      expect(data).toStrictEqual(output);
    });
  });
});

describe(" Funsion que deberia devolver un array con los archivos que sean .md", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof functions.dirOrFilesMd).toBe("function");
  });
  it("Deberia retornar un array del archivo.md", () => {
    const input =
      "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md";
    const output = mocks.md;
    functions.dirOrFilesMd(input).then((data) => {
      expect(data).toStrictEqual(output);
    });
  });
  it("Deberia retornar un array con los archivos que esten dentro del directorio que sean .md", () => {
    const input = "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown";
    const output = mocks.arraymd;
    functions.dirOrFilesMd(input).then((data) => {
      expect(data).toStrictEqual(output);
    });
  });
});

describe(" Funsion deberia leer archivos markdown", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof check.fileread).toBe("function");
  });
  it("Deberia leer el archivo para poder extraer los links", () => {
    const input = "/prueba.md";
    const output = mocks.arregloLinks;
    functions.searchLinks(input).then((data) => {
      expect(data).toEqual(output);
    });
  });
});

describe(" Funsion que deberia obtener los links que hay en el archivo markdown", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof functions.searchLinks).toBe("function");
  });
  it("Deberia retornar un arreglo de objetos con href, text y file", () => {
    const input = "/archivo.md";
    const output = mocks.arregloLinks;
    functions.searchLinks(input).then((data) => {
      expect(data).toEqual(output);
    });
  });
});

describe("Funsion que deberia devolver el status de cada link que contenga el arreglo de objetos", () => {
  it("debería ser una función", () => {
    expect(typeof functions.validatelink).toBe("function");
  });
  it("debería devolver una promesa con el status de cada link", () => {
    const input =
      "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\archivo.md";
    const output = mocks.validate;
    functions.validatelink(input).then((obj) => {
      expect(obj).toEqual(output);
    });
  });
  it("debería poder filtrar los enlases internos ", () => {
    const input = "C:\\Users\\danie\\Documents\\MDL\\bog001-md-links\\markdown\\marval.md";
    const output = [];
    functions.validatelink(input).then((enlace) => {
      expect(enlace).toEqual(output);
    });
  });
});
