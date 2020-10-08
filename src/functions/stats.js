/* ---------- Stats Links (Unique + Total) ---------- */
const getStats = (arrLinks) => {
  const totalLinks = arrLinks.length;
  const linksUniqueArray = [...new Set(arrLinks.map((link) => link.href))];
  // console.log(linksUniqueArray);

  return `
  Total = ${totalLinks}
  Unique = ${linksUniqueArray.length}`;
};

/* console.log(getStats(mocks.mockLinksInfo)) */

/* ---------- Get broken links ---------- */
const getBrokenValues = (arrLinksValidate) => {
  const failedLinks = arrLinksValidate.filter((link) => link.statusText === 'Fail');
  return `Broken = ${failedLinks.length}`;
};

/* console.log(getBrokenValues(mocks.mockLinksValidate)) */

module.exports = {
  getStats,
  getBrokenValues,
};
