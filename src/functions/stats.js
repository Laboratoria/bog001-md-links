/* ---------- Stats Links (Unique + Total) ---------- */
const getStats = (arrLinks) => {
  const totalLinks = arrLinks.length;
  const linksUniqueArray = [...new Set(arrLinks.map((link) => link.href))];

  return { Total: totalLinks, Unique: linksUniqueArray.length };
};

/* ---------- Stats + Validate Links (Unique + Total + broken) ---------- */

const getStatsValidate = (arrLinksValidate) => {
  const totalLinks = arrLinksValidate.length;
  const linksUniqueArray = [...new Set(arrLinksValidate.map((link) => link.href))];
  const failedLinks = arrLinksValidate.filter((link) => link.statusText !== 'OK');

  return { Total: totalLinks, Unique: linksUniqueArray.length, Broken: failedLinks.length };
};

/* ---------- Get broken links ---------- */
/* const getBrokenValues = (arrLinksValidate) => {
  const failedLinks = arrLinksValidate.filter((link) => link.statusText === 'Fail');
  return { Broken: failedLinks.length };
}; */

module.exports = {
  getStats,
  getStatsValidate,
};
