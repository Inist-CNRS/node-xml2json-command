#!/usr/bin/env node
var xm = require('xml-mapping');
var util = require('util');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var xml = '';
process.stdin.on('data', function (chunk) {
  xml = xml + chunk;
});

process.stdin.on('end', function() {
  var json = xm.load(xml);
  console.log(JSON.stringify(json));
});
