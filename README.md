# blarteagar/MDLinks Library
Blanca Arteaga - BOG-001 Laboratorian (May-Nov 2020)
Aquí se describen los aspectos relevantes para el uso de la librería MD-Links

# Descripción del módulo
MD-Links es un módulo que permite analizar archivos *.md para encontrar el número de enlaces (ligas, links) presentes en el mismo. Para ello, el usuario debe ingresar una ruta (path) y las opciones de proceso:
-v para validar los links
-s para estadísticas sobre los enlaces
Es posible omitir las opciones, o bien invocarlas en combinación o por separado.
El comportamiento por defecto devuelve al usuario un objeto que, por cada link encontrado, muestra los siguientes resultados:
"href": URL encontrada
"text": Texto que aparece dentro del link
"file": Ruta del archivo donde se encontró el link (truncado a 50 caracteres)
...

# Instrucciones de uso e instalación
Para instalar el módulo, introducir este comando en el CLI:
>npm install md-links
...

# Documentación del API
...

# Ejemplos
...


---FIN DEL MANUAL DE USO E INSTALACION---
# (Notas mentales)
El objetivo de este proyecto es crear mi propia librería, usando node.js. Utilicé los conocimientos obtenidos en los cursos de LinkedIn Learning "Node.js esencial": instalación de node.js y npm, sintaxis de node, configuración de servidores, lectura de archivos, configuración de json y depuración de código.
También es interesante conocer un poco sobre markdown, su sintaxis y la manera de obtener etiquetas a, href, text (markdown autocompleta etiquetas HTML! :O). Esto lo iré haciendo en paralelo con las pruebas manuales: prepararé algunos archivos markdown para tenerlos en una carpeta "readable" y analizar sus contenidos.
Estoy creando una librería (conjunto de funciones o métodos que cumplen propósitos específicos) que deseo publicar en npm en forma de un módulo (que se pueda invocar con el comando 'require'). Para que sea instalable, el código fuente debe estar publicado en GitHub.
Veo que parte importante de este proyecto se trata de analizar el texto markdown para encontrar los links "http:", y una vez obtenidos, hacer las peticiones web para verificar el estado de los archivos.
Análisis de la ruta: Intenté primero con expresiones regulares, pero el resultado es engorroso. Luego vi que podía usar el módulo nativo de node "path" para resolver rutas absolutas a relativas.
Extracción de los links y textos: puedo usar jsdom, marked u otras librerías para eso. Usar expresiones regulares también puede ser engorroso en este caso.


# Historias de Usuario
HU1: Yo como developer quiero usar node.js para leer una ruta a un archivo *.md y las opciones de procesamiento.
HU2: Yo como developer quiero recorrer un archivo *.md para determinar cuántos links contiene y obtener algunas de sus propiedades.
HU3: Yo como developer quiero probar cada link del archivo *.md para verificar la respuesta obtenida.
HU4: Yo como developer quiero generar un módulo instalable de mi paquete para su uso por parte de la comunidad de npm.

# Tareas de la Aplicación
* [ ] 1. Ingresar datos mediante la línea de comandos CLI (process.argv)
* [x] 1.1. Leer la ruta (route)
* [x] 1.2. Leer opción validate (validate or -v)
* [x] 1.3. Leer opción stats (stats or -s)
* [x] 1.4. Confirmar los valores mostrados en pantalla
* [x] 1.5. Exportar los datos a otros módulos de la aplicación
* [ ] 1.6. Realizar pruebas unitarias de este módulo

* [ ] 2. Procesar los datos recibidos desde la línea de comandos (CLI)
* [ ] 2.1. Verificar que se puedan recibir los datos desde la línea de comandos
* [x] 2.2. Definir si la ruta conduce a un archivo o a una carpeta (módulo path)
* [x] 2.3. En caso de ser archivo, definir si es *.md (módulo path)
* [x] 2.4. Arrojar error si el archivo no es markdown (módulo path)
* [x] 2.5. Si la ruta es absoluta, está bien (módulo path)
* [x] 2.6. Si es relativa, debe resolverse a absoluta (módulo path)
* [x] 2.7. Verificar el estado (activo o inactivo) de la opción validate
* [x] 2.8. Verificar el estado (activo o inactivo) de la opción stats
* [ ] 2.9. Realizar pruebas unitarias de este módulo

