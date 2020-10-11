/* eslint-disable no-console */
const chalk = require('chalk');
const mdLinks = require('../index.js');
const { getStats, getStatsValidate } = require('./stats');

const pathPrueba = '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3';

// Si solo es links
mdLinks(pathPrueba, { validate: false })
  .then(console.log)
  .catch(console.error);

// Si tengo validate
mdLinks(pathPrueba, { validate: true })
  .then(console.log)
  .catch(console.error);

// Si tengo stats
mdLinks(pathPrueba, { validate: false })
  .then((resp) => {
    const statsLinks = getStats(resp);
    console.log(chalk.hex('8BDCD6').underline('Stats'));
    console.log(`Total: ${statsLinks.Total}. Unique: ${statsLinks.Unique}.`);
    console.table(statsLinks);
  })
  .catch(console.error);

// Si tengo stats + validate
mdLinks(pathPrueba, { validate: true })
  .then((resp) => {
    const statsLinksValidate = getStatsValidate(resp);
    console.log(chalk.hex('8BDCD6').italic('Stats + Validate'));
    // console.log(`
    // Total: ${statsLinksValidate.Total}.
    // Unique: ${statsLinksValidate.Unique}.
    // Broken: ${statsLinksValidate.Broken}`);
    console.table(statsLinksValidate);
  })
  .catch(console.error);
