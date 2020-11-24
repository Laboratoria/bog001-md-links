//Funcion de validacion de enlaces

//Peticiones con fetch
const valid = (objectsArray) => {
  objectsArray.forEach((item) => {
    fetch(item.href)
      .then((data) => {
        console.log(item.href);
        console.log(item.text);
        console.log(item.file);
        console.log(data)})
      .catch((error) => {
        console.log(error)})
    });
};

module.exports = valid;
