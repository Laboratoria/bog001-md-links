const fetch = require('node-fetch');

/* ---------- Validate Links ----------*/
const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((singleLink) => {
    const link = singleLink;

    if (!/^https?:\/\//i.test(link.href)) { // Regex comprueba que !https
      link.href = `http://${link.href}`;
    }

    return fetch(link.href)
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          return { ...link, status: res.status, statusText: res.statusText };
        }
        return { ...link, status: res.status, statusText: 'Fail' };
      })
      .catch((err) => ({ ...link, status: `Error (${err.errno})`, statusText: `Error code (${err.code})` }));
  });
  return Promise.all(arrPromises);
};

module.exports = validateLinks;