* [ ] 3. Abrir los archivos *.md para ver su contenido (fs)
* [ ] 3.1. Si la ruta conduce a directorio, abrir todos los *.md presentes (withFileTypes=True, ¿recursión?)
* [ ] 3.2. Manejar errores al abrir archivos (acceso al objeto de errores)
* [x] 3.2.1. Error en la extensión del archivo
* [x] 3.2.2. Error en la ruta (Archivo no encontrado)
* [x] 3.2.3. Error en la data (Archivo corrupto)
* [ ] 3.3. Realizar pruebas unitarias de este módulo

* [ ] 4. Analizar el contenido de los archivos (RegExp, "showdown")
* [x] 4.1. Mostrar el contenido del archivo *.md
* [x] 4.2. Convertir el texto *.md en html para distinguir más fácilmente las etiquetas.
* [ ] 4.3. Crear un objeto "estandar" que contenga, por cada link:
* [x] 4.3.1. "href": URL encontrada
* [x] 4.3.2. "text": Texto que aparecía dentro del link
* [x] 4.3.3. "file": Ruta del archivo donde se encontró el link (50 chars)

* [ ] 5. Validate: Hacer peticiones http (RegExp, peticiones axios.get, http.get)
* [ ] 5.1. De cada http encontrado, hacer petición HTTP
* [ ] 5.2. Realizar pruebas unitarias de este módulo

* [ ] 6. Stats: Analizar links repetidos (sort, filter, map)
* [ ] 6.1. Detectar cuántos links se repiten dentro de un mismo archivo
* [ ] 6.2. Hacer petición http para saber si el link está roto (peticiones axios.get, http.get)
* [ ] 6.2. Realizar pruebas unitarias de este módulo

* [ ] 7. Entregables
* [ ] 7.1. Generar el paquete instalable
* [ ] 7.1.1. Configurar package.json
* [ ] 7.1.2. Subir el código al repositorio de github
* [ ] 7.2. Haber realizado tests unitarios de cada módulo
* [ ] 7.3. Crear el módulo ejecutable e instalable '@blarteagar/md-links'
* [ ] 7.4. Redactar el README.md


