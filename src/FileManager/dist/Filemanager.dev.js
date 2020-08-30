"use strict";

var fs = require('fs');

var p = require('path');

var fsExtra = require('fs-extra');

var rimraf = require("rimraf");

var _require = require('folder-hash'),
    hashElement = _require.hashElement; //const test = require("test.js");


var rootDIR = p.join('./', '/root'); //createDirectory(rootDIR, "test 2");
//createRootDirectory(rootDIR);
//deleteDirectory(rootDIR);
//console.log(fileCreatedDate(rootDIR));

emptyDirectory(rootDIR);
rootDirectoryChildren();

function createDirectory(path, name) {
  var dir = p.join(path, "/" + name); //set dir to database

  console.log('creating file ');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log('Directory ' + name + ' created');
  } else {
    console.log('Directory with name "' + name + '" exists in path"' + path + '"');
  }
}

function createRootDirectory() {
  var dir = p.join(rootDIR);
  console.log("creating file " + dir); //set to save in database

  var date_ob = new Date(); //get current time to work

  var columns = ['root', rootDIR, 1, '', '']; //insert('directory', columnnames, values);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log('root directory created');
  } else {
    console.log('root directory exists');
  }
}

function emptyDirectory(path) {
  rimraf(path + '/*', function () {
    console.log('done');
  });
}

function deleteDirectory(path) {
  rimraf(path, function () {
    console.log('done');
  });
}

function rename(file, rename) {
  fs.rename();
}

function createfile() {
  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

function fileCreatedDate(file) {
  var _fs$statSync = fs.statSync(file),
      birthtime = _fs$statSync.birthtime;

  return birthtime;
}

function rootDirectoryChildren() {
  var options = {
    folders: {
      exclude: ['.*', 'node_modules', 'test_coverage', 'dist']
    },
    //files: { include: ['*.js', '*.json'] }
    ignoreRootName: true
  };
  console.log('Creating a hash over the current folder:');
  hashElement(rootDIR, options).then(function (hash) {
    console.log(hash.toString());
  })["catch"](function (error) {
    return console.error('hashing failed:', error);
  });
}