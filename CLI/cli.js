#!/usr/bin/env node
const  md_checkLinks = require('../src');
const {cli} = require('../src/Options')
 
const PATH = process.argv[2];
const options = process.argv[3];
const option2 = process.argv[4];
 

cli(PATH, options, option2)
.then((resp) => console.log(resp))
.catch((err) => console.log(err));
 