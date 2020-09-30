const fetch = require("node-fetch");
const marked = require("marked");
const check = require("./FsAndPath.js");

const dirOrFilesMd = (PATH) => {
  return new Promise((resolve) => {
    let arrayMd = [];
    return check
      .isfileOrDitectory(PATH)
      .then((stats) => {
        if (stats.isFile() && check.isMd(PATH) === ".md") {
          arrayMd.push(PATH);

          return resolve(arrayMd);
        } else if (stats.isDirectory()) {
          const arrayPromises = [];
          return check.readDir(PATH).then((records) => {
            const newrecords = records.map((pathFile) =>
              check.join(PATH, pathFile)
            );
            newrecords.forEach((newfile) => {
              arrayPromises.push(dirOrFilesMd(newfile));
            });
            return Promise.all(arrayPromises).then((value) => {
              value.forEach((elem) => {
                arrayMd = arrayMd.concat(elem);
              });

              return resolve(arrayMd);
            });
          });
        }
      })
      .catch(() => {
        // console.log(err)
      });
  });
};

const searchLinks = (PATH) => {
  return new Promise((resolve, reject) => {
    dirOrFilesMd(PATH).then((fil) => {
      fil.forEach((element) => {
        check
          .fileread(element)
          .then((res) => {
            let links = [];
            const renderer = new marked.Renderer();
            renderer.link = (href, file, text) => {
              links.push({
                href: href,
                text: text,
                file: PATH,
              });
            };

            marked(res, { renderer: renderer });
            resolve(links);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  });
};

const validatelink = (PATH) => {
  return new Promise((resolve, reject) => {
    searchLinks(PATH)
      .then((objs) => {
        objs = objs.filter((link) => link.href.charAt(0) != "#");
        let linkStatus = objs.map((element) => {
          return fetch(element.href)
            .then((res) => {
              if (res.status >= 200 && res.status < 400) {
                element.status_message = "OK";
                element.status = 200;
              } else if (res.status >= 400) {
                element.status_message = "FAIL";
                element.status = 400;
              }
            })
            .catch((err) => {
              element.status = err;
            });
        });
        Promise.all(linkStatus).then(() => resolve(objs));
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  dirOrFilesMd,
  searchLinks,
  validatelink,
};
