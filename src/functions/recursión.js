const fs = require('fs').promises;
const path = require('path');

const tree = (fname) => {
  fname = path.resolve(fname)

  return fs.stat(fname)
    .then(stats => {
      if (!stats.isDirectory()){

      };
      // return
    })
    .catch()
};

console.log(tree(path.resolve('README-TEST.md')))