# Dailys
30/09/2020 Q&A MDLinks con Lupe
19/10/2020 uso de módulo fs para abrir archivos
uso de métodos de string para determinar la extensión del archivo en la ruta.
uso de RegExp para determinar si la ruta tiene un punto, en cuyo caso conduce a un archivo; y de lo contrario, conduce a una carpeta.
uso de RegExp y métodos de string para determinar la extensión del archivo.
uso del módulo readline para obtener la ruta desde la línea de comandos CLI.
22/10/2020 enrutamiento: carpeta, archivo md o archivo inválido (expresiones regulares) NOP!
24/10/2020 enrutamiento: carpeta, archivo md o archivo inválido (módulo path) YEP!
26/10/2020 extracción de links con expresiones regulares NOP! Usar jsdom u otros.
26/10/2020 OH con Lupe para ver mi progreso: Usar process.argv para mi HU1: Línea de comandos. Tengo OH mañana para que me explique modularización. Empecé a implementar process.argv.
Hacking de extraer links con RegExp (necesito crear un objeto que agrupe todas las coincidencias) OH con Lupe.
27/10/2020 Sprint Demo, super provechoso. Hacking yargs y líneas de comandos. OH con Lupe.
27/10/2020 Ceremonias Sprint. Usé yargs para tratar de obtener argumentos del CLI (nope). OH Lupe, me recomendó process.argv. Otras recomendaciones: Importar mdlinks y todas las funciones relacionadas utilizando la ruta donde se encuentra el archivo, tal como se hacía con import y export. El archivo index.js es el punto de entrada.
28/10/2020 Hacking con process.argv. Uso de marked para extracción de links. Modularización. OH Lupe. Q&A GitHub. Logrado: enrutar las entradas del CLI. Falta: modularizar. Hackear marked.
29/10/2020 Para modularizar, creo que me hace falta repasar la sintaxis de las funciones.
04/11/2020 He incorporado las funciones isVal e isAbs para procesar las rutas obtenidas en el CLI. Logré modularizar estas dos funciones. Utilicé module.exports = () => {} tal como lo pide Laboratoria en index.js de ejemplo.
Logrado: Modularizar algunas funcionalidades (yeeeiii).
Para hoy me quiero meter con JSDOM. Finalmente lo que hice fue continuar con el método que ya yo había probado con éxito (showdown y expresiones regulares). Me falta implementar un bucle ('while'?) que me permita recorrer todo el archivo y extraer todos los links.
4pm Instalé chalk, figlet y enquirer para hacer más bonita e interactiva la interfaz.
7pm El bucle while para recorrer los archivos parece funcionar, lo extraño son las expresiones regulares que no me están captando lo que necesito: me están capturando más de lo solicitado.
5/11/2020 comencé la mañana revisando las RegExp. Quedaron tan complicadas que ahora no me devuelven nada.
11am instalé JSDOM. Como requiere de entrada un texto HTML, pues vamos bien, pues ya tengo el convertidor.
Otro Issue: No puedo abrir carpetas. Debo usar otro método: una cosa es openFile y otra openDir, tengo que crear una nueva función y llamarla (con modularización).
Me voy a tomar una pausa.
1230pm nop, no me quieren funcionar las expresiones regulares. Usaré JSDOM.
06/11/2020 Lupe me ayudó con JSDOM :-) yeeeeiiii
construir el array de objetos con la salida "estándar" de mi programa.
conectar con args.js
-cómo usar readfile como promesa (reject, resolve). (then/catch para procesos asíncronos)
construir las funciones stats y validate
-usar un método de arrays para determinar links repetidos (map, ?)
-hacer peticiones http para determinar el status de los links (200, 404, etc.) (fetch)?
09/11/2020 Daily: Ayer (Viernes 6/11/2020): OH Lupe, me ayudó a habilitar el paquete JSDOM para extraer los links del md-file. Espacio con Chavi storytelling. Sábado: Espacio con mentora. Simulacro entrevista RRHH.
Hoy, estoy estudiándome los objetos. Encontré en mi LinkedIn Learning una estructura constructora de objetos y ¡me funciona! pero usa la _"pseudo-variable" this.
Limpié código: no requiero llamar a la función convert (data, route) ya que la función openF() llama a convert en el momento en que se extrae la data.
Estoy estudiando en el Laboratoria LMS, JS Deep Dive.
Estudiando también con LinkedIn Learning.
Estoy "modularizando" con llamados a funciones dentro de las funciones anteriores.

Sprint Review 10/11/2020
¿Qué cosas seguir haciendo bien?
Usar LinkedIn Learning y Laboratoria LMS para continuar estudiando
Probar código de una vez
Planificar desde mi readme
Planificar en GitHub Projects

¿Qué debo dejar de hacer?
Procrastinación y Postergación de mis tareas con Job Application
Huirle a mis compañeras para no preguntarles las dudas que tengo
Darle demasiadas vueltas al código: si funciona, lo uso y luego pregunto

¿Qué debo hacer para mejorar?
Dedicar mucho más tiempo a mi trabajo en Laboratoria (al menos 2 horas en la tarde cada día, y fines de semana 4 horas cada día)
Preguntarle a Lupe todos los días
Planificar, presentar mi propuesta y preguntar (PPP jejeje)
Concentración: Dedicarme con método pomodoro a la solución de los problemas de código



