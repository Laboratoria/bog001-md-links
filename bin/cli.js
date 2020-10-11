#!/usr/bin/env node
/* eslint-disable no-console */

const CFonts = require('cfonts');
const chalk = require('chalk');
const program = require('commander');
const mdLinks = require('../src/index.js');
const { getStats, getStatsValidate } = require('../src/functions/stats.js');

// const pathPrueba = '/Users/Ana/Desktop/bog001-md-links/test/docs/docs-2/docs-3';

CFonts.say('MD-LINKS!', {
  font: 'block',
  align: 'left',
  colors: ['#5dc1b9', '#ffdfa1'],
  env: 'node',
});

// eslint-disable-next-line max-len
// console.log(chalk.hex('8BDCD6').underline('¡Hola mundo!'), chalk.hex('FDA0A5').italic('Amo esto <3'));
// eslint-disable-next-line max-len
// console.log(`¡Hola mundo! ${chalk.hex('8BDCD6').underline('Estoy probando')} y creo que ${chalk.hex('FDA0A5').italic('amo esto <3')}`);

program
  .version('0.0.1')
  .option('-v, --validate', 'Return validate links')
  .option('-s, --stats', 'Return links stats');

program.parse(process.argv);
const path = process.argv[2];

/* ---------- Solo mdLinks ---------- */
if (!program.validate && !program.stats) {
  mdLinks(path, { validate: false })
    .then(console.log)
    .catch(console.error);
}

/* ---------- Validate ---------- */
if (program.validate && !program.stats) {
  mdLinks(path, { validate: true })
    .then(console.log)
    .catch(console.error);
}

/* ---------- Stats ---------- */
if (!program.validate && program.stats) {
  mdLinks(path, { validate: false })
    .then((resp) => {
      const statsLinks = getStats(resp);
      console.log(chalk.hex('FB5961')('--------------------'));
      console.log(chalk.hex('8BDCD6')('       Stats'));
      console.log(chalk.hex('FB5961')('--------------------'));
      /* console.log(`Total: ${statsLinks.Total}. Unique: ${statsLinks.Unique}.`); */
      console.table(statsLinks);
    })
    .catch(console.error);
}

/* ---------- Stats + Validate ---------- */
if (program.validate && program.stats) {
  mdLinks(path, { validate: true })
    .then((resp) => {
      const statsLinksValidate = getStatsValidate(resp);
      console.log(chalk.hex('FB5961')('--------------------'));
      console.log(chalk.hex('8BDCD6')('  Stats + Validate'));
      console.log(chalk.hex('FB5961')('--------------------'));
      // console.log(`
      // Total: ${statsLinksValidate.Total}.
      // Unique: ${statsLinksValidate.Unique}.
      // Broken: ${statsLinksValidate.Broken}`);
      console.table(statsLinksValidate);
    })
    .catch(console.error);
}
