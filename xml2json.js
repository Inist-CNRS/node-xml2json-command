/*jshint node:true */
"use strict";

var xm = require('xml-mapping'),
    optimist = require('optimist'),
    argv = optimist
    .options('help',{alias:'h', describe: 'Show help'})
    .options('caproot',{alias:'c',describe:'no root elem in JSON'})
    .usage('\nRead standard input.\nUsage : $0 [--help] [--caproot]')
    .argv; 


if ( argv.help ){
  optimist.showHelp();
  process.exit(0);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

var xml = '';
process.stdin.on('data', function (chunk) {
  xml = xml + chunk;
});

process.stdin.on('end', function() {
  var json = xm.load(xml);
  console.log(JSON.stringify(json, null, '\t'));
});