# Recursos BLAR
[using module.exports](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)
[comandos interactivos en node.js](http://7sabores.com/blog/crear-comando-interactivo-nodejs)
[cómo crear un módulo de node.js](https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module-es)
[usando el CLI](https://tecnops.es/creando-nuestro-cli-command-line-interface-usando-nodejs/)
[argumentos de la línea de comandos](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
[argumentosCLI](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
[requiring modules in node-js](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)
[JSDOM A guide on how to use it](https://www.testim.io/blog/jsdom-a-guide-to-how-to-get-started-and-what-you-can-do/)
[]()luucamay:bandera-bo:  11:02
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
MDN Web DocsMDN Web Docs
Array.prototype.forEach()
The forEach() method executes a provided function once for each array element.
De Lupe para todos:  10:31 AM
readdirp
De Lupe para todos:  10:52 AM
https://github.com/jsdom/jsdom
De Lupe para todos:  11:01 AM
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach




---FIN DEL README PERSONAL BLANCA ARTEAGA---
## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entregables](#6-entregables)
* [7. Hacker edition](#7-hacker-edition)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el popular `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (_proceso_, _env_, _stdin/stdout/stderr_), ...

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

## 3. Objetivos de aprendizaje

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [ ] [Creación de Promesas.](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

### Node

* [ ] Uso de sistema de archivos. ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] Instalar y usar módulos. ([npm](https://www.npmjs.com/))
* [ ] Creación de modules. [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] [Configuración de package.json.](https://docs.npmjs.com/files/package.json)
* [ ] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)
* [ ] Uso de Mocks manuales.
* [ ] Testeo para múltiples Sistemas Operativos.

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### HTTP

* [ ] Verbos HTTP ([http.get](https://nodejs.org/api/http.html#http_http_get_options_callback))

### Fundamentos de programación

* [ ] [Recursión.](https://www.youtube.com/watch?v=lPPgY3HLlhQ)

***

## 4. Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* La librería y script ejecutable (herramienta de línea de comando -
  CLI) debe estar implementada en JavaScript para ser ejecutada con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo debe ser instalable via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

* Para este proyecto no está permitido utilizar `async/await`.

* Para este proyecto es opcional el uso de ES Modules `(import/export)`, en el
  caso optes utilizarlo deberás de crear un script de `build` en el `package.json`
  que los transforme en `requires` y `module.exports` con ayuda de babel.

## 5. Criterios de aceptación mínimos del proyecto

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

Antes de comenzar a codear, es necesario crear un plan de acción. Esto debería
quedar detallado en el `README.md` de tu repo y en una serie de _issues_
y _milestones_ para priorizar y organizar el trabajo, y para poder hacer
seguimiento de tu progreso.

Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada quien
considere necesarios.

### Archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar una función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo no
  se debe cambiar.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu inplementación debe pasar estos tets.

### JavaScript API

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
* `options`: Un objeto con las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## 6. Entregables

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto un ejecutable como una interfaz que podamos importar con `require`
para usarlo programáticamente.

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Puedes agregar la propiedad `line` a cada objeto `link` indicando en qué línea
  del archivo se encontró el link.
* Puedes agregar más estadísticas.
* Integración continua con Travis o Circle CI.

***

## 8. Pistas, tips y lecturas complementarias

### FAQs

#### ¿Cómo hago para que mi módulo sea _instalable_ desde GitHub?

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente
desde GitHub. Ver [docs oficiales de `npm install` acá](https://docs.npmjs.com/cli/install).

Por ejemplo, el [`course-parser`](https://github.com/Laboratoria/course-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/course-parser`.

### Sugerencias de implementación

La implementación de este proyecto tiene varias partes: leer del sistema de
archivos, recibir argumentos a través de la línea de comando, analizar texto,
hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas formas,
tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el _parseado_ (análisis) del markdown para extraer los
links podría plantearse de las siguientes maneras (todas válidas):

* Usando un _módulo_ como [markdown-it](https://github.com/markdown-it/markdown-it),
  que nos devuelve un arreglo de _tokens_ que podemos recorrer para identificar
  los links.
* Siguiendo otro camino completamente, podríamos usar
  [expresiones regulares (`RegExp`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
* También podríamos usar una combinación de varios _módulos_ (podría ser válido
  transformar el markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
  y de ahí extraer los link con una librería de DOM como [JSDOM](https://github.com/jsdom/jsdom)
  o [Cheerio](https://github.com/cheeriojs/cheerio) entre otras).
* Usando un _custom renderer_ de [marked](https://github.com/markedjs/marked)
  (`new marked.Renderer()`).

No dudes en consultar a tus compañeras, coaches y/o el [foro de la comunidad](http://community.laboratoria.la/c/js)
si tienes dudas existenciales con respecto a estas decisiones. No existe una
"única" manera correcta :wink:

### Tutoriales / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
* [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

## 9. Checklist

### General

* [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [ ] Un board con el backlog para la implementación de la librería.
* [ ] Documentación técnica de la librería.
* [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [ ] El módulo exporta una función con la interfaz (API) esperada.
* [ ] Implementa soporte para archivo individual
* [ ] Implementa soporte para directorios
* [ ] Implementa `options.validate`

### CLI

* [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [ ] Se ejecuta sin errores / output esperado
* [ ] Implementa `--validate`
* [ ] Implementa `--stats`

### Pruebas / tests

* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).
